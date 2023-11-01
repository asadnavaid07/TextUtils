import "./App.css";
import Navbar from "./components/Navbar";

import TextForm from "./components/TextForm";
import React, { useState, useEffect } from "react";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Light Mode has been Enabled", "Success");
    } else {
      setMode("light");
      showAlert("Dark Mode has been Enabled", "Success");
    }
  };

  // Use useEffect to set the background color based on the updated mode
  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "light" ? "#333333" : "white";
  }, [mode]);

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} showAlert={showAlert} />
      <div className="container">
        <TextForm mode={mode} toggleMode={toggleMode} showAlert={showAlert} />

  
      </div>
    </>
  );
}

export default App;
