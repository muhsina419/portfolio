import { Badge } from "../ui/badge";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function AdditionalSkills({ skills }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-900 rounded-3xl shadow-lg border-2 border-white p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full backdrop-blur-md mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Side: Icon + Title */}
        <div className="flex items-center gap-4 min-w-[250px]">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-700">Additional Skills</h3>
            <p className="text-sm text-gray-700">
              Beyond the code—these are the skills and tools that help me write, lead, plan, and build as part of something bigger.
            </p>
          </div>
        </div>

        {/* Right Side: Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-sm py-1 px-3 border border-purple-300 bg-white/60 backdrop-blur-sm]"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
