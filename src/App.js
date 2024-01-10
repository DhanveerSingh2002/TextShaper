// Importing useState from React
import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // State for managing alerts
  const [alert, setAlert] = useState(null);

  // Function to show alerts
  const showAlert = (message, bgColor) => {
    // Set the alert with the message and background color
    setAlert({
      message: message,
      bgColor: bgColor // Default to 'green' if bgColor is not provided
    });

    // Clear the alert after 1500 milliseconds (1.5 seconds)
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        {/* Passing alert state to the Alerts component */}
        <Alerts alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            {/* Passing showAlert function to the Textform component */}
            <Route
              exact
              path="/"
              element={<Textform showAlert={showAlert} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

