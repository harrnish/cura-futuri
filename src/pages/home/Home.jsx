import React from "react";
import Transition from "../../components/transition/Transition";

import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <section className="hero-section">
        <div className="hero-copy">
          <h2>Rethinking...</h2>
        </div>
      </section>
    </div>
  );
};

export default Transition(Home);
