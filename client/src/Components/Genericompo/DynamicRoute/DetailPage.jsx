// import React, { useContext } from "react";
// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
// import "./DetailPage.css";
// import { Store } from '../../ContextAPI/DataStore'
// import Footer from "../Footer";
// import { addtocart } from "../../Redux/Slice";
// import DetailDesign from "./DetailDesign";


// const DetailPage = () => {
//   // Take Id From The Link
//   const notify = () => toast(`Item is add on cart `);
//   const location = useLocation();
//   const { articleID, Category } = location.state;
//   console.log(articleID);
//   console.log(Category);


  







//   const [Detaildata] = useContext(Store);
//   console.log(Detaildata);







//   return (


//     <div  style={{position:"relative",top:"50px"}}>
     
//       <div className="Main_Desc">

//         {/* Main description Post  */}
//         {
//           Detaildata && Detaildata.filter((data) => data.id === articleID).map((item, index) => {
//             return (
//               <div key={index} className="main-head">
//                 <div className="head">
//                   <h1>{item.heading}</h1>
//                 </div>

//                 <div className="Main_Image">
//                   <img src={item.image} alt="not Found" />
//                 </div>
//                 <div className="description">
//                   <p>{item.details}</p>
//                   <p>Rating:{item.rating}</p>

//                   <p>Price:{item.price}</p>

//                   <p>GetitBy:{item.GetitBy}</p>

//                 </div>
//                 <Link to="">
//         <button className="button" onClick={()=>window.scroll(0,0)}>Add to Cart</button>
//         </Link>

//                 <hr className="border" />

//               </div>
//             );
//           })}
//         <hr/>
//         <div className="TheLatest">
//           <h2 style={{backgroundColor:"#E80071", width:"100%",alignContent:"center",display:"flex", justifyContent:"center",color:"white"}}>
//            You Might Like this!!!
            
//           </h2>
//           <div className="Latest_contanier">
//             {
//               Detaildata && Detaildata.filter((data) => data.id % 5 === 0 ).map(
//                 (item, index) => {
               
//                   if (item.category === Category) {
//                     console.log(item.id)
//                     return (
//                       <DetailDesign
//                         key={index}
//                         Heading={item.heading}
//                         id={item.id}
//                         image={item.image}
//                         Category={item.category}
//                         description={item.details}
//                       />
//                     );
//                   }
//                   return null;  
//                 })
//               }
              
//           </div>
          
//         </div>

        
//       </div>
      
//       <Footer />
      
//     </div>
//   );
// };

// export default DetailPage;




import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams,useLocation } from "react-router-dom";
import {useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./DetailPage.css";
import DetailDesign from "./DetailDesign";
import { Store } from '../../ContextAPI/DataStore'
import Footer from "../Footer";
import { addtocart } from "../../Redux/Slice";
import "./DetailPage.css"
import { useState ,useEffect} from "react";
import axios from "axios";
const DetailPage = () => {

  const notify = () => toast("Item is added to the cart");

  const location = useLocation();
  const { articleID, Category } = location.state;
  const [verified, setVerified] = useState(false);
 

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    axios
      .get("https://fignuscart-ly1x.onrender.com/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setVerified(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const dispatch = useDispatch();
  const selelct = useSelector((state) => state.cart.data);
  const [Detaildata] = useContext(Store);
  console.log(selelct);


  const handleClickAddToCart = (item, id) => {
    const itemid = id;
    const userid = localStorage.getItem("userid");

    if (verified) {
      dispatch(
        addtocart({
          user_id:userid,
          id: item.id,
          name: item.heading,
          image: item.image,
          price: item.price,
        })
      );
      notify();
    } else {
      alert("Please log in first to add to the cart.");
    }
  };

  return (
    <div style={{ position: "relative", top: "50px" }}>
      <div className="Main_Desc">
        {/* Main description Post */}
        {Detaildata
          .filter((data) => data.id === articleID)
          .map((item, index) => (
            <div key={index} className="main-head">
              <div className="head">
                <h1>{item.heading}</h1>
              </div>

              <div className="Main_Image">
                <img src={item.image} alt="not Found" />
              </div>
              <div className="description">
                <p>{item.details}</p>
                <p>Rating: {item.rating}</p>
                <p>Price: {item.price}</p>
                <p>GetitBy: {item.GetitBy}</p>
              </div>
              {verified ? (
                  <Link onClick={() => handleClick(item, item.id)}>
                    <button className="AddToCart">Add To Cart</button>
                  </Link>
                ) : (
                  <p>
                    <Link to="/login">
                    <button className="AddToCart">Add To Cart</button>
                    </Link>
                  </p>
                )}
                {verified && (
                  <div>
                    <h1></h1>
                  </div>
                )}
              <hr className="border" />
            </div>
          ))}

        <hr />
        <div className="TheLatest">
          <h2 style={{ backgroundColor: "#E80071", width: "100%", alignContent: "center", display: "flex", justifyContent: "center", color: "white" }}>
            You Might Also Like this!!!
          </h2>
          <div className="Latest_contanier">
            {Detaildata
              .filter((data) => data.id % 5 === 0)
              .map((item, index) => {
                if (item.category === Category) {
                  return (
                    <DetailDesign
                      key={index}
                      Heading={item.heading}
                      id={item.id}
                      image={item.image}
                      Category={item.category}
                      description={item.details}
                      handleClick={handleClickAddToCart} // Pass the handler
                    />
                  );
                }
                return null;
              })}
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default DetailPage;





// /* eslint-disable jsx-a11y/heading-has-content */
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import {Store } from "../../ContextAPI/DataStore";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addtocart } from "../../Redux/Slice";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./DetailPage.css"



// function DetailPage() {
//   // Define notify function here at the top-level scope
//   const notify = () => toast(`Item is add on cart `);

//   // ----------token ---------------verify
//   const [verified, setVerified] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     console.log("Token:", token);

//     axios
//       .get("http://localhost:7000/dashboard", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         console.log(response.data);
//         setVerified(true);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   // --------------------------------------------------------------
//   const dispatch = useDispatch();
//   const selelct = useSelector((state) => state.cart.data);
//   const data = useContext(Store);
//   console.log(selelct);

//   const { id } = useParams();

//   const handleClick = (item, id) => {
//     const itemid = id;
//     const userid = localStorage.getItem("userid");
//     console.log(itemid, userid);

    
//     if (verified) {
//       dispatch(
//         addtocart({
//           user_id:userid,
//           id: item.id,
//           name: item.heading,
//           image: item.image,
//           price: item.price,
//         }),
//         notify()
//       );
//       // Call the notify function here after adding to the cart
//     } else {
//       alert("Please log in first to add to cart.");
//     }
//   };

//   return (
//     <>
//       <div className="product_Contanier">


//         {data
//           .filter((item) => item.id === parseInt(id))
//           .map((item, index) => (


//             <div key={index} className="product_Render">

//               {/* Image Section Container */}
//               <div className="productimage">
//                 <img src={item.image} alt="Product" height={"300px"} />
//               </div>

//               {/* Detail Section Container */}

//               <div className="detail">
//                 <h4>{item.deatils}</h4>
//                 <h5 className="Brand_Name"> Brand Name: <span>{item.heading}</span></h5>
//                 <p className="Brand_Rate"> Brand Rating: <span>{item.rating}</span></p>
//                 <p className="BrandSale"> Brand Sales Price: <span>{item.PriceDrop}</span></p>
//                 <p className="BrandMRP"> Brand MRP: <span>{item.price}</span></p>
               
//                 <p className="Delivery"> Delivery: <span>{item.GetitBy}</span></p>

                

//                 {verified ? (
//                   <Link onClick={() => handleClick(item, item.id)}>
//                     <button className="AddToCart">Add To Cart</button>
//                   </Link>
//                 ) : (
//                   <p>
//                     <Link to="/login">
//                     <button className="AddToCart">Add To Cart</button>
//                     </Link>
//                   </p>
//                 )}
//                 {verified && (
//                   <div>
//                     <h1></h1>
//                   </div>
//                 )}
//               </div>
//                 <ToastContainer />
//             </div>
//           ))}






        

//       </div>
//     </>
//   );
// }

// export default DetailPage;
