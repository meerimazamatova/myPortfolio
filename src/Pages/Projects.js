import React from 'react';
import '../Styles/Projects.css'; // Adjust the path as necessary
import rockPaperScissorsImg from '../Assests/Images/123.png'; // Replace with the correct path
import randomNumberImg from '../Assests/Images/1234.png'; // Replace with the correct path
import lotoImg from '../Assests/Images/12345.png'; // Replace with the correct path

const Projects = () => {
    const projectList = [
        {
            title: 'Rock Paper Scissors',
            description: 'A fun game to play against the computer.',
            link: 'https://iliasbekazarov.github.io/Rock-Paper-Scissors/',
            image: rockPaperScissorsImg
        },
        {
            title: 'Random Number Generator',
            description: 'Generate random numbers within a range.',
            link: 'https://iliasbekazarov.github.io/random_nam./',
            image: randomNumberImg
        },
        {
            title: 'Loto List',
            description: 'A lottery-based random list generator.',
            link: 'https://iliasbekazarov.github.io/loto-list1/',
            image: lotoImg
        },
    ];

    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project-item">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h2>{project.title}</h2>
                        </a>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
