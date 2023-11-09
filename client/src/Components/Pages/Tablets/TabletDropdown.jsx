import React from 'react';
import { NavLink } from 'react-router-dom';

function TabletDropdown() {
  return (
    <div className="mobiles-dropdown">
      <ul>
        <li>
          <NavLink to="/tablet/ipads">iPads</NavLink>
        </li>
        <hr style={{backgroundColor:"gray"}}></hr>
        <li>
          <NavLink to="/tablet/sampads">SamsungPads</NavLink>
        </li>
       
       
      </ul>
    </div>
  );
}

export default TabletDropdown;
