import React from 'react';
import { NavLink } from 'react-router-dom';

function MobilesDropdown() {
  return (
    <div className="mobiles-dropdown">
      <ul>
        <li>
          <NavLink to="/mobile/iphone">iPhone</NavLink>
        </li>
        <hr style={{backgroundColor:"gray"}}></hr>
        <li>
          <NavLink to="/mobile/android">Android</NavLink>
        </li>
        <hr style={{backgroundColor:"gray"}}></hr>
        <li>
          <NavLink to="/mobile/redmi">Redme</NavLink>
        </li>
       
      </ul>
    </div>
  );
}

export default MobilesDropdown;
