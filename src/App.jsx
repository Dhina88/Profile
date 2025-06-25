import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
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