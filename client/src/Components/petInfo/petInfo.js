import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './petInfo.css';
import { NextArrow, PrevArrow } from './customArrow';
import casper from '../../Assets/petInfo/petInfo1.jpg';
import Bella from '../../Assets/petInfo/petInfo2.jpg';
import Elliot from '../../Assets/petInfo/petInfo3.jpg';
import Rio from '../../Assets/petInfo/petInfo5.jpg';
import Joy from '../../Assets/petInfo/petInfo6.jpg'

const PetInfo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   
    <div className="slider-container">
        <h1>Meet our cuties</h1>
      <Slider {...settings}>
        <div className="slide-item">
          <img src={Elliot} alt="Elliot" />
          <p>Meet Elliot, full of joy and excitement, always love to play and loves playing catch the ball</p>
        </div>
        <div className="slide-item">
          <img src={Joy} alt="Joy" />
          <p>Meet Joy, if you are lucky and joy is in a good mood you can also see him dance around jumping in the air freely and happily</p>
        </div>
        <div className="slide-item">
          <img src={Bella} alt="Bella" />
          <p>Meet Bella, a very calm and observant she-cat. If you want a peacefull pet partner, bella is your choice</p>
        </div>
        <div className="slide-item">
          <img src={casper} alt="Casper" />
          <p>Meet Casper, a very savage and howdy with a tint of sweetness, very high maintainance and very difficult to pleasure</p>
        </div>
        <div className="slide-item">
          <img src={Rio} alt="Rio" />
          <p>Meet Rio, this 3-year male is your go-to pet. Adjusts very smoothly in the new environment and do not have any problems </p>
        </div>
      </Slider>
    </div>
  );
};

export default PetInfo;
