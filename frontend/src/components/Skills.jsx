import React from 'react';
import { Terminal, Server, Database, Shield, Network, Code, Cloud, Monitor } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const categoryIcons = {
    'Infrastructure': Server,
    'Identity Management': Shield,
    'Support': Terminal,
    'Database': Database,
    'Collaboration': Network,
    'Security': Shield,
    'Monitoring': Monitor,
    'Containerization': Code,
    'Remote Access': Network,
    'Networking': Network,
    'Programming': Code
  };

  const categoryColors = {
    'Infrastructure': '#00ff41',
    'Identity Management': '#00d9ff',
    'Support': '#ff6b00',
    'Database': '#ff00ff',
    'Collaboration': '#00ff41',
    'Security': '#ff0055',
    'Monitoring': '#00d9ff',
    'Containerization': '#00ff41',
    'Remote Access': '#00d9ff',
    'Networking': '#00ff41',
    'Programming': '#ff6b00'
  };

  // Group skills by category
  const groupedSkills = portfolioData.skills.technical.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <section className="py-24 bg-[#0f0f0f] relative" id="skills">
      {/* Background pattern */}
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
            root@portfolio:~$ ls -la /skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
            <span className="text-[#00ff41]">{'> '}</span>Technical Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, skills]) => {
            const IconComponent = categoryIcons[category] || Code;
            const color = categoryColors[category] || '#00ff41';
            
            return (
              <div
                key={category}
                className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00ff41] transition-all duration-300 group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-800">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: `${color}15`,
                      border: `1px solid ${color}30`
                    }}
                  >
                    <IconComponent 
                      className="w-5 h-5 transition-all duration-300" 
                      style={{ color }}
                    />
                  </div>
                  <h3 
                    className="font-mono font-semibold text-sm"
                    style={{ color }}
                  >
                    {category.toUpperCase()}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-2">
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }}></div>
                      <span className="font-mono text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Network topology visualization */}
        <div className="mt-16 bg-[#1a1a1a] border border-gray-800 rounded-lg p-8">
          <h3 className="text-[#00ff41] font-mono font-semibold mb-6 text-center text-xl">
            {'> '} TECHNOLOGY STACK OVERVIEW
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioData.skills.technical.map((skill, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-full text-gray-300 font-mono text-xs hover:border-[#00ff41] hover:text-[#00ff41] hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all duration-300 cursor-default"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
