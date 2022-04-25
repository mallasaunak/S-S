import { useState, useEffect } from 'react';
// import {AioutlineArrowLeft ,AioutlineArrowRight} from "react-icons/ai"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import {sliderData} from './slider-data';
import "./Slider.scss";
// import { Navbar } from '../index';
const Slider = () => {
  const [currentSlide, setCurrentSlider ] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlider(currentSlide === slideLength - 1 ? 0 :
      currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlider(currentSlide === 0 ? slideLength - 1 : 
      currentSlide - 1 );
  };
  
  function auto (){
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlider(0)
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide]);
  return (
    <>
    <div className="slider">
      <AiOutlineArrowRight className="arrow prev" onClick={nextSlide} />
      <AiOutlineArrowLeft className="arrow next"  onClick={prevSlide} />

      {sliderData.map((slide, index) => {
        return (
          <div className={index === currentSlide ? 
          "slide current" : "slide"} key={index}>
          {index === currentSlide && (
            <>
            <img className="logo" src={slide.image} alt="slide" />
            <div className="content">
              <h2>{slide.heading}</h2>
              <p>{slide.desc}</p>
              {/* <hr /> */}
              {/* <button className="--btn--btn-primary">Get Started</button> */}
            </div>
            </>
          )}
          </div>
        )
      })}

    </div>
    </>
  )
}

export default Slider