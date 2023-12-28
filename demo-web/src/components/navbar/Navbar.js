import React, { useState } from 'react'
import { FaHome, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import SearchBar from 'components/SearchBar/SearchBar';
import { Button } from '@mui/material';
import "./Navbar.css"

const Navbar= () =>{

    const [menuOpen, setMenu] = useState(false);
    const toggleMenu = () =>{
        setMenu(!menuOpen);
    }
  
    const [mode, setMode] = useState('light');
    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
    }

  return(
    <div className='navbar'>
      <div className="hamburger-menu">
        <div className="hamburger-icon">
          <RxHamburgerMenu className="icon" onClick={toggleMenu}/>
        </div>
      
        {menuOpen && (
          <div className='menu-container'>
            <ul className="menu-items" >
              <li href="#home">
                <FaHome /> 
              </li>
              <li href="#subject1">Subject 1</li>
              <li href="#subject2">Subject 2</li>
      
            </ul>
          </div>
        )}
      </div>
      
      <div>
        <a href="#home">
          <img className='logo' src='/assets/udemyLogo.png' alt='logo'/>
        </a>
      </div>

      <div className='categories'>
        Categories
      </div>

      <div className="search-bar" >
        <SearchBar />
      </div>
      <div className="darkmode"> 
        {mode==="light" && (
          <MdLightMode className='icon' onClick={toggleMode} />
        )} 
        {mode==="dark" && (
          <MdNightlightRound className='icon' onClick={toggleMode} />
        )}
      </div>
      <div className="cart">
        <a href="#cart">
          <FaShoppingCart className='icon'/>
        </a>
      </div>
      <Button style={{border: '2px solid #000'}} className="links">
        <a href="#login">
          Log In
        </a>
      </Button>
      <Button style={{border: '2px solid #000', backgroundColor: "#000"}} className="links">
        <a href="#signup">
          Sign Up
        </a>
      </Button>
    </div>
  );
};

export default Navbar;