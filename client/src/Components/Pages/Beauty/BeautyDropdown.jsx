import React from 'react'
import { NavLink } from 'react-router-dom'
const BeautyDropdown = () => {
  return (
    <div className="mobiles-dropdown">
      <ul>
        <li>
          <NavLink to="/beauty/makeup">Makeup</NavLink>
        </li>
        <hr style={{backgroundColor:"gray"}}></hr>
        <li>
          <NavLink to="/beauty/jwellery">Jwellery</NavLink>
        </li>
        <hr style={{backgroundColor:"gray"}}></hr>
        <li>
          <NavLink to="/beauty/perfumes">Perfumes</NavLink>
        </li>
        <hr style={{backgroundColor:"gray"}}></hr>

        <li>
          <NavLink to="/beauty/handbags">Handbags</NavLink>
        </li>
       
      </ul>
    </div>
  )
}

export default BeautyDropdown
