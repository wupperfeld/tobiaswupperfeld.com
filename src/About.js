import React from "react";
import { Container } from "@material-ui/core";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function About() {
  return (
    <div className="about">
      <Container maxWidth="lg">
        <div className="about__items">
          <div data-aos="flip-left">
            <img
              className="about__image"
              src="../images/tw-portrait.png"
              alt="Tobias Wupperfeld Portrait"
            />
          </div>
          <p className="about__text">Hello, my name is Tobias Wupperfeld.</p>

          <p
            className="about__text2"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="300"
          >
            I'm a Software Engineer.
          </p>

          <img
            className="about__logo"
            src="../images/initials-white.png"
            alt="Tobias Wupperfeld Logo"
            data-aos="fade-up"
            data-aos-offset="600"
          />
        </div>
      </Container>
    </div>
  );
}

export default About;
