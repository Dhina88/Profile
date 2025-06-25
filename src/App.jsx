import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function SnowBackground() {
  const snowflakes = Array.from({ length: 40 });
  return (
    <>
      {snowflakes.map((_, i) => {
        // Randomize left position, duration, and delay for each snowflake
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 8; // 10s to 18s
        const delay = Math.random() * 8; // 0s to 8s
        const size = 6 + Math.random() * 8; // 6px to 14px
        return (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              width: size,
              height: size,
            }}
          />
        );
      })}
    </>
  );
}

function App() {
  return (
    <>
      <SnowBackground />
      <Navbar />
      <main>
        <Hero />
        <div style={{ height: 60 }} />
        <About />
        <div style={{ height: 60 }} />
        <Projects />
        <div style={{ height: 60 }} />
        <Contact />
      </main>
    </>
  );
}

export default App; 