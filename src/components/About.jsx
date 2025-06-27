import React from 'react';
import styles from '../styles/About.module.css';

const About = () => (
  <section className={styles.aboutSection} id="about">
    <div className={styles.aboutGrid}>
      <div className={styles.left}>
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.leftText}>
          I'm Dhina, A Tech Enthusiast, Innovator and Engineer who loves building impactful digital experiences. I enjoy solving problems, learning new technologies, and collaborating with creative people.
          I'm also the Director of Mindflux Technology, a startup I started to explore how AI can be integrated into the real world; not just as a tool, but as a driver of impact. At Mindflux, we're building practical, intelligent systems that solve actual problems and making sure innovation stays grounded in purpose. <br></br><br></br>-Progress, innovation, and real-world impact continue to lead the way-
        </p>
      </div>
      <div className={styles.right}>
        <h3 className={styles.subheading}>Tech Specialist Profile</h3>
        <p className={styles.rightDesc}>
        A forward thinking professional who is passionate about solving complex problems and driving meaningful progress through technology. Committed to continuous learning, delivering impactful solutions, and contributing to innovative projects that make a difference.
        </p>
        <ul className={styles.skillsList}>
          <li>Web & App Development</li>
          <li>AI Integration</li>
          <li>Network Security</li>
          <li>Server Configuration</li>
          <li>Cloud Computing</li>
          <li>Data Analytics</li>
          <li>DevOps & Automation</li>
          <li>Blockchain & Web3</li>
          <li>Machine Learning</li>
          <li>Data Science</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About; 