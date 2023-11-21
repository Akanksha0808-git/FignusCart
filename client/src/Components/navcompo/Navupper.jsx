  import React, { useState } from 'react'
import "./Navupper.css"
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import "../assets/logo.jpg"
const Navupper = () => {
  // const [name, setname] = useState("");
  const select = useSelector((state) => state.cart.data);
  const userid = localStorage.getItem("userid");
  const filteredItems = select.filter((item) => item.user_id === userid);
  const [data1, setdata] = useState([]);
  // const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  return (

    <div className='Navupper'>

      <div className="left-message">
        <a href="" target="_blank">Diwali Dhamaka Sale - Festive Deals You Can't Miss!  </a>
      </div>




      <div className="navbar navbar-light">

        <div className="cart_and_Sign_In">


          <div className="avtar">
            {
              email ? (<Avatar className="avtar " style={{ background: "skyblue" }}>{email.split("")[0].toUpperCase()}</Avatar>) : (<Avatar className="avtar " />)
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


    </div>

  )
}

export default Navupper



// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../ContextAPI/AuthContext';
// import { useSelector } from 'react-redux';
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Avatar from '@mui/material/Avatar';
// import { Link } from 'react-router-dom';

// const Navupper = () => {
//   const { state, dispatch } = useAuth();
//   const { isAuthenticated, userEmail } = state;
//   const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));
//   const [email, setEmail] = useState(localStorage.getItem('email') || '');

//   // useEffect(() => {
//   //   // Check authentication status whenever token or email changes
//   //   const token = localStorage.getItem('token');
//   //   const userEmail = localStorage.getItem('email');

//   //   setAuthenticated(!!token);
//   //   setEmail(userEmail || '');
//   // }, [localStorage.getItem('token'), localStorage.getItem('email')]);

//   useEffect(() => {
//     // Check authentication status whenever the component mounts
//     const token = localStorage.getItem('token');
//     const userEmail = localStorage.getItem('email');

//     if (token) {
//       dispatch({ type: 'LOGIN', payload: { email: userEmail } });
//     } else {
//       dispatch({ type: 'LOGOUT' });
//     }
//   }, [dispatch]);



//   const select = useSelector((state) => state.cart.data);
//   const userid = localStorage.getItem('userid');
//   const filteredItems = select.filter((item) => item.user_id === userid);

//   return (
//     <div className="Navupper">
//       {/* ... existing code ... */}
//       <div className="cart_and_Sign_In">
//         <div className="avtar">
//           {authenticated ? (
//             <Avatar className="avtar" style={{ background: 'skyblue' }}>
//               {email.split('')[0].toUpperCase()}
//             </Avatar>
//           ) : (
//             <Avatar className="avtar" />
//           )}
//         </div>
//       </div>

//       <div className="cart">
//         <Link to="/order">
//           {filteredItems.length ? (
//             <Badge badgeContent={filteredItems.length} color="primary">
//               <ShoppingCartIcon id="icon" />
//             </Badge>
//           ) : (
//             <Badge badgeContent={0} color="primary">
//               <ShoppingCartIcon id="icon" />
//             </Badge>
//           )}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navupper;
