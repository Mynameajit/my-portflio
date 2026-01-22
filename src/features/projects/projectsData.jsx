import swadmitra from "../../assets/SwadMitra.png";
import slocker from "../../assets/SLocker.png";
import MCABurger from "../../assets/MCA-Burger.png";
import goals from "../../assets/goalsTracker.png";
import chat from "../../assets/ChatApp.png";

export const projectsData = [
  {
    id: 1,
    title: "SwadMitra",
    type: "Full Stack Web App",
    description:
      "A complete food ordering web application with authentication, cart, orders and secure online payments.",
    tech: ["React","Material UI", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
    image: swadmitra,
    github: "https://github.com/Mynameajit/-SwadMitra",
    live: "https://swadmitra.vercel.app/",
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    type: "Full Stack Web App",
    description:
      "Real-time chat application supporting one-to-one and group conversations using WebSockets.",
    tech: ["React", "Material UI","Firebase"],
    image: chat,
    github: "https://github.com/Mynameajit/SChatApp/tree/main/sChatapp2",
    live: "https://devloper-ajit--chatapp.web.app/",
  },
  {
    id: 3,
    title: "MCA Burger Vala",
    type: "Frontend Web App",
    description:
      "Modern burger ordering UI with mobile-first design, animations and glassmorphism cards.",
    tech: ["React", "Framer Motion", "CSS", "Firebase", ],
    image: MCABurger,
    github: "#",
    live: "https://mca-burgervala.web.app/",
  },
  {
    id: 4,
    title: "SLocker Web",
    type: "Frontend Web App",
    description:
      "Clean and minimal digital locker UI focused on privacy and smooth navigation.",
    tech: ["React", "Material UI", "Firebase"],
    image: slocker,
    github: "#",
    live: "https://slockerapp.web.app/",
  },
  {
    id: 5,
    title: "Goals Tracker",
    type: "Frontend Web App",
    description:
      "Personal goal management app with Firebase authentication and real-time updates.",
    tech: ["React", "Material Ui", "Firebase"],
    image: goals,
    github: "https://github.com/Mynameajit/goals",
    live: "https://goals-tracker-snowy.vercel.app/",
  },
];
