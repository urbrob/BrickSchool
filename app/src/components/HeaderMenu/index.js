import React from "react";
import logo from "../../images/logo.png";

const HeaderMenu = () => (
  <div
    style={{
      height: "5%",
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
        justifyContent: "flex-end",
        backgroundColor: "red"
      }}
    >
      <span style={{ backgroundColor: "yellow", margin: "0 15px" }}>
        Placeholder button
      </span>
      <span style={{ backgroundColor: "yellow", margin: "0 15px" }}>
        Placeholder button
      </span>
    </div>
  </div>
);

export default HeaderMenu;
