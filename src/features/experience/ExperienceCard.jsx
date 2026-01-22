import { motion } from "framer-motion";

const ExperienceCard = ({ data, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative mb-10 flex w-full ${
        isLeft ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      {/* Timeline Dot */}
      <span
        className="
          absolute left-4 lg:left-1/2 -translate-x-1/2 top-6
          hidden lg:block h-5 w-5
          rounded-full bg-pink-500
          border-4 border-white dark:border-black
          z-10
        "
      />

      {/* Card */}
      <div
        className="
          w-full lg:w-[46%]
          bg-white dark:bg-white/5
          backdrop-blur-xl
          border border-black/10 dark:border-white/10
          rounded-3xl p-6
          text-black dark:text-white
          shadow-lg dark:shadow-none
          hover:shadow-[0_0_40px_rgba(236,72,153,0.35)]
          transition-all
        "
      >
        {/* Status Badge */}
        {data.status && (
          <span
            className="
              inline-block mb-3 px-4 py-1 text-xs font-semibold
              rounded-full
              bg-linear-to-r from-green-400 to-emerald-500
              text-black
            "
          >
            {data.status}
          </span>
        )}

        {/* Role */}
        <h3 className="text-2xl font-semibold text-pink-500">
          {data.role}
        </h3>

        {/* Company + Duration */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {data.company} • {data.duration}
        </p>

        {/* Description */}
        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          {data.description}
        </p>

        {/* Features */}
        <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {data.features.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500" />
              {item}
            </li>
          ))}
        </ul>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-5">
          {data.skills.map((skill, i) => (
            <span
              key={i}
              className="
                px-3 py-1 text-xs rounded-full
                bg-pink-500/10
                text-pink-600 dark:text-pink-400
                border border-pink-500/30
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
