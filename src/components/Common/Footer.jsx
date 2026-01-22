import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: <Twitter />, link: "https://x.com/Developer_Ajit" },
  { icon: <Github />, link: "https://github.com/mynameajit" },
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/developer-ajit-2025ak/",
  },
  {
    icon: <Facebook />,
    link: "https://www.facebook.com/profile.php?id=100041603052540",
  },
  {
    icon: <Mail />,
    link: "mailto:ajitjumar96411@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-black/10 dark:border-white/10 bg-white/50 dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-pink-500">Ajit.dev</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-sm">
              Full Stack Web Developer focused on building modern, scalable and
              user-friendly web applications.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-5"
          >
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-11 w-11 rounded-full flex items-center justify-center
                  bg-pink-500/10
                  text-pink-600 dark:text-pink-400
                  hover:bg-pink-500 hover:text-white
                  transition
                "
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px bg-black/10 dark:bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Ajit Kumar. All rights reserved.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
