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
import { useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
import "./DetailPage.css";
import DetailDesign from "./DetailDesign";
import { Store } from '../../ContextAPI/DataStore'
import Footer from "../Footer";
// import { addtocart } from "../../Redux/Slice";

const DetailPage = () => {
  const notify = () => toast("Item is added to the cart");
  const location = useLocation();
  const { articleID, Category } = location.state;

  // const dispatch = useDispatch();

  const [Detaildata] = useContext(Store);

  const handleClickAddToCart = (item, id) => {
    const itemid = id;
    const userid = localStorage.getItem("userid");

    if (verified) {
      dispatch(
        addtocart({
          user_id: userid,
          id: item.ID,
          name: item.Name,
          image: item.Image,
          quantity: item.quantity,
          price: item.Saleprice,
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
              <Link to="">
                <button className="button" onClick={() => window.scroll(0, 0)}>
                  Add to Cart
                </button>
              </Link>
              <hr className="border" />
            </div>
          ))}

        <hr />
        <div className="TheLatest">
          <h2 style={{ backgroundColor: "#E80071", width: "100%", alignContent: "center", display: "flex", justifyContent: "center", color: "white" }}>
            You Might Like this!!!
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
      {/* <ToastContainer /> */}
    </div>
  );
};

export default DetailPage;
