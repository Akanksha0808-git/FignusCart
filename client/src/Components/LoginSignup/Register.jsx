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
  const [data, setdata] = useState();
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
const url="https://fignuscart-ly1x.onrender.com/register"
// const url="http://localhost:4000/register"

    console.log(formData);
    axios.post(url, formData)
      .then((res) => {
        if (res.data.user) {
          setFormData({
            name: "",
            phone: "",
            email: "",
            password: "",
          });
          nav("/login");
        } else {
          setdata(res.data.msg);
        }
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
        
};
  //   axios.post(url, formData)
  // .then((res) => {
  //   console.log(res.data);
  //   alert(res.data.msg)
  //   setServer(res.data);

  //   // Check if 'token' property exists before accessing it
  //   if (res.data.token) {
  //     localStorage.setItem("token", res.data.token);
  //   }
  // })
  // .catch((err) => {
  //   console.log(err);
  // });

    
  
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   //  const url="https://fignuscart-ly1x.onrender.com/register"
//   const url = "http://localhost:4000/register";

//   try {
//     const response = await axios.post(url, formData);

//     console.log(response.data);
//     alert(response.data.msg);
//     setServer(response.data);

//     // Check if 'token' property exists before accessing it
//     if (response.data.token) {
//       localStorage.setItem("token", response.data.token);
//     }
//   } catch (error) {
//     console.error("Axios Error:", error);

//     // Add more meaningful error handling here
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       console.error("Server responded with error status:", error.response.status);
//       console.error("Server response data:", error.response.data);
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.error("No response received from the server");
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.error("Error setting up the request:", error.message);
//     }
//   }
// };


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
        {data === undefined ? "" : <div>{data.msg}</div>}
      </form>
    </div>
  );
}

export default Register;
