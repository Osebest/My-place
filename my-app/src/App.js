import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Hompage from './components/Hompage';
import Calculator from './components/Calculator/Calculator';
import Weather from './components/WeatherApp/Weather';
import Todos from './components/ToDo/Todo';
import Moon from './components/images/moon.png';
import Sun from './components/images/sun.png';
import rose from './components/images/Shaded-Red-Rose.svg'
import Slider from './components/ImageSlider/Slider';
import Error from './Error';
import HomeBtn from './components/HomeBtn';

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
      <Router>
      <div className='header'>
        <Link to='/' className='linkH'><h2 className='imageh'>Osebest 
          <span className='wait'>Creativity</span>
          <span><img alt='' src={rose}/></span>
        </h2>
        </Link>
        <div onClick={changeTheme} style={{cursor:'pointer'}}><img alt='la' src={Sun} style={{width:'30px', height:'30px'}}/></div>
      </div>
        <Routes>
          <Route path='/'  element={<Hompage />}/>
          <Route path='/calculator' element={<Calculator />}/>
          <Route path='/todos' element={<Todos />}/>
          <Route path='/weather' element={<Weather />}/>
          <Route path='/slider' element={<Slider />}/>
          <Route path='*' element={<Error />}/>
          <Route path='/homebtn' element={<HomeBtn />}/>
        </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
