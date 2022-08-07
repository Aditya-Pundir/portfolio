import "../Styles/Projects.css";

import React from "react";

function Projects() {
  return (
    <div>
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
          href="https://mealsidea.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project">
            <h3>Meals Idea</h3>
          </div>
        </a>
        <a
          href="https://haridwar-smart-city.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project">
            <h3>Haridwar Smart City</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
