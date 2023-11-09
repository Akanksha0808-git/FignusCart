import React from "react";
import { Link } from "react-router-dom";
import "./Boxes.css"

const Boxes = (props) => {
  const { heading,id,category,rating,priceDrop,price, image } = props;
  return (
    <Link to={"/detailpage/" + id} state={{ articleID: id, Category: category }} style={{ textDecoration: 'none' }}>
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
        <Link to="">
        <button onClick={()=>window.scroll(0,0)}>Add to Cart</button>
        </Link>
    </div>
  </div>
  </div>
  </Link>
  );
};

export default Boxes;


