import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Home/Home';
import { themeSettings } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";


function App() {

   const mode = useSelector((state) => state.mode);
   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

   return (
     <div>
       <BrowserRouter>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar/>
            <Homepage/>
         </ThemeProvider>
       </BrowserRouter>
     </div>
   );
}

export default App;
