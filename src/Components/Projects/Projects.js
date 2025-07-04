import { useState } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import Modal from './Modal';
import ProjectData from '../../Data/ProjectData.json';
import { AnimatePresence } from "framer-motion";




export default function Projects() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);


        // document.querySelector('.Projects').style.zIndex=99999;
 

        setTimeout(() => {
            const TopOfProjects = document.querySelector('.Projects');
            if (TopOfProjects) {
                TopOfProjects.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };


    const closeModal = () => {
        setIsModalOpen(false);
        const projectsContainer = document.querySelector('.Projects');
        projectsContainer.classList.remove('over');
        document.querySelector('.Projects').style.zIndex=1;
    };


    const projectCards = ProjectData.map((project, index) => (
        <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <img src={require(`../../Assets/Images/${project.imageUrl}`)} alt={`Project ${index + 1}`} />
            {project['newProject:'] &&
            <span id='newProject'>New</span>
            }
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

                    <button onClick={() => openModal(project)}>Show More</button>
                </div>

            </div>
        </motion.div>
    ));

    return (
        <div className="Projects" id='projects'>
            <h2 className='ProjectsHeader sectionHeader'>Projects</h2>
            <div className='projectContent'>
                {projectCards}
            </div>
            <AnimatePresence>
                {isModalOpen && <Modal key={isModalOpen} project={selectedProject} closeModal={closeModal} />}
              
            </AnimatePresence>
        </div>
    );
}
