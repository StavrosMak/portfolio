
import './About.css';
import logo from '../../Assets/Images/gitImg.png';
import { motion } from 'framer-motion';
export default function About() {

    return (
        <div className="About" id='about'>
            <div className='aboutContent'>
                <motion.div initial={{ opacity: 0, scale: 0, y: -50 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6 }} className='aboutIcon'>
                    <img src={logo} alt='' />

                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className='aboutText'>
                    <h3>Learn more about me</h3>

                    <p>
                    Hey there! 👋     
                    I'm Stavros, a 21-year-old student in my fourth year at the University of West Attica.
                    I'm on a 5-year journey for a bachelor's and master's degree in Informatics and Computer Engineering and also work as a frontend developer in Athens.
                    Passionate about creating cool and user-friendly websites, I've been actively working as a frontend developer, using the latest tech and cool design to make websites truly awesome.
                    Being part of various projects has been a fantastic learning experience, where I don't just build websites; 
                    I make experiences come to life. Eager to learn and grow in this field,
                    I'm always on the lookout for new opportunities to enhance my skills and create even more exciting experiences.
                    <br></br>
                    Scroll down to check out some of the personal projects I've been working on!

                 
 
                       
                    </p>
                </motion.div>
            </div>
        </div>
    )
}