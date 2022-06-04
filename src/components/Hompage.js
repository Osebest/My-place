import React from 'react';
import './css/Homepage.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faSquareCheck, faGlobe, faImages } from '@fortawesome/free-solid-svg-icons';

export default function Hompage() {
  return (
    <main>
      <div className='main'>
        <h3>Check Out These Lovely Creations!!!</h3>
        <Link to='/calculator' className='link'>
          <div className='btn'>Calculator
            <FontAwesomeIcon 
              icon={faCalculator}
              className='icon' 
              size='lg' pull='left'
              beat
            />
          </div>
        </Link>
        <Link to='/todos' className='link'>
          <div className='btn'>Todo-App
            <FontAwesomeIcon 
              icon={faSquareCheck}
              size='lg' pull='left'
              className='icon'
              bounce
            />
          </div>
        </Link>
        <Link to='/weather' className='link'>
          <div className='btn'>Weather-App
          <FontAwesomeIcon 
              icon={faGlobe}
              size='lg' pull='left'
              className='icon'
              spin
            />
          </div>
        </Link>
        <Link to='/slider' className='link'>
          <div className='btn'>Image-Slider
          <FontAwesomeIcon 
              icon={faImages}
              size='lg' pull='left'
              className='icon'
              fade
            />
          </div>
        </Link>
      </div>
    </main>
  )
}
