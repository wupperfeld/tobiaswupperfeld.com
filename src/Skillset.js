import React from "react";
import "./Skillset.css";

function Skillset() {
  return (
    <div className="skillset">
      <h2>My Skillset</h2>
      <div className="skillset__boxes">
        <div className="skillset__box">
          <i class="fas fa-desktop"></i>
          <i class="fas fa-mobile-alt"></i>
          <h3>Front-end</h3>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>ReactJS</p>
        </div>
        <div className="skillset__box">
          <i class="fas fa-server"></i>
          <i class="fas fa-database"></i>
          <h3>Back-end</h3>
          <p>NodeJS</p>
          <p>Python</p>
          <p>Java Spring</p>
        </div>
        <div className="skillset__box">
          <i class="fab fa-dev"></i>
          <i class="fas fa-tools"></i>
          <h3>CI / CD</h3>
          <p>Github</p>
          <p>Jest</p>
          <p>VS Code</p>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
