import './App.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
  ];

  return (
    <div className="carousel-container" style={{ width: '60%', margin: 'auto', textAlign: 'center' }}>
      <Slider {...settings}>
        {quotes.map((quote, index) => (
          <div key={index} style={{ padding: '22px' }}>
            <h3 style={{ fontSize: '1.5em', color: '#000' }}>{quote}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};