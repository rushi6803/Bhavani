import React from "react";
import "./About.css";
import aboutImg from "../assets/img1.jpg"; // make sure path matches

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="Certificate" />
        </div>
        <div className="about-content">
          <h2>
            <span className="highlight">ABOUT</span> BHAVANI&nbsp;HIGH&nbsp;SPEED
          </h2>
          <p>
            Since&nbsp;2000,&nbsp;Bhavani High Speed has been a trusted name in providing
            reliable motor solutions to India's industrial sector. We manufacture a wide
            range of motors, including polisher motors, three-phase induction motors,
            single-phase motors, and AC & DC brake motors.
            Our motors are known for their efficiency, durability, and cost-effective
            power transmission, making them ideal for a variety of industrial applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
