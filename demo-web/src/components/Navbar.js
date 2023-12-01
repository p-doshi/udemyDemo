import React, { useState } from 'react'
import { FaHome, FaSearch, FaShoppingCart } from 'react-icons/fa';
import './../App.css';
const Navbar= () =>{

    const [menuOpen, setMenu] = useState(false);

    const toggleMenu = () =>{
        setMenu(!menuOpen);
    }
    const [searchOpen, setSearch] = useState(false);

    const toggleSearch = () =>{
        setSearch(!searchOpen);
    }

return(
    <nav className='navbar'>
        <div className="hamburger-menu" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
        <div className="hamburger-icon">&#9776;</div>
        {menuOpen && (
          <ul className="menu-items">
            <li href="#home">
              <FaHome /> 
            </li>
            <li href="#subject1">Subject 1</li>
            <li href="#subject2">Subject 2</li>
    
          </ul>
        )}
      </div>
      <div className="logo">
        <a href="#home">Logo</a>
      </div>
      <div className="search-bar" onMouseEnter={toggleSearch} onMouseLeave={toggleSearch}>
        <div className="search-icon">&#128269;</div>
        {searchOpen && (
        <>
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch />
          </button>
        </>
        )}
      </div>
      
      <div className="cart">
        <a href="#cart">
          <FaShoppingCart />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;