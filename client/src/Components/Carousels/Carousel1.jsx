import React, { useState, useEffect } from 'react';
import "./Carousels.css";

const Carousel1 = () => {
  const images = [
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cb9a4bc2ffd319f7.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/bb35af7b3673ec73.jpeg?q=20',
    'https://images-static.nykaa.com/uploads/2c9d626f-3d26-49e1-ac48-064b74644ce3.jpg?tr=w-1200,cm-pad_resize',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f8e89b5a8a8fba15.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e238e3eac14abdd8.jpeg?q=20',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/CatPage/JUPITER/Phase3/Header/Header_1500x300_01.gif'
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

export default Carousel1;
