import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <motion.div
      className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-900 rounded-3xl shadow-lg p-8 border-2 border-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full max-w-4xl backdrop-blur-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl irish-grover-regular mb-8 text-center text-purple-700">SEND A MESSAGE</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-800 text-lg font-semibold">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="bg-white/50 border border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-xl text-2xl just-me-again-down-here-regular"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-800 text-lg font-semibold">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="bg-white/50 border border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-xl text-2xl just-me-again-down-here-regular"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-gray-800 text-lg font-semibold">Subject *</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="What's this about?"
            className="bg-white/50 border border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-xl text-2xl just-me-again-down-here-regular"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-800 text-lg font-semibold">Message *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell me about your project..."
            rows={6}
            className="bg-white/50 border border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-xl text-2xl just-me-again-down-here-regular resize-none"
            required
          />
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            className="w-full bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-xl nanum-pen-script-regular text-xl shadow-md transition-colors duration-300"
            size="lg"
          >
            <Send className="h-4 w-4 mr-2" />
            SEND MESSAGE
          </Button>
        </motion.div>
      </form>
    </motion.div>
  )
}
