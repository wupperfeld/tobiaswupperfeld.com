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
        <div data-aos="flip-left">
          <img
            className="about__image"
            src="../images/tw-portrait.png"
            alt="Tobias Wupperfeld Portrait"
          />
        </div>
        <Paper className="about__text">
          Hallo, mein Name ist Tobias Wupperfeld. Ich bin ein Querdenker, von
          dem Sie außergewöhnliche Lösungsansätze erwarten können. In meinem
          bisherigen Werdegang habe ich Einblicke in verschiedene Branchen
          erhalten und mich in komplexe technische Themen eingearbeitet. Daher
          bin ich heute nicht nur ein Softwareentwickler und Ingenieur, sondern
          eine interdisziplinär aufgestellte Person, die ein Projekt als Ganzes
          sieht.
        </Paper>
      </Container>
    </div>
  );
}

export default About;
