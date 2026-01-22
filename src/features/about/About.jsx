import React, { useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Briefcase } from "lucide-react";
import myPhoto from "../../assets/my-photo.jpg";

const mySkills = [
  "HTML",
  "CSS",
  "Tailwind",
  "Material UI",
  "JavaScript",
  "React",
  "Redux",
  "Node.js",
  "Express",
  "MongoDB",
];

const About = () => {
  const countMotion = (value) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) =>
      Math.round(latest)
    );

    useEffect(() => {
      const controls = animate(count, value, {
        duration: 0.8,
        delay: 0.6,
      });
      return () => controls.stop();
    }, []);

    return rounded;
  };

  return (
    <section
      id="about"
      className="
        relative min-h-screen w-full
        px-6 lg:px-20 py-20
      
      "
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          text-4xl lg:text-5xl font-bold text-center
          bg-linear-to-r from-pink-500 to-red-500
          bg-clip-text text-transparent
        "
      >
        About Me
      </motion.h1>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="
          mt-16 max-w-6xl mx-auto
          flex flex-col gap-12
        "
      >
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* IMAGE */}
          <div className="relative">
            <div className="
              absolute inset-0 rounded-3xl
              bg-linear-to-r from-pink-500 to-red-500
              blur-3xl opacity-30
            " />

            <div
              className="
                relative h-72 w-64 sm:h-80 sm:w-72
                bg-white/70 dark:bg-white/10
                backdrop-blur-md
                rounded-3xl p-4
                shadow-lg dark:shadow-none
                transition
              "
            >
              <img
                src={myPhoto}
                alt="Ajit Kumar"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 flex flex-col gap-4">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-pink-500"
            >
              Ajit Kumar
            </motion.h2>

            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Full Stack Developer
            </p>

            <div className="max-w-xl">
              <ReactTyped
                className="text-base sm:text-lg text-gray-700 dark:text-gray-300"
                strings={[
                  "I’m a dedicated full stack developer who enjoys building complete end-to-end web applications. From crafting clean user interfaces to developing secure and scalable backends, I love every part of the development process.",
                ]}
                typeSpeed={15}
                showCursor={false}
              />
            </div>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-2 mt-4">
              {mySkills.map((skill, i) => (
                <span
                  key={i}
                  className="
                    px-4 py-1 text-xs uppercase
                    rounded-full
                    bg-pink-500/10
                    text-pink-600 dark:text-pink-400
                    border border-pink-500/30
                    hover:bg-pink-500 hover:text-white
                    transition
                  "
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <ProfileStats
            rounded={countMotion(1)}
            title="Experience"
            suffix="+ Years"
            Icon={<Briefcase />}
          />
          <ProfileStats
            rounded={countMotion(5)}
            title="Projects"
            suffix="+"
          />
          <ProfileStats
            title="Tech Stack"
            value="MERN Stack"
          />
          <ProfileStats
            title="Availability"
            value="Open to Work"
          />
        </div>
      </motion.div>
    </section>
  );
};

export const ProfileStats = ({ Icon, title, rounded, value, suffix }) => {
  return (
    <div
      className="
        h-28 w-full
        bg-white dark:bg-white/10
        backdrop-blur-md
        border border-black/10 dark:border-white/10
        rounded-2xl
        flex flex-col justify-center items-center
        text-center gap-1
        shadow-md dark:shadow-none
        hover:scale-105
        hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]
        transition
      "
    >
      {rounded !== undefined && (
        <div className="flex items-center gap-1">
          <motion.span className="text-3xl font-bold text-pink-500">
            {rounded}
          </motion.span>
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            {suffix}
          </span>
        </div>
      )}

      {value && (
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {value}
        </p>
      )}

      <p className="text-sm text-gray-600 dark:text-gray-400">
        {title}
      </p>
    </div>
  );
};

export default About;
