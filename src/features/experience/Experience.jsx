import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "./experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen w-full px-6 lg:px-24 py-20 "
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl lg:text-5xl font-bold">
          <span className="text-pink-500"> My Experience</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Practical experience through freelancing, professional training,
          and real-world CMS & self projects.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-300 mx-auto">
        {/* Center Line */}
        <div className="absolute left-4 lg:left-1/2 top-0 h-full 5 sm:w-0 lg:w-0.5
          bg-linear-to-b from-pink-500 via-red-500 to-pink-500" />

        {experienceData.map((exp, index) => (
          <ExperienceCard key={exp.id} data={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
