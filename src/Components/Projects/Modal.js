import React, { useState,useEffect } from "react";
import './Modal.css';
import { motion } from 'framer-motion';
import skillsData from '../../Data/skillsData.json';
import { AnimatePresence } from "framer-motion";
import PopupImg from "./PopupImg";
export default function Modal({ closeModal, project }) {
    const [currentImage, setCurrentImage] = useState(1);
    const [showPopup,setShowPopup]=useState(false);


    const getIconsForProject = () => {
        return project.languages.map((language) => {
            const icon = skillsData.find((skill) => skill.alt.toLowerCase() === language.toLowerCase());
            return icon ? <img key={icon.alt} src={icon.imgSrc} alt={icon.alt} width={30} height={30} /> : null;
        });
    };



    const showPrevImage = () => {
        setCurrentImage((prevImage) => (prevImage === 1 ? project.imgCount - 1 : prevImage - 1));
        // console.log(currentImage);
    };

    const showNextImage = () => {
        setCurrentImage((prevImage) => ((prevImage === project.imgCount) ? (1) : (prevImage + 1)));

    };

    useEffect(() => {
        // Set the overflow property based on the showPopup state
        document.body.style.overflow = showPopup ? 'hidden' : 'auto';

        // Cleanup: Reset the overflow property when the component is unmounted
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showPopup]);


    return (

        <motion.div className='Modal'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}>
            <div className='closeButton'>
                <button onClick={closeModal}>&times;</button>
            </div>
            <div className="modalContent">
                <div className="leftSide">
                    <div className="imgContainer" onClick={() => setShowPopup(true)}>
                        <AnimatePresence wait>
                            <motion.img
                                key={currentImage}
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                alt=""
                                src={require(`../../Assets/Images/${project.imgPath}/projectImg${currentImage}.png`)}
                            />
                        </AnimatePresence>
                    </div>
                    <div className="ProjectImages">
                        <button className="prevImg" onClick={showPrevImage}>Prev</button>
                        <button className="nextImg" onClick={showNextImage}>Next</button>
                    </div>
                </div>
                <div className="rightSide">
                    <h2 className="projectTitle">{project.title}</h2>


                    <div className="projectLinks">
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
                    <p className="projectDesc">
                        {project.projectDescription}
                    </p>
                    <p className="projectDate">Completed on: {project.completed}</p>
                    <div className="techStack">
                        <p className="techTitle">Technologies Used:</p>
                        <div className="techIcons">
                        
                            <div className="techIcons">{getIconsForProject()}</div>
                        </div>
                    </div>

                </div>
            </div>
            {showPopup && (
                <PopupImg
                    imgPath={project.imgPath}
                    currentImage={currentImage}
                    onClose={() => setShowPopup(false)}
                />
            )}
           
        </motion.div>
    )
}
