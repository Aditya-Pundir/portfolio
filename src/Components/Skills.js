import React from "react";
import "../Styles/Skills.css";

function Skills() {
  return (
    <div className="skill-section-container">
      <h1 className="skills-heading">Expertise in</h1>
      {/* <ul className="skills-list">
        <li>Python</li>
        <li>NodeJS</li>
        <li>ReactJS</li>
        <li>React Native</li>
        <li>ExpressJS</li>
        <li>MongoDB</li>
        <li>CSS</li>
        <li>Java</li>
      </ul> */}
      <div className="skills-container">
        <div className="skill-container">
          <img src="Python.png" alt="Python" className="skill" title="Python" />

          <h3 className="skill-name">Python</h3>
        </div>
        <div className="skill-container">
          <img
            src="MongoDB.png"
            alt="MongoDB"
            className="skill"
            title="MongoDB"
          />
          <h3 className="skill-name">MongoDB</h3>
        </div>
        <div className="skill-container">
          <img
            src="ExpressJS.png"
            alt="ExpressJS"
            className="skill"
            title="ExpressJS"
          />

          <h3 className="skill-name">ExpressJS</h3>
        </div>
        <div className="skill-container">
          <img
            src="ReactJS.png"
            alt="ReactJS"
            className="skill"
            title="ReactJS"
          />
          <h3 className="skill-name">ReactJS</h3>
        </div>
        <div className="skill-container">
          <img src="NodeJS.png" alt="NodeJS" className="skill" title="NodeJS" />

          <h3 className="skill-name">NodeJS</h3>
        </div>
        <div className="skill-container">
          <img
            src="ReactNative.png"
            alt="React Native"
            className="skill"
            title="React Native"
          />
          <h3 className="skill-name">React Native</h3>
        </div>

        <div className="skill-container">
          <img src="CSS.png" alt="CSS" className="skill" title="CSS" />

          <h3 className="skill-name">CSS</h3>
        </div>
        <div className="skill-container">
          <img src="Java.png" alt="Java" className="skill" title="Java" />
          <h3 className="skill-name">Java</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
