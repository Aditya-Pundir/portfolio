import "../Styles/Projects.css";

import React from "react";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-heading">
        Projects <i class="fa fa-link"></i>
      </h1>
      <div className="projects-container">
        <a href="https://nanobookkeepers.com/" target="_blank" rel="noreferrer">
          <div className="project">
            <h3>Nano Bookkeepers</h3>
          </div>
        </a>
        <a href="https://newsmonkey.world/" target="_blank" rel="noreferrer">
          <div className="project">
            <h3>News Monkey</h3>
          </div>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.aditya_pundir.Rentenant"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project">
            <h3>Rentenant (Android App)</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
