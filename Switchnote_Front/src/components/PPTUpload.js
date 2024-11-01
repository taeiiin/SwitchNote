//PPT->Script 과정에서 PPT 업로드하는 페이지
import AWS from "aws-sdk";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateS } from '../api/generateS'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function PPTUpload() {
  const navigate = useNavigate();
  //const [URLs, setURLs] = useState('');
  // Create state to store file
  const [file, setFile] = useState(null);
  let scr = '';

  // Function to upload file to s3ㅔ
  const uploadFile = async () => {
    // S3 Bucket Name
    const S3_BUCKET = "pptforscripts";

    // S3 Region
    const REGION = "ap-southeast-2";

    // S3 Credentials
    AWS.config.update({
      accessKeyId: "AKIAZCQSCY7OKWILBGV4",
      secretAccessKey: "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",
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    // Uploading file to s3

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

      await upload
        .then(data => {
          // File successfully uploaded
          alert("File uploaded successfully.");
          let filepath;
          if (file.name=='sample1.pptx') {
            filepath='https://pptforscripts.s3.ap-southeast-2.amazonaws.com/sample1.pptx';
          }
          else if (file.name=='sample2.pptx') {
            filepath='https://pptforscripts.s3.ap-southeast-2.amazonaws.com/sample2.pptx';
          }
          else if (file.name=='sample3.pptx') {
            filepath='https://pptforscripts.s3.ap-southeast-2.amazonaws.com/sample3.pptx';
          }
          generateS(filepath)
            .then(script => {
              const scr = String(script);
              console.log(scr);
              navigate('/TextEditor', { state: { scr: scr } });
            })
            .catch(error => {
              // 에러 처리
              console.error('Error:', error);
            });
        })
        .catch(err => {
          // Error handling
          console.error(err);
        });
  };
  // Function to handle file and store it to file state
  const handleFileChange = (e) => {
    // Uploaded file
    const file = e.target.files[0];
    // Changing file state
    setFile(file);
    console.log(
      "PPT 업로드 완료 : "+ file.name
    )
  };
  
  function input(e) {

  }

  return (
    <div>
      <p class='pageTitle'>PPT to Script</p>
      <p class='pageAddScript'>버튼 하나, 나의 든든한 서포터</p> 

      <div className='filename'>
      {file && <p>{file.name}</p>}
      </div>
      <div className="fileB">
        <label for='filebox'>파일 찾기</label>
        <input type="file" id="filebox" className='filebox' onChange={handleFileChange}/>
      </div>
      <button className="pptupload" onClick={uploadFile}>대본 생성</button>
    </div>
  );
}

export default PPTUpload;