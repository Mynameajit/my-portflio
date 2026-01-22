import React from "react";
import { skillsData } from "./skillsData .jsx";
import SkillBar from "./SkillBar .jsx";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full hero-bg flex flex-col items-center pt-10 gap-10"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-4xl font-bold bg-linear-to-r from-pink-500 to-red-500 bg-clip-text text-transparent"
      >
        My Skills
      </motion.h1>

      {/* Skill Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11 w-[90%] max-w-6xl">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div
            key={category}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-pink-500/30"
          >
            <h2 className="text-xl font-semibold mb-4 capitalize">
              {category}
            </h2>

            <div className="flex flex-col gap-4">
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
