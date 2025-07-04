import './About.css';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="About" id="about">
      <motion.div
        className="aboutContent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="aboutHeader">Hello, I'm Stavros.</h2>

        <div className="aboutTextBlock">
          <p>
            {/* I'm a 23-years old frontend obsessed with turning messy ideas into smooth, responsive experiences that people actually enjoy using. Frontend development for me is where creativity meets code. */}
            I'm a 23-year-old frontend developer obsessed with turning messy ideas into smooth, responsive experiences that people actually enjoy using. For me, frontend development is where creativity meets code. 
             {/* developer who loves transforming ideas into clean, responsive, and human-friendly experiences. */}
             My journey started with curiosity — that moment when you write your first few lines of HTML and something clicks.
            From there, I dove headfirst into the world of code, turning every small project into a new lesson.
          </p>

          <p>
           I recently completed my military service and am now finishing my thesis for an integrated Master’s degree in Informatics and Computer Engineering — a path 
           that has challenged me to think critically, solve problems creatively, and grow both technically and personally.
           {/* I’ve recently wrapped up my military service and am now completing my thesis for an integrated Master’s in Informatics and Computer Engineering.
            It’s been a journey of learning both in and outside the classroom — one that’s pushed me to think critically, solve problems creatively, and stay relentlessly curious. */}
          </p>

          <p>
            I care deeply about accessible, intuitive design and constantly look for ways to make the web better — one line of code at a time. This portfolio is a reflection of
            that mindset: a mix of exploration, learning, and work I’m proud to share.
            {/* I care deeply about crafting smooth, accessible interfaces and making the web a little better with every line of code.  */}
            {/* This portfolio is a reflection of that — a mix of exploration, learning, and the work I’m proud to share. */}
          </p>

          <p className="aboutOutro">
            Thanks for stopping by. Let’s build something meaningful.
          </p>
        </div>

        <div className="quickFacts">
          <p>👨‍💻 Passionate web developer who loves turning ideas into reality.</p>
          <p>☕ Black coffee & late-night debugging sessions are my thing.</p>
          <p>🌍 Based in Athens, always open to remote collaborations.</p>
        </div>
      </motion.div>
    </section>
  );
}
