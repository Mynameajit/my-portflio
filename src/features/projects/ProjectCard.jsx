import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="
        group
        bg-white dark:bg-white/10
        backdrop-blur-md
        border border-black/10 dark:border-white/10
        rounded-2xl overflow-hidden
        shadow-md dark:shadow-none
        hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]
        transition-all
      "
    >
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full w-full object-cover
            transition duration-700 group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="px-5 pt-4 pb-6 flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h2>

        <span className="text-xs text-pink-500 font-medium">
          {project.type}
        </span>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                text-xs px-3 py-1 rounded-full
                bg-pink-500/10
                text-pink-600 dark:text-pink-400
                border border-pink-500/30
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2 px-4 py-1 rounded-xl
              border border-pink-500
              text-pink-600 dark:text-pink-400
              hover:bg-pink-500 hover:text-white
              transition
            "
          >
            <FaGithub /> Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2 px-4 py-1 rounded-xl
              bg-linear-to-r from-pink-500 to-red-500
              text-white
              hover:opacity-90
              transition
            "
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
