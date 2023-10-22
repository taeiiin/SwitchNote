import React, { useEffect, useRef, useState } from 'react';
import {useParams} from 'react-router-dom'
import refreshIcon from './images/refreshIcon.png';
import copyIcon from './images/copyIcon.png';
import MyButton from './MyButton.js';
import MyTextarea from './MyTextarea.js';
import { CallGPT } from '../api/gpt';
import TextInput from './TextInput.js';
import { CallKoBERT } from '../api/kobert';

function TextEditor({ getProjectById }) {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectContent, setProjectContent] = useState('');
  const [project, setProject] = useState(null);
  const { projectId } = useParams();
  
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
  }

  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ppt 생성 함수
  const handleCreatePPT = async(input) => {
    try{
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `${input}`});
      setData(message)

      //gpt 결과를 koBERT에 전달할 것임
      //kobertResult 변수에 kobert 수행 결과가 들어 있음
      const kobertResult = await CallKoBERT({gptOutput: message})
      console.log(kobertResult);
    } catch(error) {
    } finally {
      setIsLoading(false);
    }
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
        <MyButton text={'PPT 생성'}
            onClick={() => handleSubmit(userInput)}
            type={"blue"}
            loading={isLoading}
        />

        <MyButton text={'.txt 파일로 다운로드'}
          onClick={() => handleDownload(projectTitle, userInput)}
          type={"gray"}
        />
      </div>
    </div>
  );
}

export default TextEditor;
