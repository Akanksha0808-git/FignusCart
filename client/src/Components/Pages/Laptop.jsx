import React from 'react'
import Carousel3 from '../Carousels/Carousel3'
import Footer from '../Genericompo/Footer'

const Laptop = () => {
  return (
    <div  style={{position:"relative",top:"50px"}}>
      {/* <h1>Laptop compo here</h1> */}
      <Carousel3/>
      <img src="https://m.media-amazon.com/images/G/31/img23/CEPC/jup23/coop/boat/1500x300s._CB575835935_.gif" alt="" style={{width:"100%",height:"300px"}} />
      <Footer/>
    </div>
  )
}

export default Laptop
