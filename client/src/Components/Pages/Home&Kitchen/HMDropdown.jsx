import React from 'react';
import { NavLink } from 'react-router-dom';

function HMDropdown() {
  return (
    <div className="mobiles-dropdown">
      <ul>
        <li>
          <NavLink to="/homekitchen/furniture">Furniture</NavLink>
        </li>
        <hr style={{backgroundColor:"gray"}}></hr>
        <li>
          <NavLink to="/homekitchen/homedecor">HomeDecor</NavLink>
        </li>
        <hr style={{backgroundColor:"gray"}}></hr>
        <li>
          <NavLink to="/homekitchen/kitchenDinning">Kitchen&Dinning</NavLink>
        </li>
       
      </ul>
    </div>
  );
}

export default HMDropdown;
