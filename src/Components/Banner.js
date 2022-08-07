import React from "react";
import "../Styles/Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h3 className="banner-hello">Hello, I'm</h3>
        <h1 className="banner-name">Aditya Pundir</h1>
        <h3 className="banner-job">MERN Stack Developer</h3>
        <div className="social-media-links">
          <a
            href="https://www.linkedin.com/in/aditya-pundir-178161240/"
            target="_blank"
            rel="noreferrer"
            className="social-media-link"
          >
            <i class="fa fa-linkedin"></i>
          </a>
          <a
            href="mailto:adityapundir2k@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="social-media-link"
          >
            <i class="fa fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="banner-image">
        <img src="1.png" alt="Aditya Pundir" />
      </div>
    </div>
  );
}

export default Banner;
