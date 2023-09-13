//import React, {component} from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Routes, Route, Link} from 'react-router-dom';
import Guide from './Guide.js';

function NavBar() {
    return(
        <div>
            <div id="nav">
                <a href=""><img src={require('./images/logo.png')} alt="logo" /></a>
                <ul>
                <li><a href="" className="nav1">WORKSPACE</a></li>
                <li><a href="" className="nav1">TEMPLATE</a></li>
                <li><Link to="/Guide" className="nav1">GUIDE</Link></li>
                <li><a href="/UpdateInfo" className="nav1">MYPAGE</a></li>
                <li><a href="/SignIn" className="logoutB">logout</a></li>
                </ul> 
                <Routes>
                    <Route path="/Guide" element={<Guide />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default NavBar;