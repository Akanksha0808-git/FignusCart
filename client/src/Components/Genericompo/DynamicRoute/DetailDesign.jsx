import React from 'react'
// import "./Latest.css"
import { Link } from "react-router-dom";


const DetailDesign = (props) => {
  const { Heading, id, image, description, Category } = props;
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
        <div className="username">
        
          <div className="name">
            <h3>Akanksha Sharma</h3>
            <p>Aug 8 2023 | 10 min read</p>
          </div>
        </div>
      </div>
    </Link>
  )
}



export default DetailDesign