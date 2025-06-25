import React from 'react';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio to showcase my work and skills.',
    link: '#',
  },
  {
    title: 'Task Manager App',
    description: 'A productivity app to manage daily tasks and boost efficiency.',
    link: '#',
  },
  {
    title: 'UI Component Library',
    description: 'A reusable set of UI components for fast web development.',
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