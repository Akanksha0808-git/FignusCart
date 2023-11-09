import React, { useContext } from 'react';
import Carousel1 from '../Carousels/Carousel1';
import { Store } from '../ContextAPI/DataStore';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Footer from '../Genericompo/Footer';
import Boxes from '../Genericompo/Boxes';
import "../../App.css"

const Home = () => {
  const [Data] = useContext(Store);

  return (
    <>
      <Carousel1 />
      <br />
      <h1 style={{textAlign:"center",fontWeight:"600",backgroundColor:"yellow"}}>Greatest Deals With Great Offers</h1>
      <div className="main_Container">
        <div className="card_render">
          {
         Data && Data.filter((data) => data.id <=90 && data.id >23).map((item ,index) => {
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


      <div style={{ marginTop: "20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "700", margin: "70px 0 20px 0" }}>Biggest Sale</h2>
        <iframe
          height={"550px"}
          width={"100%"}
          style={{ borderRadius: "10px" }}
          src="https://www.youtube.com/embed/TPpJSRKQaMQ"
          title="Top 20+ Best Phone Deals for You - Flipkart Big Billion Day 2023"
          frameBorder="0"
          allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
          allowFullScreen
        ></iframe>
        <NavLink to="/beauty"><img
          srcSet="https://www.nykaa.com/media/wysiwyg/HPBANNER_GIF.gif"
          alt=""
          height={"300px"}
          width={"100%"}
          className="ads"
        /></NavLink>
      </div>
      <Footer />
    </>
  );
};

export default Home;


