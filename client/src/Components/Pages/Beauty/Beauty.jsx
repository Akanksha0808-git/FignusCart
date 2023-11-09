import React, { useContext } from 'react'
import Carousel2 from '../../Carousels/Carousel2'
import { NavLink } from 'react-router-dom';
import Footer from "../../Genericompo/Footer"
import "./Beauty.css"
import Boxes from '../../Genericompo/Boxes';
import { Store } from '../../ContextAPI/DataStore';
import "../../../App.css"
const Beauty = () => {
  const [Data] = useContext(Store);

  return (
    <div  style={{position:"relative",top:"50px"}}>
      <div className='different' >
       <NavLink to="/beauty/makeup" style={{textDecoration:"none"}}><div className='item' >
          <img src="https://images-static.nykaa.com/uploads/1837d6d8-9cfb-4cd5-9ab9-8a948997dcb1.jpg?tr=w-150,cm-pad_resize" alt="" />
          <p >Compact</p>
        </div></NavLink> 
        <NavLink to="/beauty/perfumes" style={{textDecoration:"none"}} ><div className='item'> <img src="https://images-static.nykaa.com/uploads/efc5fdc0-76de-4ee1-841a-cbce6eec617f.jpg?tr=w-150,cm-pad_resize" alt="" />
        <p >Perfume</p>
        </div></NavLink>
        
        <NavLink to="/beauty/handbag" style={{textDecoration:"none"}}> <div className='item' > <img src="https://images-static.nykaa.com/uploads/15241282-bca8-48a2-887f-f14349bf5fbc.jpg?tr=w-120,cm-pad_resize" alt="" />
        <p >HandBags</p>
        </div></NavLink>

       
        <NavLink to="/beauty/jwellery" style={{textDecoration:"none"}}> <div className='item' > <img src="https://images-static.nykaa.com/uploads/f285132c-076f-45e4-af94-0ea4ff0ff206.jpg?tr=w-300,cm-pad_resize" alt="" />
        <p >Jwellery</p>
        </div></NavLink>

       
        <NavLink to="/beauty/makeup" style={{textDecoration:"none"}}> <div className='item' > <img src="https://images-static.nykaa.com/uploads/3b94cf59-f6b0-4b5b-872f-56d67cc2b313.jpg?tr=w-150,cm-pad_resize" alt="" />
        <p >LipGloss</p>
        </div></NavLink>

       
        <NavLink to="/beauty/makeup" style={{textDecoration:"none"}}> <div className='item' > <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/7/276d2f4NHY_TEDSM00000554_1.jpg" alt="" />
        <p >Glasses</p>
        </div></NavLink>

       
        <NavLink to="/beauty/makeup" style={{textDecoration:"none"}}> <div className='item' > <img src="https://images-static.nykaa.com/uploads/a9a6bc9f-3738-44ce-96c1-03ab4de67ef4.jpg?tr=w-150,cm-pad_resize" alt="" />
        <p >Blush</p>
        </div></NavLink>

       
      </div>
      {/* <h1>beauty compo</h1> */}
      <Carousel2/>
      <div className="main_Container">
        <div className="card_render">
          {
         Data && Data.filter((data) => data.category==="Beauty").map((item ,index) => {
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

      <div style={{marginTop:"20px"}}>
        <h2 style={{textAlign:"center", fontSize:"2rem" , fontWeight:"700", margin:"70px 0 20px 0"}}>Biggest Sale</h2>
        <iframe
             height={"350px"}
             width={"100%"}
             style={{borderRadius:"10px"}}
             
          src="https://www.youtube.com/embed/TPpJSRKQaMQ"
          title="Top 20+ Best Phone Deals for You - Flipkart Big Billion Day 2023"
          frameborder="0"
          allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
          allowfullscreen
        ></iframe>
        <NavLink to="/beauty" ><img
          src="https://swissbeauty.in/cdn/shop/files/Valentine-sale-1700x510_1500x.gif?v=1675752231"
          alt=""
          height={"300px"}
          width={"100%"}
          className="ads"
        /></NavLink>
      
      <Footer/>
      
        </div>

    </div>
  )
}

export default Beauty
