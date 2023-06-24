import React, { useEffect, useRef } from "react";
import banana from "../assets/banana.svg";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  const navbarRef = useRef(null);
  let prevScrollPos = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos.current > currentScrollPos) {
        navbarRef.current.style.top = "0";
      } else {
        navbarRef.current.style.top = "-10vh";
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar-card" ref={navbarRef}>
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <img src={banana} alt="" className="navbar-logo" />
          <div className="navbar-logo-name">Ryann Goh</div>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/#about" className="navbar-links">
          About
        </Link>
        <Link to="/#work" className="navbar-links">
          Work
        </Link>
        <Link to="/contact" className="navbar-links">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
