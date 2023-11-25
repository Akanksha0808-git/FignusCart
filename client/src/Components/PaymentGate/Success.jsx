import React from 'react'
import "./payment.css"
import {Link} from "react-router-dom"
const Success = () => {
  return (
   
    <div className='Payment_Contanier'>
   

      <div className="Sucess_icon">
        <img src="https://media0.giphy.com/media/KB8C86UMgLDThpt4WT/giphy.gif" alt=""  style={{borderRadius:"50%"}} />
      </div>

      <div className="sucess_message">
      <h2>Order Placed Sucessfuly</h2>
      <h3>Thank you ! </h3>
      <h3>for Shopping</h3>
      <h3>Go to More Shopping</h3>
      <p><Link to={"/"}>Click Here</Link></p>
      </div>

   </div>
  
  )
}

export default Success
