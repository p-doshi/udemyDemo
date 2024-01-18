import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Home/Home';
import TeachPage from 'pages/Teaching/TeachWithUs';
import { themeSettings } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";


function App() {

   const mode = useSelector((state) => state.mode);
   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

   return (
     <div>
       <HashRouter>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar/>
            <Routes>
               <Route path="/pages/Home/Home" element={<Homepage/>}/>
               <Route path='/pages/Teaching/TeachWithUs' element={<TeachPage/>}/>
               <Route index element={<Homepage/>}/>
            </Routes>
         </ThemeProvider>
       </HashRouter>
     </div>
   );
}

export default App;
