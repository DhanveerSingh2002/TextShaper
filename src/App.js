import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const[alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      message:message
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    <Router>
      <div>
        <Navbar/>
      </div>
      <Alerts alert={alert}/>
        <div className="container">
          <Routes>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/" element={<Textform showAlert={showAlert}/>}/>
          </Routes>
        </div> 
    </Router>
    </>
  );
}

export default App;
