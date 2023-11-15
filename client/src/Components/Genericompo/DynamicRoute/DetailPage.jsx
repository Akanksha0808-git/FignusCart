import React, { useContext } from "react";
import { Store } from '../../ContextAPI/DataStore'
import { Link } from "react-router-dom";
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

// token verificartion.....
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

  const { id } = useParams();

  const handleClick = (item, id) => {
    const itemid = id;
    const userid = localStorage.getItem("userid");
    console.log(itemid, userid);


    if (verified) {
      dispatch(
        addtocart({
          user_id: userid,
          id: item.id,
          name: item.heading,
          image: item.image,
          price: item.PriceDrop,
        }),
        notify()
      );
      // Call the notify function here after adding to the cart
    } else {
      alert("Please log in first to add to cart.");
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
                if (item.category === "Laptop") {
                  return (
                    <DetailDesign
                      key={index}
                      Heading={item.heading}
                      id={item.id}
                      image={item.image}
                      Category={item.category}
                      description={item.details}
                    // handleClick={handleClickAddToCart} // Pass the handler
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

