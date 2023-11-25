  import React, { useState } from 'react'
import "./Navupper.css"
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import "../assets/logo.jpg"
const Navupper = () => {
  // const [name, setname] = useState("");
  const select = useSelector((state) => state.cart.data);
  const userid = localStorage.getItem("userid");
  const filteredItems = select.filter((item) => item.user_id === userid);
  const [data1, setdata] = useState([]);
  // const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  return (

    <div className='Navupper'>

      <div className="left-message">
        <a href="" target="_blank">Diwali Dhamaka Sale - Festive Deals You Can't Miss!  </a>
      </div>




      <div className="navbar navbar-light">

        <div className="cart_and_Sign_In">


          <div className="avtar">
            {
              email ? (<Avatar className="avtar " style={{ background: "skyblue" }}>{email.split("")[0].toUpperCase()}</Avatar>) : (<Avatar className="avtar " />)
            }
          </div>
        </div>

        <div className='cart'>
          <Link to={"/order"}>
            {
              filteredItems.length ? (<Badge badgeContent={filteredItems.length} color="primary">
                <ShoppingCartIcon id="icon" />
              </Badge>)
                :
                (<Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>)
            }
          </Link>
        </div>

      </div>


    </div>

  )
}

export default Navupper