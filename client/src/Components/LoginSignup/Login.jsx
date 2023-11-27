// Login.js
import React, { useEffect,useState } from 'react';
import axios from "axios"
import "./Compo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons you nee
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const Navi = useNavigate();
  const [formData, setFormData] = useState({
    email:"",
    password: "",
  });
  const [data, setdata] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const url = "http://localhost:4000/login";
    const url ="https://fignuscart-ly1x.onrender.com/login";
   
    axios.post(url, formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.user) {
          const email = response.data.user[0];
          const token = response.data.token;
          const usersid = response.data.userid;
  
          // Set tokens in localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("userid", usersid);
          localStorage.setItem("email", email);
          window.alert("login Successfully")
          Navi("/"); 

        
          
          
        } else {
          setdata(response.data.msg);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error.message);
        toast.error(`Error: ${error.message}`, {
          position: "top-center",
        });
      });
  };
  
  

  return (
    <div className="auth-container">
      
      
      <form className="formContainer" onSubmit={handleSubmit}>
      <div><label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} /></div>
        <div>
        <label htmlFor="password">Password</label>
        <span className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <i
            className={`password-toggle-icon ${showPassword ? "visible" : "hidden"}`}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </i>
        </span>
        </div>

        <button className="btn-submit" type="submit" >Login</button>
        {data === undefined ? "" : <div>{data.msg}</div>}
      </form>
      <div className="intro-text">
      <h2 className='logintxt'>Login</h2>
      <h1 className='text'>Hey, Welcome to our Website!!!</h1>
        <h1 className='text'>You haven't registered yet</h1>
        <Link className="registerlink" to="/register" onClick={()=>window.scroll(0,0)}> Register</Link>
        </div>
    </div>
  );
}

export default Login;
