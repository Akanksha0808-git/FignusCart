import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';

import "./Searchbar.css"

const Searchbar = () => {
  const [name, setname] = useState("");
  const select = useSelector((state) => state.cart.data);
  const userid = localStorage.getItem("userid");
  const filteredItems = select.filter((item) => item.user_id === userid);
  const [data1, setdata] = useState([]);
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const handleChange = (e) => {
    setname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLinkClick = () => {
    // Reset the name state to an empty string when a link is clicked
    setname("");
    window.scroll(0, 0)
  };

  const handletoken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("email");
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
        setdata(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);



  return (
    <div className='parentbox'>
      <div className='searchbox'>
        <input type="text" placeholder="Search products, brands etc" className='search form-control' aria-label="Search" value={name} onChange={handleChange} />
        <div className='serachicon '> <FontAwesomeIcon icon={faSearch} /></div>

        <div className="list">
          {data1.length > 0 ? (
            <ul>
              {data1.map((item, index) => (
                <Link
                  to={"/product/" + item.id + "/" + item.category}
                  onClick={handleLinkClick} // Call the function to reset name state
                >
                  <li key={index}>{item.Name}</li>
                </Link>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="Sign_In">
          {
            token ? (<Link onClick={handletoken} className='btn'>Logout</Link>) : (<Link to={"/login"} className='btn'>SignIn</Link>)
          }
        </div>
      </div>

    </div>

  )
}

export default Searchbar
