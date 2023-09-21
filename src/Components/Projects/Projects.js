import React from 'react';
import './Projects.css'; // Import your CSS file for styling
import { motion } from 'framer-motion';
export default function Projects() {
    // Sample project data with image filenames
    const projects = [
        {
            title: 'Barbershop',
            imageUrl: 'project3.png', // Replace with the actual image filename for project3
            presentationDemoLink: 'https://www.linkedin.com/posts/stavros-makrygiannis-b1691b256_reactjs-nodejs-express-activity-7101880964884107264-yRPB?utm_source=share&utm_medium=member_desktop',
            liveDemoLink: null,
            codeLink: 'https://github.com/StavrosMak/BarbershopFullStackWebsite-ReactJS-NodeJS',
            languages: ['FullStack', 'ReactJS', 'NodeJS', 'Express', 'MySQL'], // Add the languages/technologies used here
        },
        {
            title: 'UnQ Eshop',
            imageUrl: 'project1.png', // Replace with the actual image filename for project1
            presentationDemoLink: 'https://www.linkedin.com/posts/stavros-makrygiannis-b1691b256_unq-react-ecommerce-activity-7090254613571919873-0SuY?utm_source=share&utm_medium=member_desktop',
            liveDemoLink: 'https://stavrosmak.github.io/UnQ_eshop/',
            codeLink: 'https://github.com/https://github.com/StavrosMak/UnQ_eshop/project1',
            languages: ['ReactJS', 'CSS', 'MaterialUI'],  // Add the languages/technologies used here
        },
        {
            title: 'MovieVerse',
            imageUrl: 'project4.png', // Replace with the actual image filename for project3
            presentationDemoLink: 'https://www.linkedin.com/posts/stavros-makrygiannis-b1691b256_movieverse-javascript-html-activity-7092493276124971008-0-mt?utm_source=share&utm_medium=member_desktop',
            liveDemoLink: 'https://stavrosmak.github.io/IndexPage/index.html',
            codeLink: 'https://github.com/StavrosMak/StavrosMak.github.io',
            languages: ['Javascript', 'HTML', 'CSSMySQL'], // Add the languages/technologies used here
        },
        {
            title: 'Economic Analytics Hub',
            imageUrl: 'project2.png', // Replace with the actual image filename for project2
            presentationDemoLink: 'https://www.linkedin.com/posts/stavros-makrygiannis-b1691b256_economicanalyticshub-react-webdevelopment-activity-7091789041334927360-aZYz',
            liveDemoLink: 'https://stavrosmak.github.io/Economic_Analytics_Hub/',
            codeLink: 'https://github.com/StavrosMak/Economic_Analytics_Hub',
            languages: ['ReactJS', 'CSS', 'RechartsJS', 'MaterialUI','Template'], // Add the languages/technologies used here
        },
        
    ];

    // Map through the project data and create project cards
    const projectCards = projects.map((project, index) => (
        <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} 
        >
            <img src={require(`../../Assets/Images/${project.imageUrl}`)} alt={`Project ${index + 1}`} />
            <div className="project-languages">
                {project.languages.map((language, langIndex) => (
                    <span key={langIndex} className="language-label">
                        {language}
                    </span>
                ))}
            </div>
            <div className="project-info">
                <h2>{project.title}</h2>
                <div className="buttons">
                    {project.presentationDemoLink && (
                        <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                            Presentation
                        </a>
                    )}
                    {project.liveDemoLink && (
                        <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    )}
                    {project.codeLink && (
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            Code
                        </a>
                    )}
                </div>

            </div>
        </motion.div>
    ));

    return (
        <div className="Projects" id='projects'>
            <h2 className='ProjectsHeader'>Projects</h2>
            <div className='projectContent'>
                {projectCards}
            </div>
        </div>
    );
}
