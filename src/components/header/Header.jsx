import React from "react";
import "./style.css";
import logo from "../../images/logo.png";
import { Link } from "react-router";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="link">
        <div className="containerLogo">
          <img src={logo} alt="logo" className="logo" />
          <h1>Skate Park</h1>
        </div>
      </Link>
      <div className="navbar">
        <Link to="/about" className="link">
          Sobre
        </Link>
        <Link to="/about" className="link">
          contato
        </Link>
      </div>
    </div>
  );
};
