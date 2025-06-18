"use client"

import { motion } from "framer-motion"
import ContactInfo from "@/components/connect/ContactInfo"
import ContactForm from "@/components/connect/ContactForm"
import SocialLinks from "@/components/connect/SocialLinks"

export default function LetsConnect() {
  return (
    <section className="home-gradient-bg min-h-screen flex flex-col items-center justify-center px-10 py-14 text-white">
      <motion.div className="text-center mb-16" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-4xl md:text-6xl irish-grover-regular mb-6 text-white drop-shadow-lg">LET'S CONNECT</h1>
        <p className="text-2xl md:text-3xl just-me-again-down-here-regular max-w-4xl mx-auto">
          Ready to collaborate, create, or just chat about tech? Drop me a message and let's make something amazing together!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl w-full">
        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="space-y-8">
          <ContactInfo />
          <SocialLinks />
        </motion.div>

        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
          <ContactForm />
        </motion.div>
      </div>

      <motion.div className="text-center mt-16" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
        <p className="text-2xl just-me-again-down-here-regular text-white/80">{"Can't wait to hear from you! This could be the start of something wonderful- so go ahead ✨"}</p>
      </motion.div>
    </section>
  )
}
