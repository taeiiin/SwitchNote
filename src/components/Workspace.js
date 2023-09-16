import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Workspace.css';

// 여기에서 projects를 props로서 받습니다.
function Workspace({ projects }) {
  const [selected, setSelected] = useState('ppt');
  const navigate = useNavigate();

  const handleClick = (type) => {
    setSelected(type);
  };

  /*PPT 파일과 Script 파일 각각 수정 페이지가 다르므로 type도 함께 전달하는 것으로 수정함*/
  /*Workspace에 저장되는 각 파일의 projectId에 따라 수정 페이지가 나오도록 하였음*/
  const handleProjectClick = (type, projectId) => {
    if(type === 'ppt') {
      navigate(`/PPTEditor/${projectId}`);
    }
    else if (type === 'script') {
      navigate(`/TextEditor/${projectId}`);
    }
  };

  return (
    <div className="workspace">
      <div className="project-container">
        <button
          className={`project-btn ppt ${selected === 'ppt' ? 'active' : ''}`}
          onClick={() => handleClick('ppt')}
        >
          PPT
        </button>
        <button
          className={`project-btn script ${selected === 'script' ? 'active' : ''}`}
          onClick={() => handleClick('script')}
        >
          Script
        </button>
      </div>
      {/* 선택된 버튼에 따라 배경색상 변경 */}
      <div 
        className={`project-list`}
        style={{
          backgroundColor: selected === 'ppt' ? 'skyblue' : 'lightgray',
        }}
      >
        {projects.filter((project) => project.type === selected).map((project) =>
            (
              <div key={project.id} 
                   className={`project thumbnail`} 
                   onClick={() => handleProjectClick(project.type, project.id)}>
                <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
                <span>{project.title}</span>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Workspace;
