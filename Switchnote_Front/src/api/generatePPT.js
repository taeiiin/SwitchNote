export const generatePPT = async (data,category,title) => {
    try {
      const response = await fetch('http://localhost:8888/convert_ppt', { // Flask 서버 주소
        method: 'POST', // HTTP 메서드를 POST로 지정
        headers: {
            'Content-Type': 'application/json' // 요청 본문의 타입을 JSON으로 지정
        },
        body: JSON.stringify({ data, category, title }) // 요청 본문에 JSON 형식의 데이터를 추가
    });
    const urls = await response.json(); // 서버의 응답을 JSON으로 파싱
    return urls;
    } catch (error) {
        console.error('Failed to convert PPT:', error);
        throw error;
    }
  };
  