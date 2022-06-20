import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);

  const showAlert = (message, Type)=>{
    setAlert({
      msg: message,
      Type: Type
    })

    setTimeout(()=>{setAlert(null)}, 1500)
  }

  const toggle = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = '#eceff1';
      showAlert("Light Mode Activated", "success");
    }else {
      setMode('dark');
      document.body.style.backgroundColor = '#263238';
      showAlert("Dark Mode Activated", "success");


    }
  }

  

  return (
    <>
       <Router>
      <Navbar title = "TextUtils" aboutText = "About" mode = {mode} toggleMode = {toggle}/>
      <Alert alert={alert}/>
     
      <div className="container my-3">
        
      <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode = {mode}/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>

        
        </div>
        </Router>
      
    </>
  );
}

export default App;
