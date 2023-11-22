
import './App.css';
import Navbar from './components/Navbar';
import React,{useState} from 'react';



function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
    
    </>
  );
}

export default App;
