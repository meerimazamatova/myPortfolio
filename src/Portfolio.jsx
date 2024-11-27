import React from 'react';
import './Portfolio.css'; // This imports your CSS file for styling.

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Exploring creativity and web development</p>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Hello! I'm Meerim Azamatova, a passionate web developer specializing in front-end development with React.js, HTML, CSS, and JavaScript.
        </p>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Project 1</h3>
            <p>A short description of the project goes here.</p>
          </div>
          <div className="project-item">
            <h3>Project 2</h3>
            <p>Another project description goes here.</p>
          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <p>© 2024 Meerim Azamatova. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
