export const CallGPT = async ({prompt}) => {
    const messages = [
        {role: "system", content: `You are a helpful assistant who helps me with my presentation.`},

        {role: "user", content:
        `
        """
        이제부터 첨부한 파일을 내용으로 하는 프레젠테이션 제작에 필요한 요소를 생성할거야.
        표지, 목차, 본문, 마무리까지 총 10페이지 프레젠테이션 자료를 만들건데, 표지 1장, 목차 1장, 본문 7장, 마무리 1장으로 구성할거야.
        각 페이지마다 어떤 내용을 넣어야할지 제시해줘.

        본문 페이지를 만들 때 세 가지 조건이 있어.
        첫째, 각 페이지에는 내용을 대표할 제목과, 이를 세분화시킨 5개의 소제목을 뽑을거야. 제목은 20자 이내, 소제목들은 12자 이내로 생성해.
        둘째, 소제목에 따른 내용에는 주요 키워드나 문장을 넣을거야. 
            단어의 빈도와 내용에 대한 주제를 통해 키워드 5개 미만을 추출하고, 주요 문장은 본문 7장의 분량에 맞게 적절히 조절해줘.
        셋째, 만약 첨부한 파일의 내용으로 본문 7장을 모두 구성하지 못하겠다면, 장 수를 줄여서 구성해도 돼. 
            하나의 제목에 소제목이 여러 개 있다면, 소제목마다 페이지를 나누어도 좋아.

        아래는 추가적인 조건이야.
        - 프레젠테이션 제작에 사용할거니까 중요한 문장만 간결하게 부탁해.
        - 몇 번째 페이지에 들어갈 내용인지 알기 위해 페이지 번호를 추가해줘.
        - 페이지를 나눌 때는 --- 으로 구분해줘
        - [마무리] 부분에는 첨부한 파일의 내용에 대해, 청자에게 좋은 인상을 줄 수 있는 창의적이고 설득력 있는 마무리 문장 한 줄을 생성해줘.

        생략하지 말고 다 출력해주고, 전체적으로는 아래와 같은 형식으로 출력해줘.

        예시)
        [표지]
        페이지 번호:
        제목:
        소제목:
        작성자:

        ---

        [목차]
        페이지 번호:
        제목:
        소제목:
            1)
            2)
            3)
            4)

        ---

        [본문]
        페이지 번호:
        제목:
        소제목:
            1)
            2)

        내용:
            - 내용 1
            - 내용 2

        ---

        [본문]
        페이지 번호:
        제목:
        소제목:
            1)
            2)
        내용:
            - 내용 1
            - 내용 2
            
        ---

        [본문]
        페이지 번호:
        제목:
        소제목:
            1)
            2)
        내용:
            - 내용 1
            - 내용 2

        ---

        [마무리]
        페이지 번호:
        마무리 문장:
        """
        `},

        {role: "user", content: `"""${prompt}"""`}
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages,
            temperature: 0.7,
            max_tokens: 1_000,
        }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    
    if (!responseData.choices || !responseData.choices.length) {
      throw new Error('No choices in response data');
    }

   return responseData.choices[0].message.content;
};