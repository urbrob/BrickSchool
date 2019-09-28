import React from "react";
import NavButton from "./NavButton";
import logo from "../../images/logo.png";
import "./index.css";

const HeaderMenu = () => (
  <div
    style={{
      height: "8vh",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#505050"
    }}
  >
    <div
      title="logo"
      style={{
        width: "20%",
        height: "100%",
        padding: "5px 30px"
      }}
    >
      <img src={logo} style={{ height: "100%" }} />
    </div>
    <div
      title="navMenu"
      style={{
        width: "80%",
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-end"
      }}
    >
      <div className="NavButtonsWrapper">
        <NavButton redirect="/">Home</NavButton>
        <NavButton redirect="/records">Records</NavButton>
      </div>
    </div>
  </div>
);

export default HeaderMenu;
