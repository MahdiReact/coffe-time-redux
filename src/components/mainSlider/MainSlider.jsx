import React from "react";
import Slider from "react-slick";

import {
  nova,
  breville,
  spersoDouble,
  cuppoccino,
  afogato,
  juice,
} from "./../../assets/sliderPics";
// import samplePic from './../../assets/samplePic.jpg';


const MainSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        <div className="slider-items">
          <img src={nova} />
          <div className="slider-items-desc">
            <h3>Hello Honey</h3>
            <p>Good!</p>
          </div>
        </div>
        <div className="slider-items">
          <img src={breville} />
          <div className="slider-items-desc">
            <h3>Hello Honey</h3>
            <p>Good!</p>
          </div>
        </div>
        <div className="slider-items">
          <img src={spersoDouble} />
          <div className="slider-items-desc">
            <h3>Hello Honey</h3>
            <p>Good!</p>
          </div>
        </div>
        <div className="slider-items">
          <img src={cuppoccino} />
          <div className="slider-items-desc">
            <h3>Hello Honey</h3>
            <p>Good!</p>
          </div>
        </div>
        <div className="slider-items">
          <img src={afogato} />
          <div className="slider-items-desc">
            <h3>Hello Honey</h3>
            <p>Good!</p>
          </div>
        </div>
        <div className="slider-items">
          <img src={juice} />
          <div className="slider-items-desc">
            <h3>Hello Honey</h3>
            <p>Good!</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
