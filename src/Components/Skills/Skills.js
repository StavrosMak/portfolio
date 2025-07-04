import React, { useState, useEffect } from 'react';
import iconData from '../../Data/skillsData.json';
import { motion } from 'framer-motion';
import './Skills.css';

export default function Skills() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const toggleSkillsVisibility = () => {
    setShowAllSkills(!showAllSkills);
  };
  useEffect(() => {
    const handleResize = () => {
      setShowAllSkills(false);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {

      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const visibleSkills = showAllSkills ? iconData : iconData.slice(0, Math.ceil(iconData.length / 2 + 6));

  return (
    <div className="Skills" id="skills">
      <h3 className='sectionHeader'>Skills</h3>
      <div className={`SkillsContainer ${showAllSkills ? 'show-all' : ''}`}>
        {visibleSkills.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="SkillItem"
          >
            <a href={item.url} target="_blank" rel="noreferrer">
              <img src={item.imgSrc} alt={item.alt} width={item.width} height={item.height} />
            </a>
            <span>{item.alt}</span>
          </motion.div>
        ))}
      </div>
     {!showAllSkills ? (
  <button
    className="SeeMoreButton"
    onClick={toggleSkillsVisibility}
    aria-label="Show more skills"
  >
    Show more
  </button>
) : (
  <button
    className="SeeMoreButton"
    onClick={toggleSkillsVisibility}
    aria-label="Show fewer skills"
  >
    Show less
  </button>
)}

    </div>
  );
}
