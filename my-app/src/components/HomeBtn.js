import React from 'react';
import { useNavigate } from "react-router-dom";

export default function HomeBtn() {
  const navigate = useNavigate();
  return (
    <div className='homeBtn'>
      <button onClick={()=>navigate('/')}>
        Go Home
      </button>
    </div>
  )
}
