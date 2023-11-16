

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import MobilesDropdown from '../Pages/Mobile/MobilesDropdown';
import TabletDropdown from '../Pages/Tablets/TabletDropdown';
import HMDropdown from '../Pages/Home&Kitchen/HMDropdown';
import Searchbar from './Searchbar';
import BeautyDropdown from '../Pages/Beauty/BeautyDropdown';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container ">
      <div className="navbar">
        <div className="logog">
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVKmPdUKwsmJJT0dxySl2aUFk2e1FB4ULTDDhvXyT51vt-NxfWGExkt4zcuU-JiJOhI8&usqp=CAU"
            alt="img here"
            srcset=""
          
          /> */}
          <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVKmPdUKwsmJJT0dxySl2aUFk2e1FB4ULTDDhvXyT51vt-NxfWGExkt4zcuU-JiJOhI8&usqp=CAU"
  alt="img here"
  srcSet=""  // Corrected from srcset to srcSet
/>

          <h5 className='h5'>
            Fignus
          </h5>
        </div>
        <div className='hamburgerBox'>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>
        <div className='menubox'>
        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>
              Home
            </NavLink>
          </li>

          <li className="hoverable">
            <div className="mobiles-link">
              <NavLink to="/mobile" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')}>
                Mobiles
              </NavLink>
            </div>
            <MobilesDropdown />
          </li>
          <li>
            <NavLink to="/laptop" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>
              Laptops
            </NavLink>
          </li>

          <li className="hoverable">
            <div className="mobiles-link">
              <NavLink to="/tablet" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>
                Tablets
              </NavLink>
            </div>
            <TabletDropdown />
          </li>
          <li className="hoverable">
            <div className="mobiles-link">
              <NavLink to="/homekitchen" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>
              Home&Kitchen
              </NavLink>
            </div>
            <HMDropdown/>
          </li>
          <li className="hoverable">
            <div className="mobiles-link">
     <NavLink to="/beauty" className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} onClick={toggleMenu}>Beauty </NavLink>
            </div>
            <BeautyDropdown/>
          </li>
        </ul>
        </div>
    <Searchbar/>
      
      </div>
      <img src="https://images-static.nykaa.com/uploads/6d302523-73a6-4cd3-aaa7-9e5e6aade7c8.jpg?tr=w-1200,cm-pad_resize"  srcSet=""  alt="" className='saleimg' style={{height:"30px",position:"relative",top:"20px"}} />
      
    </div>
  );
};

export default Navbar;
