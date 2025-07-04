import React from 'react';
import { motion } from 'framer-motion';
import './ProfileDetails.css';

const educationItems = [
  {
    period: 'November 2024 - August 2025',
    title: 'Military Service',
    description: 'Currently completing my compulsory Military Service',
  },
  {
    period: 'September 2020 - Expected 2025',
    title: 'Informatics and Computer Engineering',
    description: '5-year integrated bachelor’s & master’s degree - University of West Attica',
  },
  {
    period: 'November 2023 - November 2024',
    title: 'Prime Educational Software',
    description: 'Frontend Developer',
  },
  {
    period: 'October 2022',
    title: 'Azure Certificate (AZ-900)',
    description: 'Microsoft Azure Certified',
  },
  {
    period: 'October 2021 - December 2021',
    title: 'Hellenic Statistical Authority',
    description: 'Census Employee',
  },
  {
    period: 'June 2020',
    title: 'General High School',
    description: 'Aliveri, Greece',
  },
  {
    period: 'Dec 2017',
    title: 'Accredited English Degree',
    description: 'Aliveri, Greece',
  },
];

export default function ProfileDetails() {
  return (
    <div
      className="profileDetails"
      aria-label="Education and Experience Timeline"
    >
      <div className='timelineContainer'>

        <h2 className='sectionHeader'>Education & Experience</h2>
        <motion.section
        
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="timeline">
          {educationItems.map((item, index) => (
            <motion.article

              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: false }}
            >
              <span className="timeline-dot" />
              <div className="timeline-content">
                <time className="period">{item.period}</time>
                <h3>{item.title}</h3>
                <p className="description">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.section>
      </div>

    </div>
  );
}
