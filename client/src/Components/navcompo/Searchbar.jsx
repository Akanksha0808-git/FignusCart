import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link ,useNavigate} from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import axios from 'axios';

import "./Searchbar.css"

const Searchbar = () => {
  const navi =useNavigate();
  const [name, setname] = useState("");
  const select = useSelector((state) => state.cart.data);
  const userid = localStorage.getItem("userid");
  // const filteredItems = select.filter((item) => item.user_id === userid);
  const [data1, setdata] = useState([]);
  const token = localStorage.getItem("token");
  // const email = localStorage.getItem("email");
  const handleChange = (e) => {
    setname(e.target.value);
  };


  const handleLinkClick = () => {
    // Reset the name state to an empty string when a link is clicked
    setname("");
    window.scroll(0, 0)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handletoken = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("email");

    navi("/")
  };
  useEffect(() => {
    if (name === "") {
      setdata([]);
      return;
    }

    const data = {
      search: name,
    };
// const url="https://fignuscart-ly1x.onrender.com/search"
const url="http://localhost:4000/search"


    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data.data);

        setdata(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [name]);



  return (
    <div className='parentbox'>
      <div className='searchbox'>
        <input type="text" placeholder="Search products, brands etc" className='search form-control' aria-label="Search" value={name} onChange={handleChange} />
        <div className='serachicon ' onClick={handleSubmit}> <FontAwesomeIcon icon={faSearch} /></div>

        <div className="list">
          {data1.length > 0 ? (
            <ul>
              {data1.map((item, index) => (
                // <Link
                //   to={"/detailpage/:id"}
                //   onClick={handleLinkClick} // Call the function to reset name state
                // >
                <Link
                  to={`/product/${item.id}`} 
                  onClick={handleLinkClick}
                  key={index}
                >
                  <li key={index}>{item.name}</li>
                </Link>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="Sign_In">
        {token ? (
  // Display components for authenticated users
  <>
    <Link onClick={handletoken} className='btn'>Logout</Link>
    {/* Add other components for authenticated users */}
  </>
) : (
  // Display components for non-authenticated users
  <Link to={"/login"} className='btn'>SignIn</Link>
)}
        </div>
      </div>

    </div>

  )
}

export default Searchbar
