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
  const notify = () => toast("Item is added to the cart");
  const notify2 = () => toast("Please log in first to add to cart.")

  const navigate = useNavigate();

  const [verified, setVerified] = useState(false);
  const dispatch = useDispatch();
   
  const { heading,id,category,rating,priceDrop,price, image } = props;

  const verifyToken = () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    // const url = "http://localhost:4000/dashboard";
    const url =" https://fignuscart-ly1x.onrender.com/dashboard";

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
    </div>
  </div>
  </div>
  </Link>
  );
};

export default Boxes;


