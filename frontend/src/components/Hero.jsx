import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Linkedin, Mail, Terminal, Network, Download } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Network nodes
    const nodes = [];
    const nodeCount = 30;
    const maxDistance = 150;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00ff41';
        ctx.fill();

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(0, 255, 65, ${1 - distance / maxDistance})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden" id="home">
      {/* Animated network background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.3 }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ff41]/10 border border-[#00ff41] rounded-full mb-8 animate-pulse">
          <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-ping absolute"></div>
          <div className="w-2 h-2 bg-[#00ff41] rounded-full"></div>
          <span className="text-[#00ff41] font-mono text-sm font-semibold">SYSTEM ONLINE</span>
        </div>

        {/* Terminal prompt */}
        <div className="mb-6">
          <p className="text-[#00d9ff] font-mono text-sm mb-2">
            <Terminal className="inline w-4 h-4 mr-2" />
            root@portfolio:~$ whoami
          </p>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 font-mono tracking-tight">
          {portfolioData.personal.name}
        </h1>

        {/* Typing effect title */}
        <div className="h-20 mb-8">
          <p className="text-2xl md:text-3xl text-[#00ff41] font-mono">
            <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-[#00ff41]">
              {portfolioData.personal.title}
            </span>
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Specializing in infrastructure projects, network administration, and system security.
          Building robust, scalable solutions for modern IT environments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            onClick={scrollToContact}
            className="bg-[#00ff41] hover:bg-[#00ff41]/90 text-black font-mono font-bold px-8 py-6 text-lg rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.3)] hover:shadow-[0_0_40px_rgba(0,255,65,0.5)] transition-all duration-300"
          >
            <Mail className="mr-2 w-5 h-5" />
            Get In Touch
          </Button>
          <Button
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="bg-transparent border-2 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35]/10 font-mono font-bold px-8 py-6 text-lg rounded-lg shadow-[0_0_30px_rgba(255,107,53,0.2)] hover:shadow-[0_0_40px_rgba(255,107,53,0.4)] transition-all duration-300"
          >
            <Terminal className="mr-2 w-5 h-5" />
            Download Resume
          </Button>
          <Button
            onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
            className="bg-transparent border-2 border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff]/10 font-mono font-bold px-8 py-6 text-lg rounded-lg shadow-[0_0_30px_rgba(0,217,255,0.2)] hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-all duration-300"
          >
            <Linkedin className="mr-2 w-5 h-5" />
            LinkedIn Profile
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#00ff41] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-typing {
          animation: typing 3s steps(40, end), blink 0.75s step-end infinite;
        }
        @keyframes blink {
          from, to { border-color: transparent; }
          50% { border-color: #00ff41; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
