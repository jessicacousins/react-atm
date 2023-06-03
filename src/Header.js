import React from "react";
import logo from "./fox.png";

const Header = ({ title }) => {
  return (
    <header>
      <img
        src={logo}
        alt="Fox Logo"
        style={{ borderRadius: "10px", maxWidth: "100%", height: "auto" }}
      />
      <h1>{title}</h1>
      <h3 className="welcome">Welcome</h3>
    </header>
  );
};
export default Header;
