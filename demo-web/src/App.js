import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Home/Home';
import { themeSettings } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import TeachPage from 'pages/TeachWithUs';

function App() {

   const mode = useSelector((state) => state.mode);
   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

   return (
      <div>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
               <Navbar/>
               <Routes>
                  <Route path="/pages/Home/Home" element={<Homepage/>}/>
                  <Route path="pages/TeachWithUs" element={<TeachPage/>}/>
                  <Route index element={<Homepage/>}/>
               </Routes>
            </Router>
         </ThemeProvider>
      </div>
   );
}

export default App;
