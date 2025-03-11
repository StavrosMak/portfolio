
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
                    <h3 className='sectionHeader'>Learn more about me</h3>

                    <p>
                        Hey there! 👋 I'm Stavros, a 23-year-old Frontend Developer with a passion for building modern, user-friendly and visually engaging websites.
                         I am in the final stage of my 5-year bachelor's and integrated master's degree in Informatics and Computer Engineering at the University of West Attica, 
                         with only my thesis remaining. With hands-on experience in frontend development,I specialize in crafting responsive and interactive user interfaces, always striving for the perfect blend of functionality and aesthetics. 
                         Throughout my academic and professional journey, I’ve worked on various projects, refining my skills in modern web technologies and frameworks to create seamless digital experiences. 
                         Currently fulfilling my military service, I remain eager to stay connected with the tech world, continuously learning and exploring new opportunities for growth and innovation. 
                         Let’s connect and build something amazing! 🚀
                         <br></br>
                         <br></br>
                        <span> Explore my portfolio to see what I’ve been working on!</span>
                        {/* Scroll down to check out some of the personal projects I've been working on! */}
                    {/* Hey there! 👋     
                    I'm Stavros, a 21-year-old student in my fourth year at the University of West Attica.
                    I'm on a 5-year journey for a bachelor's and master's degree in Informatics and Computer Engineering and also work as a frontend developer in Athens.
                    Passionate about creating cool and user-friendly websites, I've been actively working as a frontend developer, using the latest tech and cool design to make websites truly awesome.
                    Being part of various projects has been a fantastic learning experience, where I don't just build websites; 
                    I make experiences come to life. Eager to learn and grow in this field,
                    I'm always on the lookout for new opportunities to enhance my skills and create even more exciting experiences.
                    <br></br>
                    Scroll down to check out some of the personal projects I've been working on! */}

                 
 
                       
                    </p>
                </motion.div>
            </div>
        </div>
    )
}