import { motion } from "framer-motion";

export default function EducationCard({ degree, institution, year, description, index = 0 }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-900 rounded-3xl shadow-lg p-6 border-2 border-white hover:shadow-2xl transition-all duration-300 w-full max-w-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-2xl font-bold text-purple-700 ">{degree}</h3>
      <p className="text-lg font-medium mt-1">{institution}</p>
      <p className="text-sm text-gray-600 italic mb-3">{year}</p>
      {description && <p className="text-md just-me-again-down-here-regular text-2xl text-gray-700">{description}</p>}
    </motion.div>
  );
}
