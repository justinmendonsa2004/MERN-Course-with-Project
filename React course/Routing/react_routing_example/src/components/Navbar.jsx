import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <ul className="navitems">
        <li className="navitem">
          <Link to="/home">Home</Link>
        </li>
        <li className="navitem">
          <Link to="/login">Login</Link>
        </li>
        <li className="navitem">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="navitem">
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
