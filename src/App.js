// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
function App() {

const [mode , setmode] = useState('light')
const toggleMode = () =>{
  if (mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor = '#042743'
  }
  else {
    setmode('light');
    document.body.style.backgroundColor = 'white'
  }
}
  return (
    <>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode ={toggleMode} />
      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below" mode ={mode}/>
      </div>
    </>
  );
}

export default App;
