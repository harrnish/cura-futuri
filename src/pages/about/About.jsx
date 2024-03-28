import React from "react";
import Transition from "../../components/transition/Transition";

import Faq from "react-faq-component";

import Marquee from "react-fast-marquee";

import MagneticButton from "../../components/magneticbutton/MagneticButton";

import "./about.css";

const About = () => {
  const data = {
    title: "",
    rows: [
      {
        title: "What type of works do you take on?",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, perspiciatis fugiat inventore excepturi vel voluptas, doloremque architecto quidem, optio autem at maxime labore possimus accusamus ab deleniti deserunt harum quasi cumque odio? Reiciendis eligendi tempore eum distinctio delectus aspernatur? Consequuntur! ",
      },
      {
        title: "How do you charge for projects?",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit molestiae fugit ipsum commodi at aspernatur laudantium natus qui dignissimos facilis, libero consectetur culpa sunt? Atque nobis ut quam vel.",
      },
      {
        title: "What is your hourly rate?",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel iure eius, error consequuntur quae quibusdam iusto ducimus temporibus quod, itaque saepe rerum distinctio dolor omnis culpa fugiat. Ad, est temporibus omnis ullam necessitatibus a!",
      },
    ],
  };
  return (
    <div className="about page">
      <div className="container">
        <section className="about-marquee">
          <Marquee>
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
              odit?
            </h1>
          </Marquee>
        </section>

        <section className="about-intro">
          <h2>
            Naomi is an award-winning Designer, currently working at Fouroom in
            London and specializing in brand identities, editorial design and
            typography. She works for a variety of clients in Fashion, Beauty,
            Culture and Tech, she creates design for brands of all shapes and
            sizes through Branding, Illustration and Art Direction.
          </h2>
        </section>

        <section className="about-intro-copy">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Est. 1990</span>
              </p>
            </div>
            <div className="about-col">
              <h3>
                She works for a variety of clients in Fashion, Beauty, Culture
                and Tech, she creates design for brands of all shapes and sizes
                through Branding, Illustration and Art Direction. Originally
                from Finland, Naomi Wilson studied graphic design and
                illustration at Hyper Island in Stockholm.
              </h3>
              <h3 style={{ textIndent: "100px" }}>
                She has been nominated for mi quis viverra ornare, eros dolor
                interdum nulla, ut commodo diam libero vitae erat, and has given
                talks at nunc ut sem vitae risus tristique posuere across the
                United States and Europe.
              </h3>
            </div>
          </div>
        </section>

        <section className="about-portrait">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Contact</span>
              </p>
              <br />
              <br />
              <p>
                <span>Email : </span> <span>hello@studio.com</span>
              </p>
              <p>
                <span>Phone : </span> <span>+44 182 304 5922</span>
              </p>
              <p>
                <span>Address : </span> <span>222-3333 Dummy Road</span>
              </p>
              <br />
              <br />
              <br />
            </div>
            <div className="about-col">
              <div className="about-portrait-img">
                <img
                  src="https://assets-global.website-files.com/61385c793ab59f1f6a3372f7/6138b0c979627a47553f5f11_pexels-9431879.jpg"
                  alt=""
                />
              </div>

              <div className="faqs">
                <Faq data={data} />
              </div>
            </div>
          </div>
        </section>

        <section className="about-awards">
          <div className="about-row">
            <div className="about-col"></div>
            <div className="about-col award-header">
              <p>
                <span>Honors and Awards</span>
              </p>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2021</p>
              </div>
              <div className="award-view">
                <p>Featured on Website</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Awwwards</p>
              </div>
              <div className="award-project">
                <p>Your project</p>
              </div>
            </div>
          </div>
          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2021</p>
              </div>
              <div className="award-view">
                <p>Featured on Website</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Awwwards</p>
              </div>
              <div className="award-project">
                <p>Your project</p>
              </div>
            </div>
          </div>
          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2021</p>
              </div>
              <div className="award-view">
                <p>Featured on Website</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Awwwards</p>
              </div>
              <div className="award-project">
                <p>Your project</p>
              </div>
            </div>
          </div>
          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2021</p>
              </div>
              <div className="award-view">
                <p>Featured on Website</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Awwwards</p>
              </div>
              <div className="award-project">
                <p>Your project</p>
              </div>
            </div>
          </div>
          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2021</p>
              </div>
              <div className="award-view">
                <p>Featured on Website</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Awwwards</p>
              </div>
              <div className="award-project">
                <p>Your project</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-awards">
          <div className="about-row">
            <div className="about-col"></div>
            <div className="about-col award-header">
              <p>
                <span>In Press</span>
              </p>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2021</p>
              </div>
              <div className="award-view">
                <p>Featured on Website</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Awwwards</p>
              </div>
              <div className="award-project">
                <p>Your project</p>
              </div>
            </div>
          </div>
          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2021</p>
              </div>
              <div className="award-view">
                <p>Featured on Website</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Awwwards</p>
              </div>
              <div className="award-project">
                <p>Your project</p>
              </div>
            </div>
          </div>
          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2021</p>
              </div>
              <div className="award-view">
                <p>Featured on Website</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Awwwards</p>
              </div>
              <div className="award-project">
                <p>Your project</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-contact">
          <div className="about-contact-copy">
            <h2>Powered by Webflow.com</h2>
            <p>
              <span>
                For a CV and inquiries please reach out to hello@template.co
              </span>
            </p>

            <br />
            <p>
              <span>+44 182 304 5923</span>
            </p>
            <p>
              <span>Instagram • Twitter</span>
            </p>
          </div>
        </section>
        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(About);
