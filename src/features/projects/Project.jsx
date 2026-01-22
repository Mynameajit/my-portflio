import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "./projectsData";
import { FaProjectDiagram } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative min-h-screen w-full overflow-hidden
        py-24 px-6 lg:px-16
      
      "
    >
       {/* bg-white dark:bg-black transition-colors */}
      {/* Background Glow
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" /> */}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-4xl lg:text-5xl font-bold
          text-gray-900 dark:text-white
          flex items-center justify-center gap-3"
        >
          <FaProjectDiagram className="text-pink-500" />
          Projects
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm max-w-xl mx-auto">
          A collection of my best work showcasing modern UI, clean code,
          responsiveness, and real-world problem solving.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div
        className="
          relative z-10
          grid gap-10
          sm:grid-cols-2 lg:grid-cols-3
          max-w-7xl mx-auto
        "
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
