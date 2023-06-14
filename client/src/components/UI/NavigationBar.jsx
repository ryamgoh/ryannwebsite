import React from "react";
import banana from "../../assets/banana.svg";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="navbar-card">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <img src={banana} alt="" className="navbar-logo" />
          <div className="navbar-logo-name">Ryann Goh</div>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/work" className="navbar-links">
          Work
        </Link>
        <Link to="/about" className="navbar-links">
          About
        </Link>
        <Link to="/contact" className="navbar-links">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
