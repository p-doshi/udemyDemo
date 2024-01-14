import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Home/Home';
import { themeSettings } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Login from 'pages/Login/Login';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";


function App() {

   const mode = useSelector((state) => state.mode);
   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

   return (
     <div>
       <BrowserRouter>
         <ThemeProvider theme={theme}>
           <CssBaseline />
           <Navbar />
           <Routes>
             <Route path="/" element={<Login />} />

             {/* <Homepage/> */}
           </Routes>
         </ThemeProvider>
       </BrowserRouter>
     </div>
   );
}

export default App;
