import "../Styles/Reviews.css";

import React from "react";

function Reviews() {
  return (
    <div className="review-section-container">
      <h1 className="reviews-heading">Clients say</h1>
      <div className="reviews-container">
        <div className="review">
          <div className="client">
            <img
              src="muhammad-zayn.webp"
              alt="Muhammad Zayn"
              className="client-image"
            />
            <h4 className="client-name">Muhammad Zayn</h4>
            <div className="stars">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
          </div>
          <p className="review-text">
            Great work and Professionally delivered.
          </p>
        </div>
        <div className="review">
          <div className="client">
            <img
              src="muhammad-zayn.webp"
              alt="Muhammad Zayn"
              className="client-image"
            />
            <h4 className="client-name">Muhammad Zayn</h4>
            <div className="stars">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
          </div>
          <p className="review-text">
            Aditya is thorough professional and he communicated amazingly well
            throughout the whole project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
