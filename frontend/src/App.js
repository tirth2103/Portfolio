import React, { useState, useEffect } from 'react';
import './App.css';
import NetworkGate from './components/NetworkGate';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already accessed the site in this session
    const hasAccess = sessionStorage.getItem('portfolioAccess');
    if (hasAccess) {
      setAccessGranted(true);
    }
    setIsLoading(false);
  }, []);

  const handleAccessGranted = () => {
    sessionStorage.setItem('portfolioAccess', 'true');
    setAccessGranted(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-[#00ff41] font-mono text-xl">Loading...</div>
      </div>
    );
  }

  if (!accessGranted) {
    return <NetworkGate onAccessGranted={handleAccessGranted} />;
  }

  return (
    <div className="App bg-[#0a0a0a] text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
