import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./Searchbar.css"
const Searchbar = () => {
  return (
    <div className='parentbox'>
          <div className='searchbox'>
          <input type="text" placeholder="Search products, brands etc" className='search'></input>
          <div className='serachicon'> <FontAwesomeIcon icon={faSearch}  /></div>
          </div>
          
      <button className='btn' >Sign In</button>
      {/* <div className='cart'>
        <h1><FontAwesomeIcon icon={faCartShopping}  className='carto'/></h1>
      

      </div> */}
    </div>
    
  )
}

export default Searchbar
