import React from 'react';
import { Terminal, Code2, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';

const About = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative" id="about">
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
            root@portfolio:~$ cat about.txt
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
            <span className="text-[#00ff41]">{'> '}</span>About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Terminal-style about card */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="bg-[#0f0f0f] border-b border-gray-800 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-500 font-mono text-xs ml-2">~/about/profile.sh</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm">
              <div className="mb-4">
                <span className="text-[#00d9ff]">const</span>{' '}
                <span className="text-white">profile</span>{' '}
                <span className="text-[#00d9ff]">=</span>{' '}
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div className="ml-4 space-y-2 mb-4">
                <div>
                  <span className="text-[#00ff41]">name:</span>{' '}
                  <span className="text-orange-400">"{portfolioData.personal.name}"</span>,
                </div>
                <div>
                  <span className="text-[#00ff41]">role:</span>{' '}
                  <span className="text-orange-400">"{portfolioData.personal.title.split('|')[0].trim()}"</span>,
                </div>
                <div>
                  <span className="text-[#00ff41]">location:</span>{' '}
                  <span className="text-orange-400">"{portfolioData.personal.location}"</span>,
                </div>
                <div>
                  <span className="text-[#00ff41]">email:</span>{' '}
                  <span className="text-orange-400">"{portfolioData.personal.email}"</span>,
                </div>
              </div>
              <div className="text-gray-400">{'};'}</div>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="text-gray-500 mb-2">// Current Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></div>
                  <span className="text-[#00ff41]">Actively seeking opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div>
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 mb-6">
              <Code2 className="w-10 h-10 text-[#00ff41] mb-4" />
              <p className="text-gray-300 leading-relaxed mb-6">
                {portfolioData.personal.bio}
              </p>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-[#00d9ff] mt-1 flex-shrink-0" />
                <span className="font-mono text-sm">{portfolioData.personal.location}</span>
              </div>
            </div>

            {/* Soft skills */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-[#00ff41] font-mono font-semibold mb-4 flex items-center gap-2">
                <span className="text-lg">{'> '}</span>
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#0f0f0f] border border-gray-700 rounded text-gray-300 font-mono text-xs hover:border-[#00d9ff] hover:text-[#00d9ff] transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
