import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PPTEditor.css';
import MyButton from './MyButton.js';
import MyTextarea from './MyTextarea.js';

function PPTEditor({ getProject }) {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = getProject(projectId);
    setProject(selectedProject);
  }, [getProject, projectId]);

  const handleFinishClick = () => {
    console.log('모든 수정사항이 저장되었습니다.');
    // 수정사항 저장하는 로직 넣기
  };

  if (!project) return <p>프로젝트를 불러오는 중...</p>;

  return (
    <div className="ppt-editor">
      <div className="title-input">
        <MyTextarea
            placeholder={'제목을 입력하세요'}
            type={"title"}
        />
        <MyButton 
          text={'Finish'}
          onClick={handleFinishClick}
          type={"blue"}
          size={"small"}
        />
      </div>
      <div className="description-input">
        <MyTextarea
          placeholder={'부가설명을 입력하세요'}
          type={"small"}
        />
      </div>
      <div className="ppt-editing-area">
        <p>PPT 수정하는 칸</p>
      </div>
    </div>
  );
}

export default PPTEditor;
