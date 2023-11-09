import React, { useState, useEffect } from 'react';
import "./Carousels.css";

const Carousel2 = () => {
  const images = [
    'https://images-static.nykaa.com/uploads/915d0e3a-401e-409a-ab27-5e8609c0ee34.jpg?tr=w-1200,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/e8fd704f-bdc8-4f89-ba15-96bcbf605719.jpg?tr=w-1200,cm-pad_resize',
    'https://images-static.nykaa.com/creatives/beffe962-f5a9-47c0-a4df-58f8a5d4ce5a/default.jpg?tr=w-1200,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/9a00c150-df17-42a1-b024-916ac56eada5.jpg?tr=w-1200,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/8ad91d93-a9cd-4697-850e-531ad7075c94.jpg?tr=w-1200,cm-pad_resize'
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
    // Auto slide every 3 seconds (adjust the interval as needed)
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(interval);
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

export default Carousel2;

