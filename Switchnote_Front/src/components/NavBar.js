//네비게이션 바. 로고 크기 변환 이슈 해결 요망
//import React, {component} from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Routes, Route, Link} from 'react-router-dom';
import Workspace from './Workspace.js';
import Guide from './Guide.js';
import {useContext} from 'react';
import { AuthContext } from '../App';

function NavBar() {
    const { isLoggedIn, handleLogout } = useContext(AuthContext);

    return(
        <div>
            <div id="nav">
                <a href=""><img src={require('./images/logo.png')} alt="logo" /></a>
                <ul>
                    <li><Link to="/Workspace" className="nav1">WORKSPACE</Link></li>
                    <li><Link to="/Template" className="nav1">TEMPLATE</Link></li>
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
        </div>
    )
}

function App() {
    return (
        <Routes>
            <NavBar />
            <Route path="/Workspace" element={<Workspace />}></Route>
            <Route path="/Guide" element={<Guide />}></Route>
        </Routes>
    );
}

export default App;