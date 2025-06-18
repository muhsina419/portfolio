import { motion } from "framer-motion"
import { Github, Linkedin, Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/muhsina419" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/muhsina-beegum" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/hey_beeegum" },
  { name: "WhatsApp", icon: FaWhatsapp, url: "https://wa.me/918606651684" }, 
]

export default function SocialLinks() {
  return (
    <motion.div
      className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-900 rounded-3xl shadow-lg p-8 border-2 border-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-md w-full max-w-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl irish-grover-regular mb-8 text-center text-purple-700">SAY HELLO👋</h2>
      <div className="flex justify-center flex-wrap gap-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-pink-400 hover:bg-pink-500 rounded-full transition-colors duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <social.icon className="h-6 w-6 text-white" />
            <span className="sr-only">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
