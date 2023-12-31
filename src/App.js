import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

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
      <Navbar/>
      <Alerts alert={alert}/>
      <div className="container">
        <Textform showAlert={showAlert}/>
        
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
