import React from 'react';
import { motion } from 'framer-motion';
import './ProfileDetails.css';

const educationItems = [
  {
    period: 'November 2024 - present',
    title: 'Military Service',
    description: 'Currently completing my compulsory Military Service',
  },
  {
    period: 'September 2020 - present',
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
    period: '2018',
    title: 'Accured English Degree',
    description: 'Aliveri, Greece',
  },
];

export default function ProfileDetails() {
  return (
    <motion.div initial={{ opacity: 0, y: -60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}  className="ProfileDetails">
      <h3 className='sectionHeader'>Education & Experience</h3>
      <div className="ProfileDetailsContent">
        {educationItems.map((item, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? 'educationItem' : 'experienceItem'
            }`}
          >
            <p>
              <i className="far fa-calendar"></i> {item.period}
            </p>
            <h3>{item.title}</h3>
            {item.institution && <p>{item.institution}</p>}
            {item.position && <p>{item.position}</p>}
            {item.description && <p>{item.description}</p>}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
