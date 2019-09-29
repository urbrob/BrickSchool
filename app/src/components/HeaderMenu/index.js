import React from "react";
import NavButton from "./NavButton";
import logo from "../../images/logo.png";
import "./index.css";

const HeaderMenu = () => (
  <div className="headerWrapper">
    <div className="logo">
      <img src={logo} />
    </div>
    <div className="navMenu">
      <div className="navButtonsWrapper">
        <NavButton redirect="/">Home</NavButton>
        <NavButton redirect="/records">Records</NavButton>
      </div>
    </div>
  </div>
);

export default HeaderMenu;
