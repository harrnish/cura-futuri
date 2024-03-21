import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

import Menu from "./components/menu/Menu";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Works from "./pages/works/Works";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Menu />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
