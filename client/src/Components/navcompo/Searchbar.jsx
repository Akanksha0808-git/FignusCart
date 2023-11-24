// Searchbar.jsx

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link ,useNavigate} from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import axios from "axios";
import "./Searchbar.css"


const Searchbar = () => {
  const navi =useNavigate();
    // const select = useSelector((state) => state.cart.data);
  // console.log( select)
  // const userid = localStorage.getItem("userid");
  // const filteredItems = select.filter((item) => item.user_id === userid);
  // console.log(filteredItems)
  const token = localStorage.getItem("token");

  const [name, setname] = useState("");
  const [data1, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (name === "") {
          setdata([]);
          return;
        }

        const response = await axios.post("http://localhost:4000/search", {
          search: name,
        });
         console.log(response.data.data) 
       await  setdata(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [name]);

  const handleChange = (e) => {
    setname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLinkClick = () => {
    // Reset the name state to an empty string when a link is clicked
    setname("");
      // Reset the data1 state to an empty array when a link is clicked
  setdata([]);
    window.scroll(0, 0)
  };
    const handletoken = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("email");
    
    navi("/")
    // window.alert("Logout")
    toast.success("Logout successful!", {
      position: "top-center",
      autoClose: 2000, // Close the toast after 2 seconds
    })
  };



  return (
    <div className='parentbox'>       
      <div className='searchbox'>

      <form>
        <input
          type="text"
          placeholder="Search products, brands, etc."
          value={name}
          className='search form-control'
          aria-label="Search"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      <div className="list" style={{color:"black", backgroundColor:"yellow"}}>
        {data1.length >0 ? (
          <ul>
            {data1.slice(0, 5).map((item, index) => (
              <Link
                        to={"/detailpage/" + item.id }
                        onClick={handleLinkClick}
                        key={index}
                      >
              <li key={index}>{item.heading}</li>
              </Link>
              // <li key={index}>{item.heading}</li>

            ))}
          </ul>
        ) : (
         null
        )}
      </div>
      //         <div className="Sign_In">
//         {token ? (
  // Display components for authenticated users
  <>
    <Link onClick={handletoken } className='btn'>Logout</Link>
  </>
) : (
  // Display components for non-authenticated users
  <Link to={"/login"} className='btn'>SignIn</Link>
)}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

