import React from 'react'
import "./payment.css"
import {Link} from "react-router-dom"
const Success = () => {
  return (
   
    <div className='Payment_Contanier'>
    <div className="Sucess_Payment">

      <div className="Sucess_icon">
        <img src="https://media0.giphy.com/media/KB8C86UMgLDThpt4WT/giphy.gif" alt="" />
      </div>

      <div className="sucess_message">
      <h2>Order Placed Sucessfuly</h2>
      <h3>Thank you ! </h3>
      <h3>for</h3>
      <h3>Go to More Shopping</h3>
      <p><Link to={"/"}>Click Here</Link></p>
      </div>

    </div>
  </div>
  // <div className='Payment_Contanier' style={{width:"100%"}}>
  //   <Link to={"/"} >
  //   <img src="https://cdn.dribbble.com/users/1115047/screenshots/3447769/post-purchase-800x600.gif" />
  //   </Link>
  // </div>
  )
}

export default Success
