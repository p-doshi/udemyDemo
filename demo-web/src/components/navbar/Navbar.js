import React, { useState } from 'react'
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import SearchBar from 'components/SearchBar/SearchBar';
import { Button, useTheme, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from 'state';
import {Grid} from '@mui/material';
import {Hidden} from '@mui/material';
import { light } from '@mui/material/styles/createPalette';


const Navbar= () =>{

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

    const theme = useTheme()
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;

    const [hamburger, setHamburger] = useState(false);
    const toggleHamburger = () =>{
        setHamburger(!hamburger);
    }

    const iconStyle = {
      height: '3rem',
      width: '3rem',
      color: dark
    }

    const linkStyle = {
      color: dark,
      textDecoration: 'none'
    }



  return(
    <>
      <Grid container alignItems={'center'} backgroundColor={light}>
        <Hidden mdUp >
          <Grid item sm={0.5} textAlign={'center'}>        
            <div>
              <RxHamburgerMenu onClick={toggleHamburger} color={dark}/>
            </div>
          
            {hamburger && (
              <div>
                <ul>
                  <li>
                    <FaHome /> 
                  </li>
                  <li>Subject 1</li>
                  <li>Subject 2</li>
                </ul>
              </div>
            )}
          </Grid>
        </Hidden>
        <Grid item sm={1} lg={1} textAlign={'center'}>
          <a href="#home" style={linkStyle}>
            <img src='/assets/udemyLogo.png' alt='logo' height={'100%'} width={'100%'}/>
          </a>
        </Grid>

        <Grid item sm={1} lg={1} height={'100%'} width={'100%'} textAlign={'center'} >
          Categories
        </Grid>

        <Grid item sm={5} lg={6} textAlign={'center'}>
          <SearchBar />
        </Grid>

        <Grid item sm={1} lg={1} textAlign={'center'}>
          <IconButton onClick={() => dispatch(setMode())}>
            {
              theme.palette.mode==="light" ? (
                <MdLightMode className='icon' color={dark} style={iconStyle}/>
              ): 
              (
                <MdNightlightRound className='icon' color={dark} style={iconStyle}/>
              )
            }
          </IconButton>
        </Grid>
        
        <Grid item sm={1} lg={1} textAlign={'center'}>
          <a href="#cart" style={linkStyle}>
            <FaShoppingCart style={iconStyle}/>
          </a>
        </Grid>

        <Grid item sm={1} lg={1} textAlign={'center'}>
          <Button style={{border: '2px solid #000', backgroundColor: neutralLight, width: '70%'}}>
            <a href="#login" style={linkStyle}>
              Log In
            </a>
          </Button>
        </Grid>

        <Grid item sm={1} lg={1} textAlign={'center'}>
          <Button style={{border: '2px solid #000', backgroundColor: dark, width: '70%'}}>
            <a href="#signup" style={{textDecoration: 'none', color: neutralLight}}>
              Sign Up
            </a>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;