import React, { useContext ,useState,useEffect} from 'react'
import Footer from '../../Genericompo/Footer'
import Boxes from '../../Genericompo/Boxes';
import { Store } from '../../ContextAPI/DataStore';
import "../../Carousels/Carousels.css"
import "../../../App.css"
const Perfumes = () => {
  const [Data] = useContext(Store);
  const images = [
    'https://images-static.nykaa.com/uploads/c69e1cee-c214-4e1d-bb35-f3c8dc3f848b.jpg?tr=w-1200,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/025d3241-6fac-4e13-be4b-d67568c600b7.jpg?tr=w-1200,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/aa64b1f3-9103-481f-949b-d532173ebe96.jpg?tr=w-1200,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/3aba8834-5b52-423d-bb86-67a3d101070e.png?tr=w-1200,cm-pad_resize'
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
    <div>
      <div className="main_Container">
      <div className="carousel-container">
      <div className="carousel">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
        <button onClick={prevSlide} className="carousel-control left">&lt;</button>
        <button onClick={nextSlide} className="carousel-control right">&gt;</button>
      </div>
    </div>
        <div className="card_render">
          {
         Data && Data.filter((data) => data.subCategory==="Perfumes").map((item ,index) => {
            return (
              <Boxes key={index}
              image = {item.image}
              id = {item.id}
              heading = {item.heading}
              rating = {item.rating}
              priceDrop = {item.PriceDrop}
              price = {item.price}
              category = {item.category}
              />
            );
          })}
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Perfumes
