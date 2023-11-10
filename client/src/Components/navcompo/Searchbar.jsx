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
  const email =localStorage.getItem("email");
  const handleChange = (e) => {
    setname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLinkClick = () => {
    // Reset the name state to an empty string when a link is clicked
    setname("");
    window.scroll(0,0)
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

    axios
      .post("https://localhost:7000/search", data)
      .then((response) => {
        setdata(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[name]);



  return (
    <div className='parentbox'>
          <div className='searchbox'>
          <input type="text" placeholder="Search products, brands etc" className='search'></input>
          <div className='serachicon'> <FontAwesomeIcon icon={faSearch}  /></div>
          </div>
          
      <button className='btn' >Sign In</button>
      <div className="cart_and_Sign_In">
            <div className="Sign_In">
              {
                token ? (<Link onClick={handletoken}>Logout</Link>) : (<Link to={"/login"}>SignIn</Link>)
              }
              </div>
            
            <div className="avtar">
              {
                email ?( <Avatar className="avtar " style={{background:"skyblue"}}>{email.split("")[0].toUpperCase()}</Avatar>) : (<Avatar className="avtar "/>)
              }
            </div>
      </div>
      
      <div className='cart'>
      <Link to={"/order"}> 
      {
                  filteredItems.length ? (<Badge badgeContent={filteredItems.length} color="primary">
                                            <ShoppingCartIcon id="icon" />
                                          </Badge>)
                                          :
                                          (<Badge badgeContent={0} color="primary">
                                            <ShoppingCartIcon id="icon" />
                                          </Badge>)
                }
        </Link>
      </div>
    </div>
    
  )
}

export default Searchbar
