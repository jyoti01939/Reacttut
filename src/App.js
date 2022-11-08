import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {

  const [mode,setMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="My App" aboutText="About MyApp" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-5">
        <Textform heading="Enter The Text To Analyise" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
