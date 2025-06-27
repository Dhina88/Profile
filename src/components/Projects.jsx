import React from 'react';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'Web & App Development',
    description: 'Custom-built websites and mobile-ready apps designed for speed, responsiveness, and a smooth user experience.',
    link: '#',
  },
  {
    title: 'AI Integration',
    description: 'Smart solutions powered by AI; From automation tools to intelligent features that enhance productivity and real-world impact.',
    link: '#',
  },
  {
    title: 'System Security Integration',
    description: 'Security-first systems designed to detect, prevent, and respond to threats, combining secure architecture with real-time monitoring.',
    link: '#',
  },
  {
    title: 'Forensics Interface Framework',
    description: 'A modular interface toolkit tailored for digital forensics apps—timeline viewers, evidence logs, and file traceability tools.',
    link: '#',
  },
  {
    title: 'UI Component Library',
    description: 'A modular engine to rapidly prototype and deploy user interfaces with consistent behavior and design patterns.',
    link: '#',
  },
  {
    title: 'Interface Engine',
    description: 'A reusable set of secure and scalable UI components built to streamline development and maintain consistency across projects.',
    link: '#',
  },
];

const Projects = () => (
  <section className={styles.projectsSection} id="projects">
    <h2 className={styles.heading}>Projects</h2>
    <div className={styles.projectsGrid}>
      {projects.map((project, idx) => (
        <div className={styles.card} key={idx}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardDesc}>{project.description}</p>
          <a href={project.link} className={styles.cardButton} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 