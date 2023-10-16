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
                    <li><a href="" className="nav1">TEMPLATE</a></li>
                    <li><Link to="/Guide" className="nav1">GUIDE</Link></li>
                    <li><a href="/UpdateInfo" className="nav1">MYPAGE</a></li>
                    {isLoggedIn? (<li><a href="/SignIn" className="logoutB">login</a></li>):(
                        <li><a href="/" onClick={handleLogout} className="logoutB">logout</a></li>
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