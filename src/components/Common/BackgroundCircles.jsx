import { motion } from "framer-motion";

const Bubble = ({ className, animate, duration }) => (
  <motion.div
    className={className}
    animate={animate}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
  />
);

const BackgroundCircles = () => {
  return (
    <div
      className="
        fixed inset-0 -z-10
        overflow-hidden pointer-events-none
      "
    >
      {/* 🔵 Blue Bubble */}
      <Bubble
        className="
          absolute top-[5%] left-[10%]
          w-[260px] h-[260px]
          rounded-full
          bg-blue-500/30 dark:bg-blue-500/20
          blur-[90px]
        "
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        duration={60}
      />

      {/* 🟢 Green Bubble */}
      <Bubble
        className="
          absolute top-[35%] left-[65%]
          w-[220px] h-[220px]
          rounded-full
          bg-emerald-500/30 dark:bg-emerald-500/20
          blur-[90px]
          hidden sm:block
        "
        animate={{ x: [0, -40, 20, 0], y: [0, 30, -20, 0] }}
        duration={50}
      />

      {/* 🟣 Purple Bubble */}
      <Bubble
        className="
          absolute bottom-[12%] right-[8%]
          w-[240px] h-[240px]
          rounded-full
          bg-purple-500/30 dark:bg-purple-500/20
          blur-[100px]
        "
        animate={{ x: [0, 25, -25, 0], y: [0, -30, 30, 0] }}
        duration={55}
      />

      {/* 🔴 Red Bubble */}
      <Bubble
        className="
          absolute bottom-[18%] left-[18%]
          w-[200px] h-[200px]
          rounded-full
          bg-rose-500/30 dark:bg-rose-500/20
          blur-[90px]
          hidden md:block
        "
        animate={{ x: [0, 20, -20, 0], y: [0, -40, 40, 0] }}
        duration={65}
      />
    </div>
  );
};

export default BackgroundCircles;
