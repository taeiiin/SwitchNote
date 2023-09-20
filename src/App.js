//import logo from './logo.svg';
import './App.css';
import Templates from './components/Templates';
import Guide from './components/Guide';
import TxtInput from './components/TxtInput';
import PPTSel from './components/PPTSel';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import FindIdPw from './components/FindIdPw'
import UpdateInfo from './components/UpdateInfo'
import TextEditor from "./components/TextEditor";
import PPTUpload from "./components/PPTUpload";
import Workspace from "./components/Workspace";
import PPTEditor from "./components/PPTEditor";
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

/*아직 DB 구축 전이라서 이렇게 넣음..*/
const scriptThumbnail = 'https://cdn.pixabay.com/photo/2017/06/10/07/13/file-2389211_1280.png';
const pptThumbnail = 'https://cdn.pixabay.com/photo/2022/03/08/03/57/ppt-7054986_1280.png';

const projects = [
  { id: '1', title: '논문 발표 대본', content: 'AWS 기반 AI 프레젠테이션 자동화 서비스 개발에 관한 연구에 대해 발표할 홍길동입니다.', type: 'script', thumbnail: scriptThumbnail},
  { id: '2', title: '3주차 프레젠테이션', content: '안녕하세요. 5조 발표를 맡은', type: 'script', thumbnail: scriptThumbnail},
  { id: '3', title: '프로모션 기획안', content: '브랜드 하나를 선정하여 프로모션 기획안을 작성함', type: 'script', thumbnail: scriptThumbnail},
  { id: '4', title: '논문 발표 자료', content:'논문 발표 자료', type:'ppt', thumbnail: pptThumbnail},
  { id: '5', title: '프로젝트종합설계.pptx', content:'프로젝트종합설계.pptx', type:'ppt', thumbnail: pptThumbnail}
];

function App() {
  
  /*아직 DB 구축 전이라서 이렇게 넣음..*/
  const getProjectById = (id) => {
    return projects.find((project) => project.id === parseInt(id));
  };

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <div>
            <div id="nav">
                <Link to='/'><img src={require('./logo.png')} alt="logo" /></Link>
                <ul>
                <li><Link to="/Workspace" className="nav1">WORKSPACE</Link></li>
                <li><Link to='/Templates' className='nav1'>TEMPLATE</Link></li>
                <li><Link to="/Guide" className="nav1">GUIDE</Link></li>
                <li><Link to="/UpdateInfo" className="nav1">MYPAGE</Link></li>
                <li><Link to='/SignIn' className="logoutB">logout</Link></li>
                </ul> 
            </div>
            <div>
            </div>
        </div>
        <Routes>
          <Route path="/" element={<Main />} exact/>
          <Route path="/Templates" element={<Templates />}/>
          <Route path="/Guide" element={<Guide />}/>
          <Route path="/TxtInput" element={<TxtInput />}/>
          <Route path="/PPTSel" element={<PPTSel />}/>
          <Route path="/SignIn" element={<SignIn />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/FindIdPw" element={<FindIdPw />}/>
          <Route path="/UpdateInfo" element={<UpdateInfo />}/>
          <Route path="/TextEditor/:projectId?" element={<TextEditor getProjectById={getProjectById} />} />
          <Route path="/PPTUpload" element={<PPTUpload />}/>
          <Route path="/Workspace" element={<Workspace projects={projects} />} />
          <Route path="/PPTEditor" element={<PPTEditor />}/>
        </Routes>
        {/* <Main /> */}
      </header>
    </div>
    
    </BrowserRouter>
  );
}
 
export default App;
