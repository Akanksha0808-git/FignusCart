import React , { useContext }from 'react'
import Footer from '../../Genericompo/Footer'
import Carousel3 from '../../Carousels/Carousel3'
import Boxes from '../../Genericompo/Boxes'
import { Store } from '../../ContextAPI/DataStore'
import "../../../App.css"

const Iphone = () => {
  const [Data] = useContext(Store);

  return (
    <div  style={{position:"relative",top:"30px"}}>
  <img src='https://media.tenor.com/4mqis-ct_zkAAAAC/apple-apple-iphone.gif' style={{width:"100%",height:"300px"}}></img>
  <h1 style={{textAlign:"center",fontWeight:"600",backgroundColor:"yellow"}}
>Trending Now!!! Hurry</h1> 
      <div className="main_Container">
        <div className="card_render">
          {
         Data && Data.filter((data) => data.subCategory==='Android').map((item ,index) => {
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
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Madhav/Jupiter/Apple/P3R2/Mob_1242x300_2.jpg" alt="" style={{width:"100%",height:"300px"}} />
      <Footer/>
    </div>
  )
}

export default Iphone
