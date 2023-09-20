import React, { useEffect, useRef, useState } from 'react';
import {useParams} from 'react-router-dom'
import refreshIcon from './images/refreshIcon.png';
import copyIcon from './images/copyIcon.png';
import MyButton from './MyButton.js';
import MyTextarea from './MyTextarea.js';

function TextEditor({ getProjectById }) {
  const [projectTitle, setProjectTitle] = useState('');
  const [project, setProject] = useState(null); // 프로젝트 데이터를 저장할 상태 추가
  const textAreaRef = useRef(null);
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      const projectData = getProjectById(projectId);
      if (projectData && textAreaRef.current) {
        textAreaRef.current.value = projectData.content;
        setProject(projectData); // 프로젝트 데이터 저장
        setProjectTitle(projectData.title); // 프로젝트 제목 저장
      }
    }
  }, [projectId]);
  
  const handleTextChange = (e) => {
    setProject({...project, content: e.target.value});
  };
  
  const handleClearText = () => {
    if(textAreaRef.current) {
      textAreaRef.current.value = '';
      setProject({...project, content: ''});
    }
  };

  const handleCopyText = async () => {
    if(textAreaRef.current) {
      await navigator.clipboard.writeText(textAreaRef.current.value);
      alert('텍스트가 클립보드에 복사되었습니다.');
    }
  };

  const handleSaveWorkspace = () => {
    // Workspace 저장 구현
  };

  const handleDownload = () => {
    // 파일 다운로드 구현
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <label htmlFor="fileName"></label>
          <MyTextarea
            placeholder={project ? project.title : '파일명을 입력하세요'} // 제목이 있으면 그걸 보여주고 없으면 플레이스홀더 텍스트 보여주기
            type={"title"}
            value={project ? project.title : ''}
            onChange={(e) => setProject({...project, title: e.target.value})}
          />
  
        <label htmlFor="description"></label>
          <MyTextarea
            placeholder={'부가설명을 입력하세요'}
            type={"small"}
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
        <MyTextarea
          ref={textAreaRef}
          id="text"
          rows="10"
          value={project ? project.content : ''} // 프로젝트 내용이 있으면 그걸 보여주고 없으면 빈 문자열 보여주기
          onChange={(e) => setProject({...project, content: e.target.value})} // 내용 변경 시 프로젝트 데이터도 함께 업데이트하기
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
        <MyButton text={'Workspace에 저장'}
            onClick={handleSaveWorkspace}
            type={"blue"}
        />
        <MyButton text={'.txt 파일로 다운로드'}
            onClick={handleDownload}
            type={"gray"}
        />
      </div>
    </div>
  );
}

export default TextEditor;
