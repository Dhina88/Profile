import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './smooth-scroll.css';

function ParticleConstellationBackground() {
  const canvasRef = React.useRef(null);
  const numParticles = 60;
  const maxDist = 120;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    canvas.width = width;
    canvas.height = height;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', resize);

    // Particle setup
    const particles = Array.from({ length: numParticles }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: 2 + Math.random() * 2,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < numParticles; i++) {
        for (let j = i + 1; j < numParticles; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.strokeStyle = `rgba(0,119,255,${1 - dist / maxDist})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      // Draw particles
      for (let i = 0; i < numParticles; i++) {
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#0077ff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function update() {
      for (let i = 0; i < numParticles; i++) {
        particles[i].x += particles[i].vx;
        particles[i].y += particles[i].vy;
        if (particles[i].x < 0 || particles[i].x > width) particles[i].vx *= -1;
        if (particles[i].y < 0 || particles[i].y > height) particles[i].vy *= -1;
      }
    }

    function animate() {
      update();
      draw();
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}

function App() {
  return (
    <>
      <ParticleConstellationBackground />
      <Navbar />
      <main>
        <Hero />
        <div style={{ height: 60 }} />
        <About />
        <div style={{ height: 24 }} />
        <Projects />
        <div style={{ height: 60 }} />
        <Contact />
      </main>
    </>
  );
}

export default App; 