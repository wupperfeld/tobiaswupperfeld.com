import React from "react";
import "./About.css";
import Divider from "@material-ui/core/Divider";

const About = () => (
  <div className="aboutme">
    <img
      className="aboutme__image"
      src="../images/tw-portrait-lg.jpg"
      alt="Tobias Wupperfeld Portrait"
    />

    <p>
      Hallo, mein Name ist Tobias Wupperfeld. Ich bin ein Querdenker, von dem
      Sie außergewöhnliche Lösungsansätze erwarten können. In meinem bisherigen
      Werdegang habe ich Einblicke in verschiedene Branchen erhalten und mich in
      verschiedene technische Themen eingearbeitet. Daher bin ich heute nicht
      nur ein Programmierer, sondern eine interdisziplinär aufgestellte Person,
      die ein Projekt als Ganzes sieht.
    </p>

    <h2>Mein Skillset (Fullstack Webentwickler)</h2>

    <h3>Sprache: JavaScript</h3>
    <Divider />
    <h3>Frontend</h3>
    <ul>
      <li>HTML / CSS</li>
      <li>React / Redux</li>
      <li>Material-UI / Bootstrap</li>
    </ul>
    <Divider />
    <h3>Backend</h3>
    <ul>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>MongoDB</li>
      <li>Google Cloud Platform</li>
    </ul>
    <Divider />
    <h3>DevOps</h3>
    <ul>
      <li>Git, Github, Version Control</li>
      <li>Clean Code Quality Checks wie ESLint, Prettier und BEM-Methodik</li>
    </ul>
  </div>
);

export default About;
