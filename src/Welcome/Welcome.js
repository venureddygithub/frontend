import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-main-continer">
      <div className="welcome-card-container">
        <h1 className="welcome-heading">Welcome to</h1>
        <h1 className="vegetable-tittle">Vegetable Mart :)</h1>
        <p>
          Linkind In:<span style={{fontWeight:"700"}}>Etta Venu Kumar Reddy</span>
        </p>
        <p>
          Gmail:<span style={{fontWeight:"700"}}>venu12345@gmail.com</span>
        </p>
      </div>
    </div>
  );
};
export default Welcome;
