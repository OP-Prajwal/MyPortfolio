import React from "react";
import { useNavigate } from "react-router-dom";
import projects from "./projectsData";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 flex flex-col gap-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-400 mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <button
            key={project.name}
            onClick={() => navigate(`/projects/${encodeURIComponent(project.name)}`)}
            className="bg-black/70 rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:scale-105 hover:bg-black/90 transition-transform duration-200 border border-gray-800 text-left cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-1">{project.name}</h3>
            <p className="text-gray-300 text-base mb-2">{project.description}</p>
            <span className="text-xs text-orange-300 font-mono">{project.tech}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
