import React from 'react';
import { Terminal, Briefcase, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Experience = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative" id="experience">
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
            root@portfolio:~$ cat experience.log
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
            <span className="text-[#00ff41]">{'> '}</span>Work History
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#00ff41] via-[#00d9ff] to-[#00ff41] opacity-30"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#00ff41] border-4 border-[#0a0a0a] shadow-[0_0_20px_rgba(0,255,65,0.5)] z-10"></div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-[calc(50%-3rem)] w-full`}>
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00ff41] transition-all duration-300 group">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white font-mono group-hover:text-[#00ff41] transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <Briefcase className="w-5 h-5 text-[#00d9ff] flex-shrink-0" />
                      </div>
                      <p className="text-[#00ff41] font-mono font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4">{exp.description}</p>

                    {/* Responsibilities */}
                    {exp.responsibilities.length > 0 && (
                      <div>
                        <div className="text-[#00d9ff] font-mono text-xs mb-2">{'> Key Responsibilities:'}</div>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                              <span className="text-[#00ff41] mt-1">▹</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
