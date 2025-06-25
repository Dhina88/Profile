import React from 'react';
import styles from '../styles/About.module.css';

const About = () => (
  <section className={styles.aboutSection} id="about">
    <h2 className={styles.heading}>About Me</h2>
    <p className={styles.text}>
      I'm Dhina, A Tech Enthusiast, Innovator and Engineer who loves building impactful digital experiences. I enjoy solving problems, learning new technologies, and collaborating with creative people.
      <br>I’m also the founder of Mindflux, a startup I started to explore how AI can be integrated into the real world — not just as a tool, but as a driver of impact. At Mindflux, we’re building practical, intelligent systems that solve actual problems — and making sure innovation stays grounded in purpose</br>
    </p>
    <ul className={styles.skillsList}>
      <li>Web & App Development</li>
      <li>AI Integration</li>
      <li>Network Security</li>
      <li>Server Configuration</li>
      <li>Cloud Computing</li>
      <li>Data Analytics</li>
      <li>DevOps & Automation</li>
    </ul>
  </section>
);

export default About; 