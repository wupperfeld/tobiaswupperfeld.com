import React from "react";
import { Paper, Container } from "@material-ui/core";
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
          <p className="about__text">Hallo, mein Name ist Tobias Wupperfeld.</p>

          <p
            className="about__text2"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="300"
          >
            Ich bin ein Querdenker, von dem Sie außergewöhnliche Lösungsansätze
            erwarten können. In meinem bisherigen Werdegang habe ich Einblicke
            in verschiedene Branchen erhalten und mich in komplexe technische
            Themen eingearbeitet. Daher bin ich heute nicht nur ein
            Softwareentwickler und Ingenieur, sondern eine interdisziplinär
            aufgestellte Person, die ein Projekt als Ganzes sieht.
          </p>

          <img
            className="about__logo"
            src="../images/initials-white.png"
            alt="Tobias Wupperfeld Logo"
            data-aos="fade-up"
            data-aos-offset="400"
          />
        </div>
      </Container>
    </div>
  );
}

export default About;
