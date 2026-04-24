import { motion } from "framer-motion";
import AchievementCard from "../components/AchievementsCard";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-16 text-white">
      <motion.div
        className="mb-12 md:w-2/3"
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl irish-grover-regular mb-4 bg-gradient-to-r from-[#288DB5] to-[#FF6F91] bg-clip-text text-transparent drop-shadow-lg">
          THE WINS ALONG THE WAY
        </h1>
        <p className="text-xl md:text-2xl just-me-again-down-here-regular leading-relaxed bg-gradient-to-r from-[#288DB5] to-[#FF6F91] bg-clip-text text-transparent">
          Every journey leaves behind a few moments that shine a little brighter.
          Moments when an idea works, a project finds its place, or curiosity turns into recognition.

          Here are some milestones that have marked my path so far.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {achievements.map((a, index) => (
          <AchievementCard key={a.id} achievement={a} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
