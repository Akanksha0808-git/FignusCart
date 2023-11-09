import React, { useContext } from 'react'
import Footer from '../../Genericompo/Footer'
import Boxes from '../../Genericompo/Boxes';
import { Store } from '../../ContextAPI/DataStore';
import "../../../App.css"
const HomeKitchen = () => {
  const [Data] = useContext(Store);

  return (
    <div  style={{position:"relative",top:"50px"}}>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/Jupiter/Dinnerware--cutlery-Header_PC_2.gif" alt="" style={{width:"100%",height:"350px"}} />
        <h1 style={{textAlign:"center",fontWeight:"600",backgroundColor:"yellow"}}
>Shop Now!!! Hurry</h1> 
<div className="main_Container">
        <div className="card_render">
          {
         Data && Data.filter((data) => data.category==="Home&Kitchen").map((item ,index) => {
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

export default HomeKitchen
