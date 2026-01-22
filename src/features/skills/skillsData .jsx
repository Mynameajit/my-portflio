// skillsData.js
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaKey,
  FaCookieBite,
  FaMoneyCheckAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMui,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiRender,
  SiShadcnui,
  SiMysql,
  SiJsonwebtokens,
} from "react-icons/si";

export const skillsData = {
  frontend: [
    {
      name: "HTML",
      level: 90,
      icon: (props) => <FaHtml5 {...props} color="#E34F26" />,
    },
    {
      name: "CSS",
      level: 85,
      icon: (props) => <FaCss3Alt {...props} color="#1572B6" />,
    },
    {
      name: "JavaScript",
      level: 80,
      icon: (props) => <FaJs {...props} color="#F7DF1E" />,
    },
    {
      name: "React",
      level: 85,
      icon: (props) => <FaReact {...props} color="#61DAFB" />,
    },
    {
      name: "MUI",
      level: 75,
      icon: (props) => <SiMui {...props} color="#007FFF" />,
    },
    {
      name: "Tailwind",
      level: 85,
      icon: (props) => <SiTailwindcss {...props} color="#38BDF8" />,
    },
    {
      name: "ShadCN",
      level: 70,
      icon: (props) => <SiShadcnui {...props} color="#FFFFFF" />,
    },
  ],

  backend: [
    {
      name: "Node.js",
      level: 80,
      icon: (props) => <FaNodeJs {...props} color="#339933" />,
    },
    {
      name: "Express.js",
      level: 75,
      icon: (props) => <SiExpress {...props} color="#FFFFFF" />,
    },
    {
      name: "JWT Auth",
      level: 75,
      icon: (props) => <SiJsonwebtokens {...props} color="#D63AFF" />,
    },
    {
      name: "Cookies",
      level: 70,
      icon: (props) => <FaCookieBite {...props} color="#C69C6D" />,
    },
    {
      name: "Razorpay",
      level: 65,
      icon: (props) => <FaMoneyCheckAlt {...props} color="#0C2451" />,
    },
  ],

  database: [
    {
      name: "MongoDB",
      level: 80,
      icon: (props) => <SiMongodb {...props} color="#47A248" />,
    },
    {
      name: "Firebase",
      level: 70,
      icon: (props) => <SiFirebase {...props} color="#FFCA28" />,
    },
    {
      name: "MySQL",
      level: 65,
      icon: (props) => <SiMysql {...props} color="#4479A1" />,
    },
  ],

  tools: [
    {
      name: "Git",
      level: 85,
      icon: (props) => <FaGitAlt {...props} color="#F05032" />,
    },
    {
      name: "GitHub",
      level: 85,
      icon: (props) => <FaGithub {...props} color="#FFFFFF" />,
    },
    {
      name: "Vercel",
      level: 80,
      icon: (props) => <SiVercel {...props} color="#FFFFFF" />,
    },
    {
      name: "Render",
      level: 75,
      icon: (props) => <SiRender {...props} color="#46E3B7" />,
    },
  ],
};
