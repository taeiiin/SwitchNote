export const CallKoBERT = async (input) => {
    try {
      const response = await fetch('http://localhost:8000/predict', { // Flask 서버 주소
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      
      return data.prediction; // 예측 결과 반환
  
    } catch (error) {
      console.error('Error:', error);
    }
  };
  