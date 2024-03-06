import React from "react";
import { Link } from "react-router-dom";

import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-logo">
        <Link className="menu-link" to="/">
          Cura Futuri
        </Link>
      </div>
      <div className="menu-links">
        <div className="menu-link-item">
          <Link className="menu-link" to="/">
            Home
          </Link>
        </div>

        <div className="menu-link-item">
          <Link className="menu-link" to="/about">
            About
          </Link>
        </div>

        <div className="menu-link-item">
          <Link className="menu-link" to="/services">
            Services
          </Link>
        </div>

        <div className="menu-link-item">
          <Link className="menu-link" to="/works">
            Work
          </Link>
        </div>

        <div className="menu-link-item">
          <Link className="menu-link" to="/contact">
            Contact
          </Link>
        </div>

        <div className="menu-link-item">
          <Link className="menu-link" to="/careers">
            Careers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
