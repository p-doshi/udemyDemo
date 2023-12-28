import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Home/Home';

function App() {
   return (
      <div>
         <Navbar/>
         <Homepage/>
      </div>
   );
}

export default App;
