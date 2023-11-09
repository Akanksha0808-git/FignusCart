import React, { useContext } from 'react'
import Footer from '../../Genericompo/Footer'
import Boxes from '../../Genericompo/Boxes';
import { Store } from '../../ContextAPI/DataStore';
import "../../../App.css"

const Tabs = () => {
  const [Data] = useContext(Store);

  return (
    <div  style={{position:"relative",top:"50px"}}>
        <div className="main_Container">
        <div className="card_render">
          {
         Data && Data.filter((data) => data.category==="Tablets" && data.id%2=='0').map((item ,index) => {
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

export default Tabs
