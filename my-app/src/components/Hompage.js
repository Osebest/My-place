import React from 'react';
import './css/Homepage.css';
import { Link } from "react-router-dom";

export default function Hompage() {
  return (
    <main>
      <div className='main'>
        <h3>Check Out These Lovely Creations!!!</h3>
        <Link to='/calculator' className='link'><div className='btn'>Calculator</div></Link>
        <Link to='/todos' className='link'><div className='btn'>Todo-App</div></Link>
        <div className='btn'>Image-Slider</div>
        <div className='btn'>Weather-App</div>
      </div>
    </main>
  )
}
