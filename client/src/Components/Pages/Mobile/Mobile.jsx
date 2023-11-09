import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import Footer from '../../Genericompo/Footer';
import Boxes from '../../Genericompo/Boxes';
import { Store } from '../../ContextAPI/DataStore';
import Carousel3 from '../../Carousels/Carousel3';
import "../../../App.css"
const Mobile = () => {
  const [Data] = useContext(Store);

  return (
    <div  style={{position:"relative",top:"50px"}}>

<div className='different' >
       <NavLink to="/mobile/iphone" style={{textDecoration:"none"}}><div className='item' >
          <img src="https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
          <p >Apple</p>
        </div></NavLink> 
        <NavLink to="/mobile/android" style={{textDecoration:"none"}} ><div className='item'> <img src="https://m.media-amazon.com/images/I/71J8tz0UeJL._AC_UL480_QL65_.jpg" alt="" />
        <p >Samsung</p>
        </div></NavLink>
        
        <NavLink to="/mobile/redmi" style={{textDecoration:"none"}}> <div className='item' > <img src="https://m.media-amazon.com/images/I/71tCOhEigtL._AC_UL480_QL65_.jpg" alt="" />
        <p >Redmi</p>
        </div></NavLink>

       
        <NavLink to="/mobile/android" style={{textDecoration:"none"}}> <div className='item' > <img src="https://m.media-amazon.com/images/I/61RvCwjI7dL._AC_UL480_QL65_.jpg" alt="" />
        <p >Xiaomi</p>
        </div></NavLink>

       
        <NavLink to="/mobile/android" style={{textDecoration:"none"}}> <div className='item' > <img src="https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_QL65_.jpg" alt="" />
        <p >OnePlus</p>
        </div></NavLink>

       
        <NavLink to="/mobile/android" style={{textDecoration:"none"}}> <div className='item' > <img src="https://m.media-amazon.com/images/I/71lPcWlgL4L._AC_UL480_QL65_.jpg" alt="" />
        <p >Nokia</p>
        </div></NavLink>

       
        <NavLink to="/mobile/android" style={{textDecoration:"none"}}> <div className='item' > <img src="https://m.media-amazon.com/images/I/81WimZLWH1L._AC_UL480_QL65_.jpg" alt="" />
        <p >realme</p>
        </div></NavLink>

       
      </div>

<Carousel3/>


<br />
<h1 style={{textAlign:"center",fontWeight:"600",backgroundColor:"yellow"}}
>Trending Now!!! Hurry</h1>
      <div className="main_Container">
        <div className="card_render">
          {
         Data && Data.filter((data) => data.category==="Mobile" && data.id<=4).map((item ,index) => {
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
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/CatPage/JUPITER/Phase3/Header/Header_1500x300_01.gif" alt="" style={{width:"100%",height:"300px"}} />
        <div className="main_Container">
        <div className="card_render">
          {
         Data && Data.filter((data) => data.category==="Mobile" && data.id>=13).map((item ,index) => {
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

export default Mobile