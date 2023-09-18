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

const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, "FE_with_react/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/FE_with_react/build/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중..");
});

/*아직 DB 구축 전이라서 이렇게 넣음..*/
const projects = [
  {
    id: 1,
    type: "ppt",
    title: "프로젝트 1"
  },
  {
    id: 2,
    type: "ppt",
    title: "프로젝트 2"
  },
  {
    id: 3,
    type: "script",
    title: "프로젝트 3"
  },
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
          <Route path="/TextEditor" element={<TextEditor />}/>
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
