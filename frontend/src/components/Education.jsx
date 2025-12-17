import React from 'react';
import { Terminal, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Education = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative" id="education">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#00d9ff] font-mono text-sm mb-2">
            <Terminal className="inline w-4 h-4 mr-2" />
            root@portfolio:~$ cat education.log
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
            <span className="text-[#00ff41]">{'> '}</span>Education
          </h2>
        </div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.education.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00ff41] transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-[#00ff41]" />
              </div>

              {/* Institution */}
              <h3 className="text-lg font-bold text-white font-mono mb-2 group-hover:text-[#00ff41] transition-colors duration-300">
                {edu.institution}
              </h3>

              {/* Degree */}
              <p className="text-[#00d9ff] font-mono text-sm mb-1">{edu.degree}</p>
              <p className="text-gray-400 text-sm mb-4">{edu.field}</p>

              {/* Meta info */}
              <div className="space-y-2 text-xs text-gray-500 font-mono">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
