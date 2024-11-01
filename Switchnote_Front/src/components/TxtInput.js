import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import refreshIcon from './images/refreshIcon.png';
import copyIcon from './images/copyIcon.png';
import loadingIcon from './images/loading.gif';
import MyButton from './MyButton.js';
import MyTextarea from './MyTextarea.js';
import { CallGPT } from '../api/gpt';
import TextInput from './TextInput.js';
import { CallKoBERT } from '../api/kobert';
import PPTSel from './PPTSel.js';
import {generatePPT} from '../api/generatePPT'

function TxtInput({ getProjectById }) {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectSubTitle, setProjectSubTitle] = useState('');
  const [projectContent, setProjectContent] = useState('');
  const [project, setProject] = useState(null);
  const { projectId } = useParams();
  const [pptURLs, setPPTURLs] = useState('');
  const navigate = useNavigate();

  // 사용자 입력값 저장 상태
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (projectId) {
      const projectData = getProjectById(projectId);
      if (projectData) {
        setProjectContent(projectData.content); // 프로젝트 내용 저장
        setUserInput(projectData.content); // 프로젝트 내용이 Input이니까 userInput에도 동일한 내용 저장
        setProject(projectData); // 프로젝트 데이터 저장
        setProjectTitle(projectData.title); // 프로젝트 제목 저장
      }
    }
  }, [projectId]);

  // 텍스트 새로고침
  const handleClearText = () => {
    setProjectContent('');
    setUserInput('');
  };

  // 텍스트 복사
  const handleCopyText = async () => {
    await navigator.clipboard.writeText(userInput);
    alert('텍스트가 클립보드에 복사되었습니다.');
  };

  // ppt 생성 기능
  const handleSubmit = async () => {
    await handleCreatePPT(userInput);
    // transformGPTOutput(handleCreatePPT(userInput));

  }

  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ppt 생성 함수
  const handleCreatePPT = async(input) => {
    try{
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `${input}`});
      // const message = `[표지]
      // 페이지 번호: 1
      // 제목: 세계 음식 문화에 대한 탐구
      // 소제목: 
      // 작성자: [작성자 이름]
      
      // ---
      
      // [목차]
      // 페이지 번호: 2
      // 제목: 목차
      // 소제목: 
      //     1) 이탈리아 - 피자와 파스타의 고향
      //     2) 일본 - 사케와 초밥의 나라
      //     3) 멕시코 - 타코와 갓마레스
      //     4) 한국 - 김장과 한정식
      
      // ---
      
      // [본문]
      // 페이지 번호: 3
      // 제목: 이탈리아 - 피자와 파스타의 고향
      // 소제목: 
      //     1) 이탈리아의 음식 문화
      //     2) 지역별 다양한 스타일과 맛
      
      // 내용:
      //     - 이탈리아의 음식은 심플하면서도 신선한 재료를 사용하여 만들어집니다.
      //     - 지역별로 다양한 스타일과 맛을 가지고 있습니다.
      
      // ---
      
      // [본문]
      // 페이지 번호: 4
      // 제목: 일본 - 사케와 초밥의 나라
      // 소제목: 
      //     1) 일본의 음식 문화
      //     2) 정교함과 아름다움을 갖춘 일본 요리
      
      // 내용:
      //     - 일본 요리는 식재료의 신선도와 조리 기술에 큰 중점을 두고 있습니다.
      //     - 사케와 초밥을 비롯한 일본 요리는 정교함과 아름다움으로 인정받고 있습니다.
      
      // ---
      
      // [본문]
      // 페이지 번호: 5
      // 제목: 멕시코 - 타코와 갓마레스
      // 소제목: 
      //     1) 멕시코의 음식 문화
      //     2) 다양한 맛과 향을 갖춘 멕시코 요리
      
      // 내용:
      //     - 멕시코 요리는 매우 다양하고 풍부한 맛과 향을 가지고 있습니다.
      //     - 타코는 멕시코인들에게 깊은 정체성과 자부심을 주는 중요한 요소입니다.
      
      // ---
      
      // [본문]
      // 페이지 번호: 6
      // 제목: 한국 - 김장과 한정식
      // 소제목: 
      //     1) 한국의 음식 문화
      //     2) 발효 식품과 다양하게 조미된 음식의 특징
      
      // 내용:
      //     - 김장은 한국에서 가장 중요하게 여겨지며, 건강에 좋다고 알려져 있습니다.
      //     - 한정식은 한국 전통음식으로, 여러 개의 반찬이 함께 제공되어 왕성함과 다양성을 나타냅니다.
      
      // ---
      
      // [마무리]
      // 페이지 번호: 7
      // 마무리 문장: 세계 각국의 음식 문화를 살펴보면 그들이 지닌 독특함과 창조력을 발견할 수 있습니다. 음식은 우리가 속하는 문화와 밀접하게 연결되어 있으며, 인류가 가진 창조력과 차별성을 보여주는 중요한 영역입니다. 우리는 서로 다른 음식문화를 경험함으로써 상호 이해와 교류를 할 수 있습니다.`;
      console.log(message);

      console.log(transformGPTOutput(message));
      
      //kobertResult 변수에 kobert 수행 결과가 들어 있음
      const kobertResult = await CallKoBERT({text: `${input}`})
      // const kobertResult = 'education';
      console.log(kobertResult);
      const url = await generatePPT(transformGPTOutput(message),kobertResult,projectTitle);
      setPPTURLs(url);
      navigate('/PPTSel', { state: { pptURLs: url, pptTitle: projectTitle, pptContent: projectSubTitle } }); 

      console.log(url);
    } catch(error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  //gpt 결과를 {page:,type:,title:,subtitle:,content:} 형식으로 변환하는 함수
  const transformGPTOutput = (gptOutput) => {
    // '---' 기호를 기준으로 페이지 분리
    const pages = gptOutput.split('---');
  
    const database = [];
  
    // 페이지 타입과 해당하는 알파벳 문자 매핑
    const pageTypeMapping = {
        '[표지]': 'a',
        '[목차]': 'b',
        '[본문]': 'c',
        '[마무리]': 'd'
    };
  
    for (const page of pages) {
        const lines = page.split('\n');
  
        let title = "", subtitle = "", contentList = [], pageNumber = 0, pageType = "";
  
        for (const line of lines) {
            if (Object.keys(pageTypeMapping).some(pageTypeKey => line.includes(pageTypeKey))) {
                const matchedPageTypeKey = Object.keys(pageTypeMapping).find(pageTypeKey => line.includes(pageTypeKey));
  
                if (matchedPageTypeKey) {
                    pageType = pageTypeMapping[matchedPageTypeKey];
                }
            } else if (line.includes("페이지 번호:")) {
                pageNumber = parseInt(line.split("페이지 번호:")[1].trim());
            } else if (line.includes("제목:")) {
                title += line.split("제목:")[1].trim();
            } else if (line.includes("소제목:")) {
                subtitle += line.split("소제목:")[1].trim();
            } else if (line.includes("내용:") || line.includes("마무리 문장:")) {
                contentList.push(line.trim());
            } else {
                if (line.trim().length > 0) {
                    contentList.push(line.trim());
                }
            }
        }
  
        const dataDict = {
            page: pageNumber, 
            type: pageType,
            title: title, 
            subtitle: subtitle, 
            content: contentList
        };
  
        database.push(dataDict);
    }
  
    return database;
  };

  // 입력한 텍스트를 txt 파일로 저장
  const handleDownload = (title, content) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = title ? `${title}.txt` : "Untitled.txt";
    document.body.appendChild(element); 
    element.click();
  };
  
  return (
    <div>
      <h3 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>TEXT 변환, 그리고 PPT 생성</h3>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <label htmlFor="fileName"></label>
          <MyTextarea
            placeholder={project ? project.title : '파일명을 입력하세요'} 
            type={"title"}
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />

        <label htmlFor="description"></label>
          <MyTextarea 
            placeholder={'부가설명을 입력하세요'}
            type={"small"}
            isLoading={isLoading}
            value={projectSubTitle}
            onChange={(e) => setProjectSubTitle(e.target.value)}
          />
      </div>
      
      <div style={{ width: "100%", textAlign:"right", marginTop:'50px'}}>
        <img
          src={refreshIcon}
          alt="새로고침"
          onClick={handleClearText}
          style={{ cursor: 'pointer'}}
        />
      </div>

      <div>
        <TextInput 
          isLoading={isLoading} 
          onSubmit={setUserInput} 
          value={userInput}
        />
      </div>

      <div style={{ width: "100%", textAlign:"right" }}>
        <img
          src={copyIcon}
          alt="텍스트 복사"
          onClick={handleCopyText}
          style={{ cursor: 'pointer'}}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap:'10px', marginTop:'50px'}}>
        {isLoading ? (
          <img src={loadingIcon} alt="Loading..." />
        ) : (
          <MyButton 
            text={'PPT 생성'}
            onClick={() => handleSubmit(userInput)}
            type={"blue"}
          />
        )}

        <MyButton text={'.txt 파일로 다운로드'}
          onClick={() => handleDownload(projectTitle, userInput)}
          type={"gray"}
        />
      </div>
    </div>
  );
}

export default TxtInput;
