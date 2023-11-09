import React from 'react'
import Footer from '../../Genericompo/Footer'
import Carousel3 from '../../Carousels/Carousel3'

const Iphone = () => {
  return (
    <div  style={{position:"relative",top:"50px"}}>
      <Carousel3/>
      <h1>Iphone compo</h1>
      <img src="https://media3.giphy.com/media/26n79t82lmj989iAE/giphy.gif?cid=6c09b952btnq92ud5ebuu4pmwthbw1ee6ns4sn5rn39oeb6j&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" style={{width:"100%",height:"300px"}} />
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Madhav/Jupiter/Apple/P3R2/Mob_1242x300_2.jpg" alt="" style={{width:"100%",height:"300px"}} />
      <Footer/>
    </div>
  )
}

export default Iphone
