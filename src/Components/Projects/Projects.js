import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
export default function Projects() {
    const projects = [
        {
            title: 'Barbershop',
            imageUrl: 'project3.png',
            presentationDemoLink: 'https://www.linkedin.com/posts/stavros-makrygiannis-b1691b256_reactjs-nodejs-express-activity-7101880964884107264-yRPB?utm_source=share&utm_medium=member_desktop',
            liveDemoLink: null,
            codeLink: 'https://github.com/StavrosMak/BarbershopFullStackWebsite-ReactJS-NodeJS',
            languages: ['FullStack', 'ReactJS', 'NodeJS', 'Express', 'MySQL','API','Framer Motion'],
        },
        {
            title: 'UnQ Eshop',
            imageUrl: 'project1.png',
            presentationDemoLink: 'https://www.linkedin.com/posts/stavros-makrygiannis-b1691b256_unq-react-ecommerce-activity-7090254613571919873-0SuY?utm_source=share&utm_medium=member_desktop',
            liveDemoLink: 'https://stavrosmak.github.io/UnQ_eshop/',
            codeLink: 'https://github.com/StavrosMak/UnQ_eshop',
            languages: ['ReactJS', 'CSS', 'MaterialUI','API'],
        },
        {
            title: 'MovieVerse',
            imageUrl: 'project4.png',
            presentationDemoLink: 'https://www.linkedin.com/posts/stavros-makrygiannis-b1691b256_movieverse-javascript-html-activity-7092493276124971008-0-mt?utm_source=share&utm_medium=member_desktop',
            liveDemoLink: 'https://stavrosmak.github.io/IndexPage/index.html',
            codeLink: 'https://github.com/StavrosMak/StavrosMak.github.io',
            languages: ['Javascript', 'HTML', 'CSS', 'MySQL','API'],
        },
        {
            title: 'Economic Analytics Hub',
            imageUrl: 'project2.png',
            presentationDemoLink: 'https://www.linkedin.com/posts/stavros-makrygiannis-b1691b256_economicanalyticshub-react-webdevelopment-activity-7091789041334927360-aZYz',
            liveDemoLink: 'https://stavrosmak.github.io/Economic_Analytics_Hub/',
            codeLink: 'https://github.com/StavrosMak/Economic_Analytics_Hub',
            languages: ['ReactJS', 'CSS', 'RechartsJS', 'MaterialUI', 'Template'],
        },
        {
            title: 'Italian Restaurant',
            imageUrl: 'project6.png',
            presentationDemoLink: '',
            liveDemoLink: 'https://stavrosmak.github.io/italian_restaurant/index',
            codeLink: 'https://github.com/StavrosMak/italian_restaurant',
            languages: ['ReactJS', 'CSS', 'MaterialUI', 'Template'],
        },
        {
            title: 'Portfolio',
            imageUrl: 'project5.png',
            codeLink: 'https://github.com/StavrosMak/portfolio',
            languages: ['ReactJS', 'CSS', 'MaterialUI', 'Framer Motion', 'EmailJS', 'API'],
        },
        {
            title: 'Dog Lover',
            imageUrl: 'project7.png',
            presentationDemoLink: '',
            liveDemoLink: '',
            codeLink: 'https://github.com/StavrosMak/react-challenge-dog_lover/tree/master',
            languages: ['ReactJS Challenge', 'ReactJS', 'CSS', 'MaterialUI', 'Template', 'API', 'Challenge'],
        },
        {
            title: 'Concurrency Converter',
            imageUrl: 'project8.png',
            presentationDemoLink: '',
            liveDemoLink: '',
            codeLink: 'https://github.com/StavrosMak/CurrencyConverter-ReactJS_Typescript',
            languages: ['Typescript', 'ReactJS Challenge', 'MaterialUI', 'Template', 'Challenge'],
        },

    ];

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
                        <a href={project.presentationDemoLink} target="_blank" rel="noopener noreferrer">
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
