import './Banner.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
export default function Banner() {
    const downloadUrl = "Files/Makrygiannis_Stavros_CV.pdf"; // put your file path here (public folder or URL)

    // console.log('renders')
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
                        I’m a Frontend Developer focused on creating responsive, user-friendly web applications that blend design and functionality. I bring hands-on experience in building intuitive, visually engaging interfaces, with a passion for turning ideas into polished digital experiences.
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
                        <a
                            href={downloadUrl}
                            download
                            className='BannerBtn btn1' >
                            Download Resume
                        </a>
                        <a href="#contact" className="BannerBtn btn2">
                            Contact
                        </a>

                        {/* <Link smooth to='#contact'> <button className='BannerBtn btn2'>Contact</button></Link> */}
                        {/* <Link smooth to='#download'> <button className='BannerBtn btn2'>Download</button></Link> */}

                    </div>

                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0, y: -150 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.3 }} className="BannerIcon">
                    {/* <FloatingImg imageSrc={logo} /> */}
                </motion.div>
            </div>
        </div>
    );
}
