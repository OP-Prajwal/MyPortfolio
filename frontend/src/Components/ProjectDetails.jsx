import React from "react";
import { useParams } from "react-router-dom";
import projects from "./projectsData";

const images = {
  "AuraAuth": "https://raw.githubusercontent.com/OP-Prajwal/AuraAuth/main/demo.png",
  "RAG-based Query System": "https://raw.githubusercontent.com/OP-Prajwal/RAG-based-Query-System/main/demo.png",
  "Real Estate Management": "https://raw.githubusercontent.com/OP-Prajwal/RealEstate/main/demo.png",
  "Pithub": "https://raw.githubusercontent.com/OP-Prajwal/Pithub/main/demo.png",
  "uber-clone": "https://raw.githubusercontent.com/OP-Prajwal/uber-clone/main/demo.png",
  "learning-management-system": "https://raw.githubusercontent.com/OP-Prajwal/learning-management-system/main/demo.png"
};

const ProjectDetails = () => {
  const { name } = useParams();
  const project = projects.find(p => p.name === name);

  if (!project) {
    return <div className="text-center text-red-400 py-12">Project not found.</div>;
  }

  return (
    <section className="w-full max-w-3xl mx-auto py-12 px-4 flex flex-col gap-8 items-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-4 text-center">{project.name}</h2>
      <img
        src={images[project.name] || "https://via.placeholder.com/400x200?text=No+Image"}
        alt={project.name}
        className="rounded-xl shadow-lg w-full max-w-md mb-6 object-cover"
      />
      <p className="text-lg text-gray-300 text-center mb-4">{project.description}</p>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-base text-orange-300 font-mono">Tech Stack: {project.tech}</span>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold shadow hover:scale-105 transition-transform duration-200"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
