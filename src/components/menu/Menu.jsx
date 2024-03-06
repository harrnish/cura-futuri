import React, { useEffect, useRef, useState } from "react";
import "./menu.css";
import { gsap } from "gsap";

import { Link } from "react-router-dom";

const Menu = () => {
  const menuContainer = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useRef();

  const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/works", label: "Work" },
    { path: "/contact", label: "Contact" },
    { path: "/careers", label: "Careers" },
  ];

  const toggleMenu = () => {
    document.querySelector(".hamburger-icon").classList.toggle("active");
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    menuAnimation.current = gsap.timeline({ paused: true }).to(".menu", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    });
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      menuAnimation.current.play();
    } else {
      menuAnimation.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={menuContainer}>
      <div className="menu-toggle">
        <button class="hamburger-icon" onClick={toggleMenu}></button>
      </div>
      <div className="menu">
        <div className="menu-links">
          {menuLinks.map((link, index) => (
            <div key={index} className="menu-link-item" onClick={toggleMenu}>
              <Link className="menu-link" to={link.path}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
