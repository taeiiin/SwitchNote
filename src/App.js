//import logo from './logo.svg';
import './App.css';
import Templates from './components/Templates';
import Guide from './components/Guide';
import TxtInput from './components/TxtInput';
import PPTSel from './components/PPTSel';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <div>
            <div id="nav">
                <Link to='/'><img src={require('./logo.png')} alt="logo" /></Link>
                <ul>
                <li><a href="" className="nav1">WORKSPACE</a></li>
                <li><Link to='/Templates' className='nav1'>TEMPLATE</Link></li>
                <li><Link to="/Guide" className="nav1">GUIDE</Link></li>
                <li><Link to="/TxtInput" className="nav1">MYPAGE</Link></li>
                <li><Link to='/PPTSel' className="logoutB">logout</Link></li>
                </ul> 
            </div>
        </div>
        <Routes>
          <Route path="/"/>
          <Route path="/Templates" element={<Templates />}/>
          <Route path="/Guide" element={<Guide />}/>
          <Route path="/TxtInput" element={<TxtInput />}/>
          <Route path="/PPTSel" element={<PPTSel />}/>
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
