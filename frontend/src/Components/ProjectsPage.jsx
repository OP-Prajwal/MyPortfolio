import React from "react";
import projects from "./projectsData";

const ProjectsPage = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl sm:text-6xl font-black text-center group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 animate-gradient-x inline-block hover:scale-105 transition-transform duration-300">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore my latest works and technical innovations</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {projects.map((project) => {
            const fiveStarProjects = ["Pithub", "RAG-based Query System", "AuraAuth", "uber-clone"];
            const stars = fiveStarProjects.includes(project.name) ? 5 : 3;
          return (
            <div
              key={project.name}
              className="group relative rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:translate-y-[-10px]"
            >
              {/* Card Background with animated gradient border */}
              <div className="absolute inset-[2px] rounded-2xl bg-black z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 animate-gradient-xy"></div>
              
              {/* Card Content */}
              <div className="relative z-20 p-8 flex flex-col gap-6">
                {/* Star Rating */}
                <div className="absolute top-2 right-2">
                  <div className="flex gap-1 backdrop-blur-sm bg-white/10 rounded-full px-3 py-1">
                    {Array.from({ length: stars }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.75l-6.172 3.245 1.179-6.881-5-4.873 6.9-1.002L12 2.25l3.093 6.989 6.9 1.002-5 4.873 1.179 6.881z"/>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold mt-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {project.name}
                  </span>
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(',').map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-xs rounded-full bg-purple-900/50 text-purple-200 border border-purple-700/50">
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                >
                  <span>View Project</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default ProjectsPage;
