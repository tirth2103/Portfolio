import React from 'react';
import { Terminal, Server, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { Button } from './ui/button';

const Projects = () => {
  return (
    <section className="py-24 bg-[#0f0f0f] relative" id="projects">
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
            root@portfolio:~$ cd projects && ls
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
            <span className="text-[#00ff41]">{'> '}</span>Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden hover:border-[#00ff41] transition-all duration-300 group"
            >
              {/* Terminal header */}
              <div className="bg-[#0f0f0f] border-b border-gray-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-500 font-mono text-xs ml-2">~/projects/instance_{index + 1}</span>
                </div>
                <Server className="w-4 h-4 text-[#00d9ff]" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Project title */}
                <h3 className="text-xl font-bold text-white font-mono mb-3 group-hover:text-[#00ff41] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="text-[#00d9ff] font-mono text-xs mb-2">{'> Tech Stack:'}</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#0f0f0f] border border-gray-700 rounded text-[#00ff41] font-mono text-xs hover:border-[#00ff41] hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <div className="text-[#00d9ff] font-mono text-xs mb-2">{'> Key Highlights:'}</div>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-[#00ff41] mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 font-mono text-sm">
            Want to know more about these projects?
          </p>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-4 bg-transparent border-2 border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff]/10 font-mono font-bold px-8 py-3 rounded-lg shadow-[0_0_20px_rgba(0,217,255,0.2)] hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300"
          >
            <ExternalLink className="mr-2 w-4 h-4" />
            Let's Discuss
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
