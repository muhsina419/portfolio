import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-900 rounded-3xl shadow-lg p-6 border-2 border-white hover:shadow-2xl transition-all duration-300 w-full max-w-xl backdrop-blur-md flex flex-col h-full justify-between"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Title + Description */}
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">{project.title}</h2>
        <p className="text-md just-me-again-down-here-regular text-2xl text-gray-700">
          {project.description}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4 flex-wrap">
        <motion.a whileTap={{ scale: 0.95 }} href={project.live} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
          <Button
            className="w-full bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-xl nanum-pen-script-regular text-xl shadow-md transition-colors duration-300"
            size="lg"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Project
          </Button>
        </motion.a>
        <motion.a whileTap={{ scale: 0.95 }} href={project.source} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
          <Button
            variant="outline"
            className="w-full border-2 border-pink-400 text-pink-500 hover:bg-pink-50 rounded-xl nanum-pen-script-regular text-xl px-6 py-3 transition-colors duration-300"
            size="lg"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Source Code
          </Button>
        </motion.a>
      </div>
    </motion.div>
  )
}
