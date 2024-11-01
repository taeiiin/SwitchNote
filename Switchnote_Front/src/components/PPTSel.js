import Table from 'react-bootstrap/Table';
import TxtInput from './TxtInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import axios from 'axios';


function PPTSel() {
  const location = useLocation();
  const { pptURLs,pptTitle: projectTitle, pptContent: projectContent } = location.state; // pptURLs 상태 접근
  const [selectedURL, setSelectedURL] = useState('');
  const navigate = useNavigate();

  const handleChoice = (url) => {
    setSelectedURL(url);
  }
  const handleRetry = (e) => {  // '추가 생성' 버튼 클릭 이벤트 핸들러
    e.preventDefault();  // form 제출 방지
    navigate('/TxtInput');  // 특정 경로로 이동하는 메서드, 경로는 실제 경로로 변경해야 함
  }
  const handleDownload = (e) => {
    e.preventDefault(); // form 제출 방지
    if (selectedURL) {
      window.open(selectedURL);
      axios.post('/ppt/download', { 
        pptUrl: selectedURL,
        pptTitle: projectTitle,  // 제목 추가
        pptContent: projectContent  // 부제목 추가
        // script: selectedURL,
        // scriptTitle: projectTitle,  // 제목 추가
        // scriptContent: projectContent  // 부제목 추가
      })
        .then(response => {
          // 다운로드 요청 성공 시 처리할 로직
          console.log('다운로드 요청 성공');
        })
        .catch(error => {
          // 다운로드 요청 실패 시 처리할 로직
          console.error('다운로드 요청 실패', error);
        });
    }
  }

  return (
    <div>
      <div id='PPTSelect'>
        PPT 디자인 선택
        <div>PPT를 만드는 가장 빠른 방법</div>
        <br/>
        <form>
          <Table className='PPTSelT'>
            <tr>
              {/* {pptURLs.map((url, index) => (
                <td key={index} onClick={() => handleChoice(url)}>
                  <img src={require(`./images/Choice${index + 1}.png`)} alt={`Choice${index + 1}`} id="ChoiceImg" />
                </td>
              ))} */}
              {pptURLs.map((url, index) => (
                <td key={index} onClick={() => handleChoice(url)}>
                  {selectedURL === url ? (
                    <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`} width="300" height="200"></iframe>
                  ) : (
                    <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`} width="300" height="200"></iframe>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              {pptURLs.map((url, index) => (
                <td key={index}>
                  <input
                    type='radio'
                    name='PPT1'
                    id='ChoiceB'
                    onClick={() => handleChoice(url)}
                  />
                </td>
              ))}
            </tr>
          </Table><br/>
          <div>
            <button id='Selected' onClick={handleDownload}>
              PPT 다운로드
            </button><br/>
            <button id='Retry' onClick={handleRetry}>추가 생성</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PPTSel;