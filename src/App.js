import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Hompage from './components/Hompage';
import Calculator from './components/Calculator';
import Moon from './components/images/moon.png';
import Sun from './components/images/sun.png';

function App() {
  const changeTheme = (e)=>{
    if (e.target.src === Sun) {
      e.target.src = Moon;
    }else{
      e.target.src = Sun;
    }
    backgroundCo();
  }
  const backgroundCo = ()=>{
    document.body.classList.toggle('dark');
  }
  return (
    <React.Fragment>
      <div className='header'>
        <h2 style={{flex:'10'}}>Osebest Creativity</h2>
        <div onClick={changeTheme} style={{flex:'1', cursor:'pointer'}}><img alt='la' src={Sun} style={{width:'30px', height:'30px'}}/></div>
      </div>
      <Router>
        <Routes>
          <Route path='/'  element={<Hompage />}/>
          <Route path='/calculator' element={<Calculator />}
          />
        </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
