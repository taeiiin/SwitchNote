import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Workspace.css';

function Workspace({ projects }) {
  const [selected, setSelected] = useState('ppt');
  const [menuOpen, setMenuOpen] = useState(null);
  const navigate = useNavigate();

  const handleProjectClick = (type, projectId) => {
    if(type === 'ppt') {
      navigate(`/PPTEditor/${projectId}`);
    }
    else if (type === 'script') {
      navigate(`/TextEditor/${projectId}`);
    }
  };  

  // 더보기 메뉴 토글
  const toggleMenu = (id) => {
    setMenuOpen(prevId => prevId === id ? null : id);
  };

  const handleEditProject = (project) => {/* 수정 기능*/};
  const handleDeleteProject = (id) => {/* 삭제 기능*/};
  const handleDownloadProject = (project) => {/* 다운로드 기능*/};

  return (
    <div className="workspace">
      <div className="project-container">
        <button
          className={`project-btn ppt ${selected === 'ppt' ? 'active' : ''}`}
          onClick={() => setSelected('ppt')}
        >
          PPT
        </button>
        <button
          className={`project-btn script ${selected === 'script' ? 'active' : ''}`}
          onClick={() => setSelected('script')}
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
                className={`project`} 
                onClick={() => handleProjectClick(project.type || 'script', project.id)}>
              <div className="title">
                <span>
                  {project.title.length > 10 ? project.title.slice(0,10) + '...' : project.title}
                </span>
              </div>
              <div className="thumbnail">
                <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
              </div>
            </div>
          ))}

      </div>
    </div>
  );
}

export default Workspace;
