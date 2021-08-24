import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [windowswidth, setWindowswidth] = useState(window.innerWidth);
  const [windowsheigth, setWindowsheigth] = useState(window.innerHeight);
  const resizing = () => {
    setWindowswidth(window.innerWidth);
    setWindowsheigth(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", resizing);
  }, []);
  // in those cotes [] in the useEffect function you put the condition to run :
  //window.addEventListener("resize", resizing);
  //but in our case we doesn't have condition because we have an eventlistener
  return (
    <div className="App">
      <center>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "red",
            border: "2",
            borderRadius: "25px",
            marginTop: "20%",
            width: "20%",
          }}
        >
          {windowswidth}
        </h1>
      </center>
      <center>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "red",
            border: "2",
            borderRadius: "25px",
            marginTop: "20%",
            width: "20%",
          }}
        >
          {windowsheigth}
        </h1>
      </center>
    </div>
  );
}

export default App;
