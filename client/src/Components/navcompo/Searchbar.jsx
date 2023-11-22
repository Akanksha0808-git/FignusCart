// import React, { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link ,useNavigate} from 'react-router-dom';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { useSelector } from "react-redux";
// import axios from 'axios';
// // import _debounce from 'lodash/debounce';
// import "./Searchbar.css"

// const Searchbar = () => {
//   const navi =useNavigate();
//   const [name, setname] = useState("");
//   const select = useSelector((state) => state.cart.data);
//   // console.log( select)
//   const userid = localStorage.getItem("userid");
//   const filteredItems = select.filter((item) => item.user_id === userid);
//   // console.log(filteredItems)
//   const [data1, setdata] = useState([]);
//   console.log(data1)
//   const token = localStorage.getItem("token");
//   // const email = localStorage.getItem("email");
  
  
//   const handleLinkClick = () => {
//     // Reset the name state to an empty string when a link is clicked
//     setname("");
//     window.scroll(0, 0)
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
  
 
  
  
  
//   const handletoken = () => {
    
//     localStorage.removeItem("token");
//     localStorage.removeItem("userid");
//     localStorage.removeItem("email");
    
//     navi("/")
//   };
//   const handleChange = (e) => {
//     setname(e.target.value);
//   };
  
// //   useEffect(() => {
// //     if (name === "") {
// //       setdata([]);
// //       return;
// //     }

// //     const data = {
// //       search: name,
// //     };
// // // const url="https://fignuscart-ly1x.onrender.com/search"
// // const url="http://localhost:4000/search"


// //     axios
// //       .post(url, data)
// //       .then((response) => {
// //         console.log(response.data.data);

// //         setdata(response.data.data);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching data:", error);
// //       });
// //   }, [name]);
// useEffect(() => {
//   console.log("Name:", name);
//   const fetchData = async () => {
//     try {
//       if (name === "") {
//         setdata([]);
//         return;
//       }

//       const response = await axios.post("http://localhost:4000/search", {
//         search: name,
//       });

//       console.log("Response data:", response.data.data);
//       setdata(response.data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, [name]);


//   return (
//     <div className='parentbox'>
//       <div className='searchbox'>
//         <input type="text" placeholder="Search products, brands etc" className='search form-control' aria-label="Search" value={name} onChange={handleChange} />
//         <div className='serachicon ' onClick={handleSubmit}> <FontAwesomeIcon icon={faSearch} /></div>
// {/* 
//         <div className="list">
//           {data1.length > 0 ? (
//             <ul>
//               {data1.map((item, index) => (
//                 <Link
//                   to={"/detailpage/" + item.id + item.category}
//                   onClick={handleLinkClick} // Call the function to reset name state
//                 >
               
//                   <li key={index}>{item.name}</li>
//                 </Link>
//               ))}
//             </ul>
//           ) : null}
//         </div> */}
//         {/* Render the results */}
// <div className="list" style={{color:"black"}}>
//   {data1.length > 0 ? (
//     <ul>
//       {data1.map((item, index) => (
//         <Link
//           to={"/detailpage/" + item.id + item.category}
//           onClick={handleLinkClick}
//           key={index}
//         >
//           <li>{item.name}</li>
//         </Link>
//       ))}
//     </ul>
//   ) : (
//     <p>No results found</p>
//   )}

// </div>

//         <div className="Sign_In">
//         {token ? (
//   // Display components for authenticated users
//   <>
//     <Link onClick={handletoken} className='btn'>Logout</Link>
//   </>
// ) : (
//   // Display components for non-authenticated users
//   <Link to={"/login"} className='btn'>SignIn</Link>
// )}
//         </div>
//       </div>

//     </div>

//   )
// }

// export default Searchbar


// chat gpt code 


// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Avatar from '@mui/material/Avatar';
// // import "./search.css"
// import "./Searchbar.css"

// import { useSelector } from "react-redux";
// import axios from "axios";


// const Searchbar = () => {
//   console.log("Component rendered");

//   const [name, setname] = useState("");
//   const select = useSelector((state) => state.cart.data);
//   const userid = localStorage.getItem("userid");
//   const filteredItems = select.filter((item) => item.user_id === userid);
//   const [data1, setdata] = useState([]);
//   const token = localStorage.getItem("token");
//   const email =localStorage.getItem("email");
 
//   // .split(" ")[0].toUpperCase();
// console.log(email)


//   // useEffect(() => {
//   //   console.log("Name before API call:", name);
//   //   if (name === "") {
//   //     setdata([]);
//   //     return;
//   //   }

//   //   const data = {
//   //     search: name,
//   //   };

//   //   axios
//   //     .post("http://localhost:4000/search", data)
//   //     .then((response) => {
//   //       console.log(response); // log the entire response
//   //       console.log(response.data.data); // log the specific data property
//   //       setdata(response.data.data);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // },[name]);
//   useEffect(() => {
//     console.log("Name before API call:", name);
  
//     const fetchData = async () => {
//       try {
//         if (name === "") {
//           setdata([]);
//           return;
//         }
  
//         const response = await axios.post("http://localhost:4000/search", {
//           search: name,
//         });
  
//         console.log("Full Response:", response);
//         console.log("Response Data:", response.data);
//         setdata(response.data.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
  
//     fetchData();
//   }, [name]);
  
//   const handleChange = (e) => {
//     setname(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const handleLinkClick = () => {
//     // Reset the name state to an empty string when a link is clicked
//     setname("");
//     window.scroll(0,0)
//   };

//   const handletoken = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userid");
//     localStorage.removeItem("email");
//   };

//   return (
//     <div className="searchbar">
//       <nav className="navbar navbar-light">

//         <div className="container-fluid " >
//             {/* Logo  */}
//           <NavLink className="navbar-brand" to={"/"} ><h2><span>E</span>Shop</h2></NavLink>

//           {/* Search Button  */}

//           <div className="cart_and_Sign_In">
//             <div className="Sign_In">
//               {
//                 token ? (<Link onClick={handletoken}>Logout</Link>) : (<Link to={"/login"}>SignIn</Link>)
//               }
//               </div>
            
//             <div className="avtar">
//               {
//                 email ?( <Avatar className="avtar " style={{background:"skyblue"}}>{email.split("")[0].toUpperCase()}</Avatar>) : (<Avatar className="avtar "/>)
//               }
//             </div>
            
//             <div className="cart_icon">
//               <Link to={"/order"}>
//                 {
//                   filteredItems.length ? (<Badge badgeContent={filteredItems.length} color="primary">
//                                             <ShoppingCartIcon id="icon" />
//                                           </Badge>)
//                                           :
//                                           (<Badge badgeContent={0} color="primary">
//                                             <ShoppingCartIcon id="icon" />
//                                           </Badge>)
//                 }
              
//               </Link>
              

//             </div>
//           </div>
//         </div>

//         {/* Search Form  */}
//           <form className="Search">

//             <div className="input-group" style={{ height: "17px" }}>
//               <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={name}onChange={handleChange}/>
//               <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>
//                 <i className="fa-solid fa-magnifying-glass"></i>
//               </button> 
//             </div>

//             <div className="list" style={{color:"black" , backgroundColor:"yellow"}}>

//             {data1.length > 0 ? (
//                 <ul>
//                   {data1.map((item, index) => (
//                     <Link
//                       to={"/product/" + item.id + "/" + item.category}
//                       onClick={handleLinkClick} // Call the function to reset name state
//                     >
//                       <li key={index}>{item.heading}</li>
//                     </Link>
//                   ))}
//                 </ul>
//             ) : null}
//             data
//             </div>

//         </form>
//       </nav>


      
//     </div>
//   );
// };

// export default Searchbar;

// Searchbar.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

const Searchbar = () => {
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
        //  console.log(response.data.data) 
        setdata(response.data.data);
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

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search products, brands, etc."
          value={name}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>

      <div style={{color:"black", backgroundColor:"yellow"}}>
        {data1.length >0 ? (
          <ul>
            {data1.slice(0, 5).map((item, index) => (
              <li key={index}>{item.heading}</li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Searchbar;

