import React from "react";
import "../styles.css";
import back from "../assets/icons/back.svg"
const Navbar = () => {
  return (
  <div className="navbar">
    <div className="back">
      <img src={back} alt="" />
    </div>
    <div className="header"> Select Dishes </div>
  </div>
  );
};

export default Navbar;
