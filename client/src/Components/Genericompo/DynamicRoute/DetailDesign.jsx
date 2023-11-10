import React from 'react'
import "./DetailDesign.css"
import { Link } from "react-router-dom";


const DetailDesign = (props) => {
  const { Heading, id, image, description,price, Category,getitBy,priceDrop } = props;
  return (
   
    <Link to={"/detailpage/" + id} state={{ articleID: id, Category: Category }} style={{ textDecoration: "none" }}>
      <div className="card">
        <div className="img_card">
          <img src={image} alt="not Found" />
        </div>
        <h3 className="heading">{Heading}</h3>
        <div className="content">
          <p>{description}</p>
        </div>
      </div>
    </Link>
  
  )
}



export default DetailDesign