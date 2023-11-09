import React, { useState, useEffect } from 'react';
import "./Carousels.css";

const Carousel3 = () => {
  const images = [
    'https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Eelctronics/Page/COOP/Acer/Creatives/Amazon-Banner-Diwali-Acer-Aspire-5-1500X300._CB575943169_.jpg',
    'https://m.media-amazon.com/images/G/31/img23/CEPC/samsung/coop/Samsung_1500x300._CB575782012_.gif',
    'https://m.media-amazon.com/images/G/31/img23/CEPC/jup23/coop/boat/1500x300s._CB575835935_.gif',
    'https://m.media-amazon.com/images/G/31/img23/CEPC/jup23/p3/jbl/coop/1500-X-300-AUDIO-DIWALI-CATEGORY._CB575249532_.gif',
    'https://m.media-amazon.com/images/G/31/img23/Jupiter23/Laptops/Mainstream1.2_1500x300._CB575035949_.jpg'
    // Add more image file names as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto slide every 3 seconds (adjust the interval as needed)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
        <button onClick={prevSlide} className="carousel-control left">&lt;</button>
        <button onClick={nextSlide} className="carousel-control right">&gt;</button>
      </div>
    </div>
  );
};

export default Carousel3;
