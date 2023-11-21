// /* eslint-disable no-unused-vars */
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment, removeItem } from "../Redux/Slice";
// import {Divider} from "@mui/material"
// import { Link } from 'react-router-dom'
// import "./Order.css"

// function Order() {
//   const select = useSelector((state) => state.cart.data);
//   const userid = localStorage.getItem("userid");
//   console.log(select)
//   const dispatch = useDispatch(); 


//   const handleIncrement = (index) => {
//     dispatch(increment(index));
//     console.log(index);
//   };

//   const handleDecrement = (index, num) => {
//     if (num === 1) {
//       dispatch(removeItem(index));
//     }
//     dispatch(decrement(index));
//     console.log(index);
//   };

//   const handleRemove = (index) => {
//     console.log("Removing item with id:", index);
//     dispatch(removeItem(index));
//   };

//   const pricecal = (item) => {
//     return item.price;
//   };
//   const cart2 = select.map((item) => ({
//     ...item,
//     price: item.price ? parseInt(item.price.replace(/\s/g, "").replace(/[^\d]/g, ""), 10) || 0 : 0,
//   }));
  
  
//   // -----------------------------final---------------------------
//   const cart3 = cart2.map((item) => ({
//     ...item,
//     price: parseInt(item.price),
//   }));
//   console.log("item in cart", cart3);


//   // -------------new--------
//   // Filter the items based on user_id
//   const filteredItems = cart3.filter((item) => item.user_id === userid);


//   const totalQuantity = filteredItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const totalAmount = filteredItems.reduce(
//     (total, item) => total +(item.price) * item.quantity,
//     0
//   );
// return (
//     <div className="Order_Container">

//       <div className="OderProduct">
//         <div className="heading">
//         <h2>My Cart</h2>
//         </div>
//         <Divider/>
        
//         {/* Product Render */}

//         {filteredItems && filteredItems.length > 0 ? (
//   filteredItems.map((item, index) => (
//     <div key={index} className="containerr">
//       {/* Order Image */}
//       <div className="first-cont">
//         <img src={item.image} alt="click here" height={"200px"} />
//       </div>

//       {/* Order Details and Btn */}
//       <div className="second-cont">
//         <p>Brand-Name: <span>{item.name}</span></p>
//         {/* Use brandPrice instead of price */}
//         <p className="BrandPrice">Brand-Price: ₹<span>{item.price}</span></p>

//         <div className="Order_btn">
//           <div className="incDre_tn">
//             <button className="Left_button" onClick={() => handleDecrement(item.id, item.quantity)}> - </button>
//             <h4 className="value">{item.quantity}</h4>
//             <button className="Right_button" onClick={() => handleIncrement(item.id)}>+</button>
//           </div>
          
//           <div className="remove">
//             <button onClick={() => handleRemove(item.id)}>Remove</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   ))
// ) : (
//   // If Card is Empty Then This Condition renders
//   <div className="no-items-message">
//     <div className="empty-cart">
//       <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="Empty Cart" />
//       <p><Link to={"/"}>Cart is Empty</Link></p>
//     </div>
//   </div>
// )}
//       </div>

//       {/* Product Balance */}

//       {filteredItems.length > 0 && (
//         <div className="amount">
//           <table>
//             <tbody>
//               <tr>
//                 <th><h2>Details</h2></th>
//               </tr>

//               <tr>
//                 <th>Item</th>
//                 <th>Name</th>
//                 <th>Price</th>
//               </tr>

//               {filteredItems.map((item, index) => (
//   <tr key={index} className="Item_amount">
//     <td>No of item <span style={{ color: "#d63031" }}>({String(item.quantity || 0)})</span><br /></td>
//     <td>{item.name}</td>
//     {/* Add a check for item.price */}
//     <td>₹{(item.price ? item.price : 0) * (item.quantity || 0)}</td>
//     <td>Item Quantity: {item.quantity}</td>
//     {/* <td>Item Price: {item.price}</td> */}
//     {/* Add a check for item.price */}
//     {/* <td>Calculated Total: {(item.price ? item.price : 0) * (item.quantity || 0)}</td> */}
//   </tr>
// ))}

            
//               <tr>
//                 <td colSpan={"2"} style={{color:"#2c3e50", fontSize:"1.5rem", fontWeight:"500"}}>Total Amount :</td>
//                 <td style={{color:"#27ae60",fontSize:"1.5rem", fontWeight:"500"}}> ₹{totalAmount}</td>
//               </tr>
//               </tbody>

//           </table>

//           <button className="PaymentButton">Place your order</button>

//         </div>
//       )}


//     </div>
//   );
// }

// export default Order;


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, removeItem } from "../Redux/Slice";
import { Divider } from "@mui/material";
import { Link } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Order.css";

function Order() {
  const select = useSelector((state) => state.cart.data);
  const userid = localStorage.getItem("userid");
  const dispatch = useDispatch();

  const handleIncrement = (index) => {
    dispatch(increment(index));
  };

  const handleDecrement = (index, num) => {
    if (num === 1) {
      dispatch(removeItem(index));
    }
    dispatch(decrement(index));
  };

  const handleRemove = (index) => {
    dispatch(removeItem(index));
  };

  const pricecal = (item) => {
    return item.price;
  };
  // const cart2 = select.map((item) => ({
  //   ...item,
  //   price: item.price ? parseInt(item.price.replace(/\s/g, "").replace(/[^\d]/g, ""), 10) || 0 : 0,
  // }));
  const cart2 = select.map((item) => ({
    ...item,
    price: item.price ? parseInt(item.price.replace(/[^\d.]/g, ""), 10) || 0 : 0,
  }));
  
  
  
  // -----------------------------final---------------------------
  const cart3 = cart2.map((item) => ({
    ...item,
    price: parseInt(item.price),
  }));
  console.log("item in cart", cart3);







  // Filter the items based on user_id
  const filteredItems = cart3.filter((item) => item.user_id === userid);
  const totalQuantity = filteredItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount = filteredItems.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );
  // const totalAmount = filteredItems.reduce(
  //       (total, item) => total +(item.price) * item.quantity,
  //       0
  //     );


  const createOrder = (data, actions, items) => {
    return actions.order.create({
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: totalAmount.toFixed(2),
                },
                items: items.map((item) => ({
                    name: item.details, // or item.heading based on your preference
                    quantity: item.quantity,
                    category: "PHYSICAL_GOODS",
                    unit_amount: {
                        currency_code: "USD",
                        value: (item.price || 0).toFixed(2),
                    },
                })),
            },
        ],
    });
};


  // const createOrder = (data, actions, items) => {
  //   return actions.order.create({
  //     purchase_units: [
  //       {
  //         amount: {
  //           currency_code: "INR", // Change this to your currency code
  //           value: totalAmount.toFixed(2), // Total amount to be charged
  //         },
  //         items: items.map((item) => {
  //           const unitAmountValue = (item.price && !isNaN(item.price)) ? parseFloat(item.price) : 0;
  
  //           return {
  //             name: item.name,
  //             quantity: item.quantity,
  //             category: "PHYSICAL_GOODS",
  //             unit_amount: {
  //               currency_code: "INR", // Change this to your currency code
  //               value: unitAmountValue.toFixed(2), // Item price
  //             },
  //           };
  //         }),
  //       },
  //     ],
  //   });
  // };
  
  return (
    <div className="Order_Container">
      <div className="OderProduct">
        <div className="heading">
          <h2>My Cart</h2>
        </div>
        <Divider />

        {/* Product Render */}
        {filteredItems && filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="containerr">
              {/* Order Image */}
              <div className="first-cont">
                <img src={item.image} alt="click here" height={"200px"} />
              </div>

              {/* Order Details and Btn */}
              <div className="second-cont">
                <p>Brand-Name: <span>{item.name}</span></p>
                <p className="BrandPrice">Brand-Price: ₹<span>{item.price}</span></p>

                <div className="Order_btn">
                  <div className="incDre_tn">
                    <button className="Left_button" onClick={() => handleDecrement(item.id, item.quantity)}> - </button>
                    <h4 className="value">{item.quantity}</h4>
                    <button className="Right_button" onClick={() => handleIncrement(item.id)}>+</button>
                  </div>

                  <div className="remove">
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          // If Cart is Empty Then This Condition renders
          <div className="no-items-message">
            <div className="empty-cart">
              <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="Empty Cart" />
              <p><Link to={"/"}>Cart is Empty</Link></p>
            </div>
          </div>
        )}
      </div>

      {/* Product Balance */}
      {filteredItems.length > 0 && (
        <div className="amount">
          <table>
            <tbody>
              <tr>
                <th><h2>Details</h2></th>
              </tr>

              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Price</th>
              </tr>

              {filteredItems.map((item, index) => (
                <tr key={index} className="Item_amount">
                  <td>No of item <span style={{ color: "#d63031" }}>({String(item.quantity || 0)})</span><br /></td>
                  <td>{item.name}</td>
                  <td>₹{(item.price ? item.price : 0) * (item.quantity || 0)}</td>
                </tr>
              ))}

              <tr>
                <td colSpan={"2"} style={{ color: "#2c3e50", fontSize: "1.5rem", fontWeight: "500" }}>Total Amount :</td>
                <td style={{ color: "#27ae60", fontSize: "1.5rem", fontWeight: "500" }}> ₹{totalAmount}</td>
              </tr>
            </tbody>
          </table>

          <PayPalScriptProvider options={{ "client-id": "AfIO8KeE8CQotCqRfMms5lgPa0ZbWGhQ4AgE3uOpQRDKGcdzylqPsVpob9TpyyolOw1wi3I8zFPvnjqT" }}>
            <PayPalButtons createOrder={(data, actions) => createOrder(data, actions, filteredItems)} />
          </PayPalScriptProvider>
        </div>
      )}
    </div>
  );
}

export default Order;
