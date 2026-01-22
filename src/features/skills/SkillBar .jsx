import { motion } from "framer-motion";

const SkillBar = ({ name, level, icon: Icon }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {Icon({ className: "text-lg" })}
            <span className="text-sm font-medium">{name}</span>
          </div>
        </div>
        <span className="text-sm">{level}%</span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;
