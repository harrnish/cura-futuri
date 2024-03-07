import React, { useEffect, useRef, useState } from "react";
import "./menu.css";

import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);

import { Link } from "react-router-dom";

const Menu = () => {
  const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/works", label: "Work" },
    { path: "/contact", label: "Contact" },
    { path: "/careers", label: "Careers" },
  ];

  const menuContainer = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useRef();
  const hamburgerBefore = CSSRulePlugin.getRule(".hamburger-icon:before");
  const hamburgerAfter = CSSRulePlugin.getRule(".hamburger-icon:after");

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
      gsap.to(".menu-bar a", {
        color: "#f3f1e5",
      });
      gsap.to(hamburgerBefore, {
        cssRule: { backgroundColor: "#f3f1e5" },
        duration: 0,
      });
      gsap.to(hamburgerAfter, {
        cssRule: { backgroundColor: "#f3f1e5" },
        duration: 0,
      });
    } else {
      menuAnimation.current.reverse();
      gsap.to(".menu-bar a", {
        color: "#000",
        duration: 0.5,
        delay: 0.5,
      });
      gsap.to(hamburgerBefore, {
        cssRule: { backgroundColor: "#000" },
        duration: 0.5,
      });
      gsap.to(hamburgerAfter, {
        cssRule: { backgroundColor: "#000" },
        duration: 0.5,
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={menuContainer}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link to="/">Cura Futuri 2.0</Link>
        </div>
        <div className="menu-toggle">
          <button className="hamburger-icon" onClick={toggleMenu}></button>
        </div>
        <div className="menu-contact">
          <Link to="/">info@curafuturi.com</Link>
        </div>
      </div>
      <div className="menu">
        <div className="menu-col">
          <div className="menu-col-copy">
            <h3>&copy;2023</h3>
            <p>
              Strive to change the ins and outs of digital marketing agencies.
            </p>
          </div>
        </div>
        <div className="menu-col">
          <div className="menu-sub-col">
            <div className="menu-links">
              {menuLinks.map((link, index) => (
                <div
                  key={index}
                  className="menu-link-item"
                  onClick={toggleMenu}
                >
                  <Link className="menu-link" to={link.path}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="menu-sub-col">
            <div className="menu-sub-col-links">
              <p>Social</p>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
            <div className="menu-sub-col-address">
              <p>Find us</p>
              <p>Pharmacy Ave</p>
              <p>422 56 Scarborough</p>
              <p>Toronto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
