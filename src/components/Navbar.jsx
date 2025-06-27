import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Dhina</div>
      <div className={styles.menuIcon} onClick={() => setOpen(!open)}>
        <div className={open ? styles.barOpen : styles.bar}></div>
        <div className={open ? styles.barOpen : styles.bar}></div>
        <div className={open ? styles.barOpen : styles.bar}></div>
      </div>
      <ul className={open ? styles.navLinksOpen : styles.navLinks}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 