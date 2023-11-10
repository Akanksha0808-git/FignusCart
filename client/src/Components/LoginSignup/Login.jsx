// Login.js
import React, { useEffect,useState } from 'react';
import axios from "axios"
import "./Compo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons you nee
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const Navi = useNavigate();
  const [formData, setFormData] = useState({
    email:"",
    password: "",
  });
  const [Server, setServer] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    //axios.post("url",inputs) to send the data to the backend server
    axios.post(`https://handson-4-node.onrender.com/api/login`, formData)
      .then((res) => {
        console.log(res.data);
        setServer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    if (Server) {
      localStorage.setItem("token", Server.token);
      if (Server.msg === "User is LoggedIn successfully") {
        alert(Server.msg)
        Navi("/dashboard");
      }
    }
  }, [Server,Navi]);

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
        {Server === undefined ? "" : <div>{Server.msg}</div>}
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
