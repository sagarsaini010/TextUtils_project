// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert"
function App() {

const [mode , setmode] = useState('light')
const [btn_mode, setBtnMode] = useState('Dark')
const [alert,setAlert] = useState(null)

const showAlert=(message,type) =>
{
  setAlert({
  msg : message,
  type : type})
  setTimeout(() => {
    setAlert(null)
  }, 1500);

}

const toggleMode = () =>{
  if (mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor = '#042743'
    setBtnMode('Light')
    showAlert("Dark mode has been enable","success")
  
  }
  else {
    setmode('light');
    document.body.style.backgroundColor = 'white'
    setBtnMode('Dark')
    showAlert("Light mode has been enable","success")
  }
}
  return (
    <>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode ={toggleMode} button_mode ={btn_mode} />
      <Alert alert ={alert}/>
      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below" mode ={mode} alert ={showAlert}/>
      </div>
    </>
  );
}

export default App;
