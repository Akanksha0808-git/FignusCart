// /* eslint-disable jsx-a11y/heading-has-content */
// import React, { useEffect, useState } from "react";
// // import axios from "axios";
// import { useLocation } from "react-router-dom";

// // import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import { Store } from "../../ContextAPI/DataStore";
// import { Link } from "react-router-dom";
// // import { useSelector, useDispatch } from "react-redux";
// // import { addtocart } from "../Redux/Slice/Slice";
// // import { ToastContainer, toast } from "react-toastify";
// // import Mutlislder from "../multiSlider/MultiSlider";
// // import "react-toastify/dist/ReactToastify.css";
// import "./DetailPage.css"



// function DetailPage() {
//      // Take Id From The Link
//   const location = useLocation();
//   const { articleID, Category } = location.state;
//   console.log(articleID);
//   console.log(Category);
//   // Define notify function here at the top-level scope
// //   const notify = () => toast(`Item is add on cart `);

// //   // ----------token ---------------verify
// //   const [verified, setVerified] = useState(false);

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     console.log("Token:", token);

// //     axios
// //       .get("https://e-shop-api-kmrr.onrender.com/dashboard", {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       })
// //       .then((response) => {
// //         console.log(response.data);
// //         setVerified(true);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching data:", error);
// //       });
// //   }, []);

//   // --------------------------------------------------------------
// //   const dispatch = useDispatch();
// //   const selelct = useSelector((state) => state.cart.data);
//   const [data] = useContext(Store);
//   console.log(data)
// //   console.log(selelct);

// //   const { id } = useParams();

// //   const handleClick = (item, id) => {
// //     const itemid = id;
// //     const userid = localStorage.getItem("userid");
// //     console.log(itemid, userid);

    
// //     if (verified) {
// //       dispatch(
// //         addtocart({
// //           user_id:userid,
// //           id: item.ID,
// //           name: item.Name,
// //           image: item.Image,
// //           quantity: item.quantity,
// //           price: item.Saleprice,
// //         }),
// //         notify()
// //       );
// //       // Call the notify function here after adding to the cart
// //     } else {
// //       alert("Please log in first to add to cart.");
// //     }
// //   };

//   return (
//     <>
//       <div className="product_Contanier">


//         {
//         data && data.filter((item) => item.id === articleID)
//           .map((item, index) => {


//             <div key={index} className="product_Render">

//               {/* Image Section Container */}
//               <div className="productimage">
//                 <img src={item.image} alt="DetailPage" height={"300px"} />
//               </div>

//               {/* Detail Section Container */}

//               <div className="detail">
//                 <h4>{item.details}</h4>
//                 <h5 className="Brand_Name"> Brand Name: <span>{item.heading}</span></h5>
//                 <p className="Brand_Rate"> Brand Rating: <span>{item.rating}</span></p>
//                 <p className="BrandSale"> Brand Sales Price: <span>{item.PriceDrop}</span></p>
//                 <p className="BrandMRP"> Brand MRP: <span>{item.price}</span></p>
//                 <p className="Delivery"> Delivery: <span>{item.GetitBy}</span></p>

//                 {/* <ul className="Bank_Offer">
//                   <li>{item.Availabeoffer1}</li>
//                   <li>{item.Availabeoffer3}</li>
//                   <li>{item.Availabeoffer3}</li>
//                 </ul> */}

// <p>
//                     <Link to="/login">
//                     <button className="AddToCart">Add To Cart</button>
//                     </Link>
//                   </p>

//                 {/* {verified ? (
//                   <Link onClick={() => handleClick(item, item.id)}>
//                     <button className="AddToCart">Add To Cart</button>
//                   </Link>
//                 ) : (
//                   <p>
//                     <Link to="/login">
//                     <button className="AddToCart">Add To Cart</button>
//                     </Link>
//                   </p>
//                 )} */}
//                 {/* {verified && (
//                   <div>
//                     <h1></h1>
//                   </div>
//                 )} */}
//               </div>
//                 {/* <ToastContainer /> */}
//             </div>
// })}





//         {/* Render three components only */}
//         {/* <Mutlislder id={100} /> */}

        

//       </div>
//     </>
//   );
// }

// export default DetailPage;

import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Store } from '../../ContextAPI/DataStore'
// import Header from "../GenericComponents/Header";
import Footer from "../Footer";
// import { BiShareAlt } from "react-icons/bi";
// import { FaHands } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {

//   faGithub,
//   faFacebook,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
import "./DetailPage.css";
// import DetailDesign from "../DynamicRoute/DetailDesign";


const DetailPage = () => {
  // Take Id From The Link
  const location = useLocation();
  const { articleID, Category } = location.state;
  console.log(articleID);
  console.log(Category);


  const [Detaildata] = useContext(Store);
  console.log(Detaildata);
  return (
    <>
     
      <div className="Main_Desc">

        {/* Like And Share Button  */}

        <div className="ShareIcon">
          <div className="div1">
            {/* <FaHands className="clap" /> */}
            <p>9.3k Claps</p>
          </div>
          <div className="div2">
            {/* <BiShareAlt style={{ fontSize: '2rem' }} /> */}
            <p>Share This Article</p>
          </div>
        </div>

        {/* Main description Post  */}
        {
          Detaildata && Detaildata.filter((data) => data.id === articleID).map((item, index) => {
            return (
              <div key={index} className="main-head">
                <div className="head">
                  <h1>{item.heading}</h1>
                </div>

                <div className="Main_Image">
                  <img src={item.image} alt="not Found" />
                </div>
                <div className="description">
                  <p>{item.details}</p>
                </div>
                {/* Auther Section  */}
                <div className="user">
                  <div className="username">
                 
                    <div className="name">
                      <h3>Akanksha Sharma</h3>
                      <p>Aug 8 2023 | 10 min read</p>
                    </div>
                  </div>
                  {/* <div className="userSocial">

                    <Link to={"https://www.facebook.com"} target="_blank"><div className="social_child1">  <FontAwesomeIcon icon={faFacebook} /></div></Link>
                    <Link to={"https://www.instagram.com/akanksharma111/"} target="_blank" ><div className="social_child1">  <FontAwesomeIcon icon={faInstagram} /></div></Link>
                    <Link to={"https://github.com/Akanksha0808-git"} target="_blank"><div className="social_child1">  <FontAwesomeIcon icon={faGithub} /></div></Link>
                    <Link to={"https://www.linkedin.com/in/akanksha-sharma-0808ak"} target="_blank"><div className="social_child1">   <FontAwesomeIcon icon={faLinkedin} /></div></Link>
                  </div> */}
                </div>

                <hr className="border" />

              </div>
            );
          })}
        {/* <hr/> */}
        {/* <div className="TheLatest">
          <h2>
            More From Siren
            <hr
              style={{
                width: "190px",
                height: "3px",
                background: "red",
                border: "none",
                outline: "none",
                borderRadius: "5px",
                position: "absolute"
              }}
            />
          </h2>
          <div className="Latest_contanier">
            {
              Detaildata && Detaildata.filter((data) => data.id % 2 === 0 ).map(
                (item, index) => {
               
                  if (item.category === Category) {
                    console.log(item.id)
                    return (
                      <DetailDesign
                        key={index}
                        Heading={item.heading}
                        id={item.id}
                        image={item.image}
                        Category={item.category}
                        description={item.details}
                      />
                    );
                  }
                  return null;  
                })
              }
              
          </div>
          
        </div> */}

        
      </div>
      
      <Footer />
      
    </>
  );
};

export default DetailPage;

