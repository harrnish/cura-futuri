import React from "react";
import Transition from "../../components/transition/Transition";

import "./home.css";

import HeroImage from "../../assets/images/home/hero.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-copy">
          <h2>A new type of marketing agency</h2>
        </div>

        <div className="hero-img">
          <img src={HeroImage} alt="" />
        </div>

        <div className="hero-header">
          <h1>2.0</h1>
        </div>
      </div>
    </div>
  );
};

export default Transition(Home);
