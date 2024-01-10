import React, { useEffect } from 'react';

const Alerts = ({ alert }) => {
  // Effect to handle dynamic background color
  useEffect(() => {
    const alertElement = document.getElementById('alert');

    // Check if the element exists before trying to manipulate its style
    if (alertElement) {
      // If bgColor is provided in the alert object, set the background color
      if (alert && alert.bgColor) {
        alertElement.style.backgroundColor = alert.bgColor;
      } else {
        // If bgColor is not provided or null, reset to default background color
        alertElement.style.backgroundColor = 'green';
      }
    }
  }, [alert]); // Dependency array ensures the effect runs when the alert changes

  return (
    // Use className instead of class for JSX
    // Use the alert class along with dynamic background color class
    alert && (
      <div
        id="alert"
        className={`alert alert-warning alert-dismissible fade show bg-green-600 text-white text-xl px-0 py-3`}
        role="alert"
      >
        {alert.message}
      </div>
    )
  );
};

export default Alerts;
