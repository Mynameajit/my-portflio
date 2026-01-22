import { ReactTyped } from "react-typed";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Download,
  AlignHorizontalDistributeCenter,
  Twitter,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";

import heroAvatar from "../../assets/heroAvatar.png";
import ParticlesBackground from "../../components/Common/ParticlesBackground";
import myResume from "../../assets/myResume.pdf";

const socialLinks = [
  { icon: <Twitter />, link: "https://x.com/Developer_Ajit" },
  { icon: <Github />, link: "https://github.com/mynameajit" },
  { icon: <Linkedin />, link: "https://www.linkedin.com/in/developer-ajit-2025ak/" },
  { icon: <Facebook />, link: "https://www.facebook.com/profile.php?id=100041603052540" },
];

const Hero = () => {
  // ✅ SIMPLE & SAFE SCROLL FUNCTION
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="
        relative h-screen w-full overflow-hidden pt-10
      lg:pt-20
      "
    >
      <ParticlesBackground />

      <div className="relative z-10 flex h-full items-start justify-between  px-5 lg:px-40">
        {/* LEFT CONTENT */}
        <div
          className="
            flex flex-col h-full pt-20 lg:pt-22 gap-5
            max-w-xl
            text-center lg:text-left
          "
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="
              font-bold text-4xl lg:text-6xl
              text-gray-900 dark:text-white
            "
          >
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
              Ajit Kumar
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <ReactTyped
              strings={[
                "Full Stack Web Developer",
                "Frontend Developer",
                "MERN Stack Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              className="
                text-2xl lg:text-4xl font-semibold
                bg-linear-to-r from-pink-500 to-red-500
                bg-clip-text text-transparent
              "
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <ReactTyped
              className="text-base lg:text-xl text-gray-700 dark:text-gray-300"
              strings={[
                "Building modern, scalable, and interactive web applications using React, Node.js, Express, and MongoDB. Passionate about clean UI and seamless UX.",
              ]}
              typeSpeed={8}
              showCursor={false}
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              onClick={() => scrollToSection("about")}
              className="
                h-12 w-full sm:w-44 rounded-xl text-white text-lg
                bg-linear-to-r from-pink-500 to-red-500
                hover:shadow-[0_0_25px_rgba(255,17,0,0.6)]
                transition
              "
            >
              <AlignHorizontalDistributeCenter />
              About Me
            </Button>

            <a href={myResume} download="Ajit_Kumar_Resume.pdf">
              <Button
                className="
                  h-12 w-full sm:w-44 rounded-xl text-lg
                  bg-white dark:bg-black
                  text-black dark:text-white
                  border border-pink-500/50
                  hover:shadow-[0_0_20px_rgba(255,17,0,0.4)]
                  transition
                "
              >
                <Download />
                My Resume
              </Button>
            </a>
          </motion.div>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center lg:justify-start gap-6">
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.15 }}
                transition={{ delay: 1.2 + i * 0.15 }}
                className="
                  h-12 w-12 rounded-full flex items-center justify-center
                  bg-pink-500/10
                  text-pink-600 dark:text-pink-400
                  hover:bg-pink-500 hover:text-white
                  transition
                "
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT AVATAR (DESKTOP ONLY) */}
        <div className="hidden lg:flex h-full">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            src={heroAvatar}
            alt="Hero Avatar"
            className="
              h-[98%] object-contain select-none
              opacity-90
              dark:opacity-100
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
