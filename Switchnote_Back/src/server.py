# -*- coding: utf-8 -*-

from flask import Flask, request, jsonify
from flask_cors import CORS

import torch
from transformers import BertModel
from kobert_tokenizer import KoBERTTokenizer
import torch.nn as nn
from torch.utils.checkpoint import checkpoint

app = Flask(__name__)
CORS(app)

tokenizer = KoBERTTokenizer.from_pretrained('skt/kobert-base-v1')
bertmodel = BertModel.from_pretrained('skt/kobert-base-v1', return_dict=False)

class BERTClassifier(nn.Module):
    def __init__(self,
                 bert,
                 hidden_size=768,
                 num_classes=21,
                 dr_rate=None):
        super(BERTClassifier, self).__init__()
        self.bert = bert
        self.dr_rate = dr_rate

        self.classifier = nn.Linear(hidden_size , num_classes)

        if dr_rate:
            self.dropout = nn.Dropout(p=dr_rate)

    def forward(self, token_ids, attention_mask):
        _, pooler_output = checkpoint(self.bert.forward, token_ids.long(), attention_mask.float(), use_reentrant=True) 

        if self.dr_rate:
            out = self.dropout(pooler_output)
        else:
            out = pooler_output

        return self.classifier(out)


device_type = 'cuda' if torch.cuda.is_available() else 'cpu'
device = torch.device(device_type)
model = BERTClassifier(bertmodel).to(device)

model_checkpoint = torch.load('./checkpoint.pth', map_location=device)
model.load_state_dict(model_checkpoint['model_state_dict'])
 
@app.route('/predict', methods=['POST'])
def predict():
    data=request.json
    text=data['text']

    tokenizer_outputs=tokenizer(text, return_tensors='pt').to(device)
    inputs = {'token_ids': tokenizer_outputs['input_ids'], 'attention_mask': tokenizer_outputs['attention_mask']}

    model.eval()

    with torch.no_grad():
      prediction=model(**inputs).argmax(dim=-1).item()
      if prediction in [11]:
            text_eval="science_technology"
      elif prediction in [6]:
            text_eval="education"
      elif prediction in [18]:
            text_eval="financial_economy"
      elif prediction in [5,9]:
            text_eval="business_industry"
      elif prediction in [10]:
            text_eval="sports"
      elif prediction in [14]:
            text_eval="history_religion"
      elif prediction in [16,19]:
            text_eval="art"
      elif prediction in [1,2,7,8]:
            text_eval="food"
      elif prediction in [15,20]:
            text_eval="humanities"
      elif prediction in [17]:
            text_eval="medical"
      elif prediction in [3,12,13]:
            text_eval="nature_travel"
      elif prediction == 4:
            text_eval='IT_computer'

    response={
      'prediction': text_eval
    }
    
    return jsonify(response)

if __name__=='__main__':
   app.run(host='0.0.0.0', port=5000)