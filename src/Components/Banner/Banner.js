import React from 'react';
import './Banner.css';
import logo from '../../Assets/Images/gitImg.png';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import FloatingImg from '../FloatingImg/FloatingImg'
import { HashLink as Link } from 'react-router-hash-link';
export default function Banner() {

    console.log('renders')
    return (
        <div className="Banner" id='/'>
            <div className='BannerContent'>
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: -150 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`BannerText`}
                >
                    <h1>Hello, I'm Stavros Makrygiannis.</h1>
                    <h3><Typewriter words={['Frontend Developer | Informatics & Computer Engineering Student']} loop cursor typeSpeed={50} deleteSpeed={130} /></h3>
                    {/* <h3><Typewriter words={['Frontend Developer']} loop cursor typeSpeed={120} deleteSpeed={80} /></h3> */}

                    <p>
                        {/* I'm a 21-year-old student at the University of West Attica. 
                    I'm on the ride of a 5-year bachelor's and master's degree program in Informatics and Computer Engineering, and my journey has taken an exciting turn into the world of web development.
                    Currently, I'm working as a frontend developer, driven by passion for web development and bringing websites to life. */}


                        {/* I specialize in creating responsive, user-centric web applications that seamlessly blend aesthetic design with advanced functionality. Currently completing my bachelor’s and integrated master’s degree at the University of West Attica, I am driven by a passion for developing innovative digital solutions. With hands-on experience in modern frontend technologies, I aim to continue refining my skills and contribute to impactful projects. */}
                        {/* Passionate about crafting responsive, user-friendly web experiences. Currently completing my bachelor’s and master’s degree at the University of West Attica, I specialize in combining design and functionality to create innovative digital solutions. */}
                        As a passionate Frontend Developer, I specialize in creating responsive, user-friendly web experiences that blend design with functionality. With hands-on experience in frontend development, 
                        I focus on building visually appealing and intuitive user interfaces. Currently completing my bachelor's degree with an integrated master's at the University of West Attica while finalizing my thesis.
                        I am dedicated to transforming ideas into polished, high-quality web solutions.
                        <br></br>
                        <br></br>

                        <span id='scrollDesc'><Link to='/portfolio/#about' smooth>Scroll down to explore more!</Link></span>
                    </p>
                    <div className="SocialIcons">
                        <a href="https://www.linkedin.com/in/stavros-makrygiannis-b1691b256" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/StavrosMak" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>              </a>
                    </div>
                    <div className='BannerBtns'>
                        <Link smooth to='#about'> <button className='BannerBtn btn1'>About me </button></Link>
                        <Link smooth to='#contact'> <button className='BannerBtn btn2'>Contact</button></Link>

                    </div>

                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0, y: -150 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.3 }} className="BannerIcon">
                    <FloatingImg imageSrc={logo} />
                </motion.div>
            </div>
        </div>
    );
}
