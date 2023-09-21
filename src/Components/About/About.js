
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
                        I'm a 21-year-old student in my fourth year at the University of West Attica,
                        where I'm studying for a 5-year bachelor's degree program that includes a master's degree.
                        I live in Athens, and I really love making user-friendly websites and making them look great.
                        I always try to learn about the newest technology and design ideas to make websites look as good as possible.
                        I'm eager to learn more and get better in this field, so I'm always happy to find new chances to learn and grow.

                    </p>
                </motion.div>
            </div>
        </div>
    )
}