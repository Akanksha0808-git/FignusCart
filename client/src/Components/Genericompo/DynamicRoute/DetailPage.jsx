import React, { useContext } from "react";
import { Store } from '../../ContextAPI/DataStore'
import { Link ,useNavigate} from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./DetailPage.css";
import DetailDesign from "./DetailDesign";
import Footer from "../Footer";
import { addtocart } from "../../Redux/Slice";
import "./DetailPage.css"
import { useState, useEffect } from "react";
import axios from "axios";

const DetailPage = () => {
  const notify = () => toast("Item is added to the cart");
  const notify2=()=> toast("Please log in first to add to cart.")
  const [verified, setVerified] = useState(false);

 
  const verifyToken = () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
  
    const url = "http://localhost:4000/dashboard";
  
    if (token) {
      axios
        .get(url, {
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
          setVerified(false);
        });
    } else {
      setVerified(false);
    }
  };
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    verifyToken();
  }, []); // Empty dependency array to ensure it runs only once on mount

  const dispatch = useDispatch();
  const selelct = useSelector((state) => state.cart.data);
  const [Detaildata] = useContext(Store);

  const { id } = useParams();


  const navigate = useNavigate();

  const handleClick = (item) => {
    const userid = localStorage.getItem("userid");
    console.log(item.id, userid);

    if (verified) {
      dispatch(
        addtocart({
          user_id: userid,
          id: item.id,
          name: item.heading,
          image: item.image,
          price: item.PriceDrop,
        })
      );
    notify("Item added to the cart");
    } else {
      console.log("User not verified. Please log in first.");

      navigate("/login"); // Navigate to the login page
    }
  };
  return (
    <div style={{ position: "relative", top: "50px" }}>
      <div className="Main_Desc">
        {/* Main description Post */}
        {Detaildata
          .filter((data) => data.id === parseInt(id))
          .map((item, index) => (
            <div key={index} className="main-head">

              <div className="head">
                <h1 style={{color:"black",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"500"}}>{item.heading}</h1>
             </div>

               <div className="Main_Image">
                 {/* <h1>{item.heading}</h1> */}

                 <img src={item.image} alt="not Found" style={{height:"330px"}}/>
               </div>
             
               <div className="description">
                 <p>{item.details}</p>
                 <p>Rating: {item.rating}</p>
                 <p>Price: {item.price}</p>
                 <p>GetitBy: {item.GetitBy}</p>
               </div>
              {verified ? (
  <button className="AddToCart" onClick={() => handleClick(item)}>
    Add To Cart
  </button>
) : (
  <button
  className="AddToCart"
  onClick={() => {
    notify2();
    setTimeout(() => {
      navigate("/login");
    }, 5000); // Adjust the delay (in milliseconds) as needed
  }}
>
  Add To Cart
</button>
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
                if (item.category === "Laptop") {
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
              })}
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

// const DetailPage = () => {
//   const notify = () => toast("Item is added to the cart");

//   const [verified, setVerified] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const url = "http://localhost:4000/dashboard";

//     axios
//       .get(url, {
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
//         // If not verified, navigate to the login page
//         navigate("/login");
//       });
//   }, []);

//   const dispatch = useDispatch();
//   const selelct = useSelector((state) => state.cart.data);
//   const [Detaildata] = useContext(Store);

//   const { id } = useParams();
//   const navigate = useNavigate();  // Use useNavigate instead of useHistory

//   const handleClick = (item, id) => {
//     const itemid = id;
//     const userid = localStorage.getItem("userid");
//     console.log(itemid, userid);

//     if (verified) {
//       dispatch(
//         addtocart({
//           user_id: userid,
//           id: item.id,
//           name: item.heading,
//           image: item.image,
//           price: item.PriceDrop,
//         }),
//       );
//       notify();
//     } else {
//       // Redirect to login page if not verified
//       notify("Please log in first to add to cart.");
//       navigate("/login");
//     }
//   };

//   return (
//     <div style={{ position: "relative", top: "50px" }}>
//       {/* Rest of your component */}


//       <div className="Main_Desc">
// //         {/* Main description Post */}
// //         {Detaildata
//           .filter((data) => data.id === parseInt(id))
//           .map((item, index) => (
//             <div key={index} className="main-head">
//               {/* ... (existing code) */}
//               {verified ? (
//   <button className="AddToCart" onClick={() => handleClick(item)}>
//     Add To Cart
//   </button>
// ) : (
//   <button className="AddToCart" onClick={() => notify("Please log in first to add to cart.")}>
//     Add To Cart
//   </button>
// )}
//               {/* ... (existing code) */}
//             </div>
//           ))}
//         {/* ... (existing code) */}
//       </div>
//       <Footer />
//       <ToastContainer />
      
//     </div>
//   );
// };



export default DetailPage;

