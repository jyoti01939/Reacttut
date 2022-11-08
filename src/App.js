import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {

  const [mode,setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message , type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }


  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled","success")
      document.title = "My App-Dark Mode";
      // setInterval(() => {
      //   document.title = "My App is Amazing Website";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install My App Now";
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success")
      document.title = "My App-Light Mode";
    }
  }
  return (
    <>
      <Navbar title="My App" aboutText="About MyApp" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <Textform showAlert={showAlert} heading="Enter The Text To Analyise" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
