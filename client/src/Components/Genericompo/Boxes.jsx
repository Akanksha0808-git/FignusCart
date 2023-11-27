import {React ,useState, useEffect} from "react";
import {  useNavigate } from "react-router-dom";
import {addtocart} from "../Redux/Slice"
import { useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import {  toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./Boxes.css"
import axios from "axios";

const Boxes = (props) => {

   
  const { heading,id,category,rating,priceDrop,price, image } = props;

  return (
    <Link to={"/detailpage/" + id + heading } state={{ articleID: id, Category: category }} style={{ textDecoration: 'none' }}>
    <div className="box">
    <div className="productCard">

    <div className="product_img">
      <img src={image} alt="" />
    </div>

    <div className="Card_Content">
      <div className="CardName">
        <h4>{heading}</h4>
        <br />
        <p className='product_rating'>Rating :<span>{rating}</span> </p>
        <br />
        <p className='Sale_price'>Sales Price : <span>{priceDrop}</span></p>
        <br />
        <p className='brand_price'>MRP : <span>{price}</span></p>
      </div>
      
      
                <button
                  className="ToCart"
                 
                >
                  Add To Cart
                </button>
            
    </div>
  </div>
  </div>
  </Link>
  );
};

export default Boxes;


