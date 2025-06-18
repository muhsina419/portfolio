import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactInfo() {
  return (
    <motion.div
      className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-900 rounded-3xl shadow-lg p-8 border-2 border-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 space-y-8 w-full max-w-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl irish-grover-regular mb-4 text-center text-purple-700">GET IN TOUCH</h2>

      <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.02 }}>
        <div className="bg-teal-400 p-3 rounded-full">
          <Mail className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-xl">Email</p>
          <p className="text-gray-700 just-me-again-down-here-regular text-lg">muhsinamohammedkutty2003@gmail.com</p>
        </div>
      </motion.div>

      <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.02 }}>
        <div className="bg-pink-400 p-3 rounded-full">
          <Phone className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-xl">Phone</p>
          <p className="text-gray-700 just-me-again-down-here-regular text-lg">+91 8606651684</p>
        </div>
      </motion.div>

      <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.02 }}>
        <div className="bg-teal-400 p-3 rounded-full">
          <MapPin className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-xl">Location</p>
          <p className="text-gray-700 just-me-again-down-here-regular text-lg">Malappuram,Kerala, India</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
