import React from "react";
import "./Skillset.css";

function Skillset() {
  return (
    <div className="skillset">
      <h2>Mein Skillset</h2>
      <div className="skillset__boxes">
        <div className="skillset__box">
          <i class="fas fa-desktop"></i>
          <i class="fas fa-mobile-alt"></i>
          <h3>Front-end</h3>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>ReactJS / Redux</p>
          <p>React Native</p>
          <p>Bootstrap / Material-UI / Tailwind CSS</p>
        </div>
        <div className="skillset__box">
          <i class="fas fa-server"></i>
          <i class="fas fa-database"></i>
          <h3>Back-end</h3>
          <p>NodeJS</p>
          <p>Express</p>
          <p>MongoDB</p>
          <p>SQL</p>
          <p>REST API</p>
          <p>Python</p>
          <p>GCP</p>
        </div>
        <div className="skillset__box">
          <i class="fab fa-dev"></i>
          <i class="fas fa-tools"></i>
          <h3>DevOps / Tools</h3>
          <p>Git / Github</p>
          <p>Jira</p>
          <p>Jest / React Testing Library</p>
          <p>VS Code</p>
          <p>Postman</p>
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
