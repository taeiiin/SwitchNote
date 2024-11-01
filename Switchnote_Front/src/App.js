//import logo from './logo.svg';
import './App.css';
import Templates from './components/Templates';
import Guide from './components/Guide';
import TxtInput from './components/TxtInput';
import TextInput from './components/TextInput';
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
import ToScript from "./components/ToScript";
import ToScriptS from "./components/ToScriptS";
import { BrowserRouter as Router, Routes, Route, Switch, Link, Navigate } from 'react-router-dom';
import {useState, createContext} from 'react';
import React from 'react';

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('loginId') !== null && localStorage.getItem('userId') !== null
  );

  const handleLogin = () => {
    // 로그인 처리
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // 로그아웃 처리
    setIsLoggedIn(false);
    localStorage.removeItem("loginId");
    localStorage.removeItem("userId");
  };

  return (
  
      <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      <div className="App">
        <header className="App-header">
        <div>
              <div id="nav">
                  <Link to='/'><img src={require('./logo.png')} alt="logo" /></Link>
                  <ul>
                  <li><Link to="/Workspace" className="nav1">WORKSPACE</Link></li>
                  <li><Link to='/Templates' className='nav1'>TEMPLATE</Link></li>
                  <li><Link to="/Guide" className="nav1">GUIDE</Link></li>
                  {isLoggedIn ? (
                      <li><Link to="/UpdateInfo" className="nav1">MYPAGE</Link></li>
                  ) : (
                      <li><Link to="/SignIn" className="nav1">MYPAGE</Link></li>
                  )}
                  {isLoggedIn ? (
                      <li><Link to="/" onClick={handleLogout} className="logoutB">logout</Link></li>
                  ) : (
                      <li><Link to="/SignIn" className="logoutB">login</Link></li>
                  )}
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
          <Route path="/TextInput" element={<TextInput />}/>
          <Route path="/PPTSel" element={<PPTSel />}/>
          <Route path="/SignIn" element={<SignIn />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/FindIdPw" element={<FindIdPw />}/>
          <Route path="/UpdateInfo" element={<UpdateInfo />}/>
          <Route path="/TextEditor" element={<TextEditor />}/>
          <Route path="/PPTUpload" element={<PPTUpload />}/>
          <Route path="/Workspace" element={<Workspace/>} />
          <Route path="/PPTEditor" element={<PPTEditor />}/>
          <Route path="/ToScript" element={<ToScript />}/>
          <Route path="/ToScriptS" element={<ToScriptS />}/>
        </Routes>
        {/* <Main /> */}
      </header>
    </div>
     </AuthContext.Provider>
    </BrowserRouter>
   
  );
}
 
export default App;
