import React, { useContext }  from 'react'
import Carousel3 from '../Carousels/Carousel3'
import Footer from '../Genericompo/Footer'
import Boxes from '../Genericompo/Boxes'
import { Store } from '../ContextAPI/DataStore'
import "../../App.css"
const Laptop = () => {
  const [Data] = useContext(Store);

  return (
    <div  style={{position:"relative",top:"0px"}}>
      <Carousel3/>
      <br />
      <h1 style={{textAlign:"center",fontWeight:"600",backgroundColor:"yellow"}}
>Trending Now!!! Hurry</h1>
      <div className="main_Container">
        <div className="card_render">
          {
         Data && Data.filter((data) => data.id<=28 && data.category==="Laptop").map((item ,index) => {
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
       <br />
       <img src="https://m.media-amazon.com/images/G/31/img23/CEPC/jup23/coop/boat/1500x300s._CB575835935_.gif" alt="" style={{width:"100%",height:"300px"}} />
       <br />
        <div className="main_Container">
        <div className="card_render">
          {
         Data && Data.filter((data) => data.id>=32 && data.category==="Laptop").map((item ,index) => {
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

export default Laptop
