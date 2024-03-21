import React, { useEffect, useRef, useState } from "react";
import "./menu.css";

import { gsap } from "gsap";

import { Link } from "react-router-dom";

const Menu = () => {
  const menuLinks = [
    { path: "/about", label: "About" },
    { path: "/works", label: "Work" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const menuContainer = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useRef();
  const menuLinksAnimation = useRef();
  const menuCopyAnimation = useRef();

  const toggleMenu = () => {
    document.querySelector(".hamburger-icon").classList.toggle("active");
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      document.querySelector(".hamburger-icon").classList.toggle("active");
      setIsMenuOpen(false);
    } else return;
  };

  useEffect(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });
    gsap.set(".menu-sub-col-links, .menu-sub-col-address, .menu-col-copy", {
      y: 30,
      opacity: 0,
    });

    menuAnimation.current = gsap.timeline({ paused: true }).to(".menu", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    });

    menuLinksAnimation.current = gsap
      .timeline({ paused: true })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1.25,
        stagger: 0.05,
        ease: "power2.inOut",
        delay: -0.25,
      });

    menuCopyAnimation.current = gsap
      .timeline({ paused: true })
      .to(".menu-sub-col-links, .menu-sub-col-address, .menu-col-copy", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power2.inOut",
      });
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      menuAnimation.current.play();
      menuLinksAnimation.current.play();
      menuCopyAnimation.current.play();
    } else {
      menuAnimation.current.reverse();
      menuLinksAnimation.current.reverse();
      menuCopyAnimation.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={menuContainer}>
      <div className="menu-bar">
        <div className="menu-logo" onClick={closeMenu}>
          <Link to="/">Darren</Link>
        </div>
        <div className="menu-toggle">
          <button className="hamburger-icon" onClick={toggleMenu}></button>
        </div>
      </div>
      <div className="menu">
        <div className="menu-col">
          <div className="menu-sub-col">
            <div className="menu-links">
              {menuLinks.map((link, index) => (
                <div
                  key={index}
                  className="menu-link-item"
                  onClick={toggleMenu}
                >
                  <div className="menu-link-item-holder">
                    <Link className="menu-link" to={link.path}>
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="menu-sub-col"></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
