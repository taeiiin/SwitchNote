export const generateS = async ( data ) => {
    try {
      const response = await fetch('http://localhost:8000/convert_script', { // Flask 서버 주소
        method: 'POST',
        body: JSON.stringify({data: data}), // 요청 본문에 JSON 형식의 데이터를 추가
        headers: {
            'Content-Type': 'application/json' // 요청 헤더에 Content-Type을 추가
        }
    });
    console.log(data);
    console.log(response);
    const script = await response.json();  // 서버의 응답을 JSON으로 파싱
    return script;
    } catch (error) {
        console.error('Failed to convert Script:', error);
        throw error;
    }
  };