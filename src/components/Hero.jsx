import React from 'react';
import styles from '../styles/Hero.module.css';
import Typewriter from 'react-simple-typewriter';

// SnowBackground component for animated snowflakes
const SnowBackground = () => {
  const snowflakes = Array.from({ length: 40 });
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
    }}>
      {snowflakes.map((_, i) => (
        <div key={i} className="snowflake" />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className={styles.heroSection} id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <SnowBackground />
      <div className={styles.heroContent} style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.left}>
          <div className={styles.subheadline}>Hello I'm Dhina</div>
          <h1 className={styles.headline}>
            I'm{' '}
            <span className={styles.typewriter}>
              <Typewriter
                words={['Innovator.', 'Engineer.', 'Builder.']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </h1>
          <a href="#projects" className={styles.ctaButton}>View My Work</a>
        </div>
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <img
              src="https://via.placeholder.com/320x320.png?text=Profile+Image"
              alt="Dhina profile"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 