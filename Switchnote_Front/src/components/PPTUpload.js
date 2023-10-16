import React, { useRef, useState } from 'react';
import './PPTUpload.css';
import MyButton from './MyButton.js'

function PPTUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleBrowseFiles = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  return (
    <div>
      {/* 일단 제가 사용한 css 적용할게요_jy */}
      <p class='pageTitle'>PPT to Script</p>
      <p class='pageAddScript'>버튼 하나, 나의 든든한 서포터</p> 
      {/* <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color:'black' }}>버튼 하나, 나의 든든한 서포터</p> */}
      <p style={{ color: 'lightgray', marginTop: '100px'}}>PPT 업로드</p>

      <input
        type="file"
        accept=".ppt,.pptx"
        ref={fileInputRef}
        onChange={handleFileUpload}
        hidden
      />

      <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="ppt-upload-box" onDrop={handleFileSelect} onDragOver={(event) => event.preventDefault()}>
              <p>{selectedFile ? selectedFile.name : "이곳에 파일을 드래그하세요."}</p>
          </div>

          <MyButton 
              text={'파일찾기'}
              onClick={handleBrowseFiles}
              type={"gray"}
              size={"small"}
          />
      </div>

      <a
        href="#"
        style={{ color: '#4982F7', textDecoration: 'underline' }}
        onClick={handleBrowseFiles}
      >
        워크스페이스에서 찾기
      </a>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px'}}>
      <MyButton text={'대본생성'}
            type={"blue"}
      />
      </div>
    </div>
  );
}

export default PPTUpload;
