import React from 'react';
import './Team.css'; // if you have a CSS file for styling

import person1 from '../assets/selfB.png';
import person2 from '../assets/selfA.png';
import person3 from '../assets/selfC.png';

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-heading">Team Members</h2>
      <p className="team-subheading">
        The strength behind Bhavani Induction Motors lies in our dedicated and experienced team.
      </p>
      <div className="team-grid">
        <div className="team-card">
          <img src={person1} alt="Sunil Barot" className="team-img" />
          <div className="team-overlay">
            <h3>Sunil Barot</h3>
            <p>Manufacturing</p>
          </div>
        </div>
        <div className="team-card">
          <img src={person3} alt="Member 2" className="team-img" />
          <div className="team-overlay">
            <h3>Chetan Barot</h3>
            <p>Operations</p>
          </div>
        </div>
        <div className="team-card">
          <img src={person2} alt="Member 3" className="team-img" />
          <div className="team-overlay">
            <h3>Jignesh Barot </h3>
            <p>Sales & Marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
