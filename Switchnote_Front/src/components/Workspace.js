import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Workspace.css';
import axios from 'axios';

function Workspace() {
  const [selected, setSelected] = useState('ppt');
  const [pptProjects, setPptProjects] = useState([]);
  const [scriptProjects, setScriptProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    const userId = localStorage.getItem('userId');

    if (!jwtToken || !userId) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/SignIn');
      return;
    }

    if (selected === 'ppt') {
      axios.get('/ppt/workspace', {
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      })
      .then(res => {
        setPptProjects(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    } else if (selected === 'script') {
      axios.get('/script/workspace', {
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      })
      .then(res => {
        setScriptProjects(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    }
  }, [selected]);

    return (
      <div className="workspace">
        <div className="button-container">
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
        </div>

        <div 
          className="project-list"
          style={{
            backgroundColor: selected === 'ppt' ? 'skyblue' : 'gray',
            maxWidth: '70vw',
            minWidth: '70vw',
            maxHeight: '40vw',
            minHeight: '40vw',
            overflowY: 'auto',
          }}
      >
      {selected === 'ppt' && (
        pptProjects.length > 0 ? pptProjects.map((project) => (
          <div key={project.id} className="flex-container">
            <div className="title">
              <h6 title={project.pptTitle}>{project.pptTitle.length > 20 ? project.pptTitle.slice(0, 20) + '...' : project.pptTitle}</h6>
            </div>
            <div className="subtitle">
              <p title={project.pptContent}>{project.pptContent}</p>
            </div>
            <div className="pptUrl">
              <iframe src={`https://docs.google.com/viewer?url=${project.pptUrl}&embedded=true`} style={{width: "100%", height: "500px"}} frameborder="0" />
            </div>
            <div className="createdAt">
              <p>{project.createdAt}</p>
            </div>
          </div>
        )) : <p style={{ fontSize: '1rem', cursor: 'pointer', color: 'lightgray'}} onClick={() => navigate('/PPTUpload')}>저장된 PPT가 없어요!<br/><br/>텍스트를 PPT로 만들어보세요</p>
      )}
      {selected === 'script' && (
        scriptProjects.length > 0 ? scriptProjects.map((project) => (
          <div key={project.id} className="flex-container">
            <div className="title">
              <h6 title={project.scriptTitle}>{project.scriptTitle.length > 20 ? project.scriptTitle.slice(0, 20) + '...' : project.scriptTitle}</h6>
            </div>
            <div className="subtitle">
              <p title={project.scriptContent}>{project.scriptContent}</p>
            </div>
            <div className="scriptUrl" style={{backgroundColor: 'white', color: 'black'}}>
              <p>{project.scriptUrl}</p>
            </div>
            <div className="createdAt">
              <p>{project.createdAt}</p>
            </div>
          </div>
        )) : <p style={{ fontSize: '1rem', cursor: 'pointer', color: 'lightgray'}} onClick={() => navigate('/PPTUpload')}>저장된 Script가 없어요!<br/><br/>PPT를 대본으로 만들어보세요</p>
      )}
      </div>
    </div>
  );
}

export default Workspace;
