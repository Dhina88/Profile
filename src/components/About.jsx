import React from 'react';
import styles from '../styles/About.module.css';

const About = () => (
  <section className={styles.aboutSection} id="about">
    <h2 className={styles.heading}>About Me</h2>
    <p className={styles.text}>
      I'm Dhina, a passionate innovator and engineer who loves building impactful digital experiences. I enjoy solving problems, learning new technologies, and collaborating with creative people.
    </p>
    <ul className={styles.skillsList}>
      <li>JavaScript / React</li>
      <li>UI/UX Design</li>
      <li>Problem Solving</li>
      <li>Team Leadership</li>
    </ul>
  </section>
);

export default About; 