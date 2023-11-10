import React, { useState } from 'react';
import axios from "axios";
import "./Compo.css";
import { Link, useNavigate  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons you need

function Register() {
    const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [Server, setServer] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    // axios.post("url", inputs) to send the data to the backend server
    axios.post(`https://handson-4-node.onrender.com/api/register`, formData)
      .then((res) => {
        console.log(res.data);
        alert(res.data.msg)
        setServer(res.data);

        localStorage.setItem("token",res.formData.token)
       
      })
      .catch((err) => {
        console.log(err);
        
      });
    
  }

  return (
    <div className="auth-container">
      <div className="intro-text">
        <h1>Look Like You're New Here! </h1>
        <h4>Register Yourself with your Details to get started</h4>
      </div>
      <form className="formContainer" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
        <label htmlFor="contact">Phone No.</label>
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
        <label htmlFor="password">Password</label>
        <div className="password-input">
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
        </div>

        <button className="btn-submit" type="submit">
          Register
        </button>
        <h4>Already Have an account?</h4>
        <Link to="/Login"> Login Here</Link>
        {Server === undefined ? "" : <div>{Server.msg}</div>}
      </form>
    </div>
  );
}

export default Register;
