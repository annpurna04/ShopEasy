import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../App.css'; 

import watchImg from '../assets/watch.jpg';
import jacketImg from '../assets/jacket.jpg';
import smartphoneImg from '../assets/smartphone.jpg';
import tshirtImg from '../assets/tshirt.jpg';
import shoesImg from '../assets/shoes.jpg';

const images = [
  watchImg,
  jacketImg,
  smartphoneImg,
  tshirtImg,
  shoesImg,
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img src={src} alt={`slide-${idx}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
