import React, { useState } from 'react'
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import './../App.css';
import ReactSwitch from 'react-switch'

const Navbar= () =>{

    const [menuOpen, setMenu] = useState(false);
    const toggleMenu = () =>{
        setMenu(!menuOpen);
    }

    const [searchOpen, setSearch] = useState(false);
    const toggleSearch = () =>{
        setSearch(!searchOpen);
    }
  
    const [mode, setMode] = useState('light');
    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        document.body.style.color = 'white';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
    }

return(
    <nav className='navbar'>
      <div className="hamburger-menu" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
        <div className="hamburger-icon">&#9776;</div>
      </div>
        {menuOpen && (
          <div className='menu-container'onMouseLeave={toggleMenu}>
          <ul className="menu-items" >
            <li href="#home">
              <FaHome /> 
            </li>
            <li href="#subject1">Subject 1</li>
            <li href="#subject2">Subject 2</li>
    
          </ul>
          </div>
        )}
      
      <div className="logo">
        <a href="#home">Logo</a>
      </div>
      <div className="search-bar" onMouseEnter={toggleSearch} onMouseLeave={toggleSearch}>
        <div className="search-icon">&#128269;</div>
        {searchOpen && (
        <>
          <input type="text" placeholder="Search..." />
        </>
        )}
      </div>
      
      <div className="cart">
        <a href="#cart">
          <FaShoppingCart />
        </a>
      </div>
      <div className="login">
        <a href="#login">
          Log In
        </a>
      </div>
      <div className="signup">
        <a href="#signup">
          Sign Up
        </a>
      </div>
      <div className="darkmode" onClick={toggleMode}> 
        <label htmlFor="darkmode-switch" className="darkmode-label">
          Dark Mode
        </label>
        <ReactSwitch
         checked={mode === 'dark'}
         onChange={toggleMode}
         onColor="#2E2E2E"
         offColor="#D3D3D3"
         uncheckedIcon={false}
         checkedIcon={false}
        />
      </div>
    </nav>
  );
};

export default Navbar;