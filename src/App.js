import React from 'react';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import First from './components/first';
import Second from './components/second';
import Home from './components/home';

function App() {
  return (
    <React.Fragment>
      <div> 
        Help me
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/first' element={<First/>}/>
          <Route path='/second' element={<Second/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
