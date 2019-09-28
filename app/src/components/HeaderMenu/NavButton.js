import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavButton = ({ redirect, children }) => (
  <div className="NavButton">
    <Link to={redirect}>{children}</Link>
  </div>
);

export default NavButton;
