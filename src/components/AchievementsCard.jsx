import { motion } from "framer-motion";
import { FaAws, FaStar, FaTrophy, FaUsers, FaBook, FaCode } from "react-icons/fa";

const iconMap = {
  cloud: <FaAws className="text-2xl" />,
  star: <FaStar className="text-2xl" />,
  trophy: <FaTrophy className="text-2xl" />,
  users: <FaUsers className="text-2xl" />,
  book: <FaBook className="text-2xl" />,
  code: <FaCode className="text-2xl" />,
};

const categoryColors = {
  certification: "from-[#288DB5] to-[#3ab0db]",
  award: "from-[#FF6F91] to-[#ff9bb5]",
  competition: "from-[#f59e0b] to-[#fbbf24]",
  recognition: "from-[#8b5cf6] to-[#a78bfa]",
};

const AchievementCard = ({ achievement, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="achievement-card rounded-3xl p-6 flex flex-col gap-4 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md shadow-lg border border-white hover:shadow-2xl transition-all duration-300 w-full max-w-xl"
    >
      {/* Image Placeholder */}
      <div className="w-full h-40 bg-white/50 rounded-xl overflow-hidden flex items-center justify-center border-2 border-dashed border-pink-300 mb-2">
        {achievement.image ? (
          <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-500 text-sm font-medium flex flex-col items-center justify-center just-me-again-down-here-regular text-2xl">
            <span className="text-4xl mb-2 opacity-80">📸</span>
            Achievement Photo
          </div>
        )}
      </div>

      <div className="flex items-start gap-4">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${categoryColors[achievement.category]} flex items-center justify-center text-white shrink-0 shadow-lg`}
        >
          {iconMap[achievement.icon] || <FaStar className="text-2xl" />}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="irish-grover-regular text-lg leading-tight" style={{ color: "#288DB5" }}>
            {achievement.title}
          </h3>
          <p className="nanum-pen-script-regular text-xl mt-1" style={{ color: "#FF6F91" }}>
            {achievement.organization}
          </p>
        </div>
      </div>

      <p className="just-me-again-down-here-regular text-lg leading-relaxed text-foreground/80">
        {achievement.description}
      </p>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
        <span className="lexend-peta-use text-xs uppercase tracking-wider text-muted-foreground">
          {achievement.category}
        </span>
        <span className="nanum-pen-script-regular text-lg" style={{ color: "#288DB5" }}>
          {achievement.date}
        </span>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
