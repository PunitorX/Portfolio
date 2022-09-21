import './App.css';
import ReactSwitch from 'react-switch'
import { createContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {BsFillMoonStarsFill, BsFillSunFill, BsGithub, BsLinkedin} from 'react-icons/bs';
import {AiFillMail} from 'react-icons/ai'
import Main from './components/pages/MainPage/Main';
import { Button } from './components/Button';

export const ThemeContext = createContext((null));

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>

    <Router>
      <div className='navbar'>
          <ul className="nav-list">
            <li className='nav-item'>
              <BsFillSunFill size={20} className='nav-toggle'/>
              <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} className='switch'/>
              <BsFillMoonStarsFill size={20}className='nav-toggle' />
            </li>
            <li className="nav-item" id='nav-icon'>
              <a href="https://github.com/PunitorX" className='nav-link'><BsGithub /></a>
            </li>
            <li className="nav-item" id='nav-icon'>
              <a href="https://www.linkedin.com/in/brendan-jones-75ab16227/" className='nav-link'><BsLinkedin /></a>
            </li>
            <li className="nav-item" id='nav-icon'>
              <a href="mailto:jones.brendan1996@gmail.com" target="google.com" className='nav-link'><AiFillMail /></a>
            </li>
            <li className="nav-item nav-btn">
              {Button ? (
                  <Link to='../../Resume.pdf' target='_blank' className='btn-link'>
                    <Button buttonStyle='primary' buttonColor='btn-dark'>Resume</Button>
                  </Link>
              ) : (
                  <Link to='../../Resume.pdf' target='_blank' className='btn-link'>
                    <Button buttonStyle='primary' buttonColor='btn-light'>Resume</Button>
                  </Link>
              )}
            </li>
          </ul>
      </div>
      <Routes>
          <Route path='/' exact element={<Main />} />
      </Routes>
    </Router>
      
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
