import React, { useRef, useState } from 'react';
import '../css/Calculator.css';
import { ButtonActions, btn } from "./CalcConfig";

export default function Calculator() {
  const btnRef = useRef(null);
  const expRef = useRef(null);
  const [expression, setExpression] = useState('');
  const btnClick = (item) =>{
    const expDiv = expRef.current;
    if(item.action===ButtonActions.Add){
      if(expDiv.innerText.length<=15){
        addDiv(item.display);
      }
      const oper = item.display !== 'x' ? item.display : '*';
      setExpression(expression + oper);
    }
    if(item.action===ButtonActions.Delete){
      expDiv.parentNode.querySelector('div:last-child').innerHTML ='';
      expDiv.innerHTML ='';
      setExpression('')
    }
    if(item.action===ButtonActions.Calc){
      if(expression.trim().length<=0) return;
      expDiv.parentNode.querySelector('div:last-child').remove();
      const cloneNode = expDiv.cloneNode(true);
      expDiv.parentNode.appendChild(cloneNode);

      const transform = `translateY(-25px) scale(0.7)`;
      try{
        // eslint-disable-next-line
        let res = eval(expression);
        setExpression(res.toString());
        setTimeout(()=>{
          cloneNode.style.transform = transform;
          expDiv.innerHTML = '';
          addDiv(Math.floor(res * 100000000) / 100000000);
        }, 200);
      }catch{
        setTimeout(()=>{
          cloneNode.style.transform = transform;
          cloneNode.innerHTML = 'Syntax Error'
        }, 200);
      }finally{
        console.log('calc complete')
      }
    }
  }
  const addDiv=(content)=>{
    const expDiv = expRef.current;
    const span = document.createElement('span');
    span.innerHTML = content;
    span.style.opacity='0';
    expDiv.appendChild(span);

    const width = span.offsetWidth + 'px';
    span.style.width = '0';

    setTimeout(()=>{
      span.style.opacity='1';
      span.style.width = width;
    }, 100)
  }
  return (
    <div className='main'>
      <h1>Calculator</h1>
      <div className='results'>
        <div ref={expRef} className='calcResults'></div>
        <div className='calcResults'></div>
      </div>
      <div ref={btnRef} className='allBtns'>
        {
          btn.map((item, index)=>(
            <button 
              key={index} 
              className={item.class}
              onClick={()=>btnClick(item)}>
              {item.display}
            </button>
          ))
        }  
      </div>
    </div>
  )
}
