import React from 'react';
import './Portfolio.css';

import { NavLink } from 'react-router-dom'
import motor1 from "../assets/pro1.jpg"
import motor2 from "../assets/motor1.png"
import motor3 from "../assets/p1.jpg"
import motor4 from "../assets/p2.jpg"
import motor5 from "../assets/pro2.JPG"
import motor6 from "../assets/p3.jpg"

const images = [motor1, motor2, motor3, motor4, motor5, motor6];

const Portfolio = () => {
  

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <p className="portfolio-subtitle">
        Our portfolio showcases a wide range of durable, energy-efficient induction motors designed for diverse industrial applications.
      </p>

      <div className="portfolio-grid">
        {images.map((img, index) => (
         <NavLink to="/product"> <div
            className="portfolio-card"
          
          >
            <img src={img} alt={`Motor ${index + 1}`} />
            <div className="portfolio-overlay">
              <span className="zoom-icon">🔍</span>
            </div>
          </div></NavLink>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
