import React from "react";
import Transition from "../../components/transition/Transition";

import "./about.css";

const About = () => {
  return (
    <div className="about page">
      <div className="container">
        <section className="about-marquee">
          <div className="about-row">
            <div className="about-col">
              <p>1</p>
            </div>
            <div className="about-col">
              <p>2</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transition(About);
