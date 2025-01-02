import "./App.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {quotes.map((quote, index) => (
          <div key={index} style={{ padding: "22px" }}>
            <h3 style={{ fontSize: "1.5em", color: "#000" }}>{quote}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footerContact">
        Contact: <br />
        <p>Phone No: +91 7494051543 </p>
        <p>Email: s7shree@gmail.com</p>
        {/* <p>
          LinkedIn:
          <a href="https://www.linkedin.com/in/shruti-shree-99ab73192/" />
        </p> */}
      </div>
      <div>Address: BTM Layout, Bangalore, Karnatka 560068</div>
    </div>
  );
};
