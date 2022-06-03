import React from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function BackBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <FontAwesomeIcon 
          icon={faChevronCircleLeft}
          pull='left' size='lg'
          className='iconC'
          onClick={()=>navigate(-1)}
        />
    </div>
  )
}
