import React from 'react';
import { Heart, Code, Terminal } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side */}
          <div className="text-center md:text-left">
            <p className="text-white font-mono font-bold text-lg mb-2">
              {portfolioData.personal.name}
            </p>
            <p className="text-gray-400 font-mono text-sm">
              {portfolioData.personal.title}
            </p>
          </div>

          {/* Center */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Terminal className="w-4 h-4 text-[#00ff41]" />
            <span className="font-mono">Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
            <span className="font-mono">and</span>
            <Code className="w-4 h-4 text-[#00d9ff]" />
          </div>

          {/* Right side */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 font-mono text-xs">
              © {new Date().getFullYear()} {portfolioData.personal.name}
            </p>
            <p className="text-gray-600 font-mono text-xs mt-1">
              All rights reserved
            </p>
          </div>
        </div>

        {/* System status */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded-full">
            <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></div>
            <span className="text-[#00ff41] font-mono text-xs font-semibold">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
