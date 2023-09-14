import React, { useRef, useState } from 'react';
import refreshIcon from './images/refreshIcon.png';
import copyIcon from './images/copyIcon.png';
import MyButton from './MyButton.js';
import MyTextarea from './MyTextarea.js';

function TextEditor() {
  const [text, setText] = useState('');
  const textAreaRef = useRef(null);
  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleClearText = () => {
    if(textAreaRef.current) {
      textAreaRef.current.value = '';
      setText('');
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
            placeholder={'파일명을 입력하세요'}
            type={"title"}
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
          value={text}
          onChange={handleTextChange}
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
