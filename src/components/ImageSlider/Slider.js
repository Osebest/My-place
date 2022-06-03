import React, {useState} from 'react';
import dataSlider from './SliderConfig';
import BtnSlider from './BtnSlider';
import '../css/Slider.css';
import HomeBtn from '../HomeBtn';
import BackBtn from '../BackBtn';

export default function Slider({reload}) {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
        setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === dataSlider.length){
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
      setSlideIndex(dataSlider.length)
    }
  }
  const moveDot = index => {
    setSlideIndex(index)
  }
  return (
    <React.Fragment>
      <div className='back'>
        <BackBtn />
        <h2>Photo Album</h2>
      </div>
      <div className='container'>
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={slideIndex === index + 1 ? "slide active" : "slide"}
              >
                <img 
                  alt=''
                  src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}  
                />
            </div>
          )
        })}

        <BtnSlider direction={"next"} moveSlide={nextSlide}/>
        <BtnSlider direction={"prev"} moveSlide={prevSlide}/>

        <div className="container-dots">
          {Array.from({length: dataSlider.length}).map((item, index) => (
            <div 
              key={index}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
      <div className='about'>
        <h2>{dataSlider[slideIndex-1].title}</h2>
        <p>{dataSlider[slideIndex-1].subTitle}</p>
      </div>
      <HomeBtn />
    </React.Fragment>
  )
}
