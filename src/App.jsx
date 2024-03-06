import { useState } from "react";
import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

import Menu from "./components/menu/Menu";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Works from "./pages/works/Works";
import Contact from "./pages/contact/Contact";
import Careers from "./pages/careers/Careers";

function App() {
  const location = useLocation();

  return (
    <>
      <Menu />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}

export default App;
