import { useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 👈 Add this
import profileImg from '../assets/image.jpg';
import makeATonImg from '../assets/MakeATon 8.0.jpg';

export default function AboutMe() {
  const navigate = useNavigate(); // 👈 Hook for programmatic navigation
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="home-gradient-bg min-h-screen flex flex-col md:flex-row items-center justify-between pl-10 px-10 py-14 text-white">
      {/* Text Section */}
      <motion.div 
        className="md:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl irish-grover-regular pl-24 mb-6 text-white drop-shadow-lg">
          WHO AM I ?
        </h1>
        <p className="whitespace-pre-line text-3xl pl-10 just-me-again-down-here-regular">
          Hi! I'm Muhsina Beegum, a storyteller at heart
          and builder by choice, drawn to the magic
          where tech meets impact.

          Now a Computer Science student at CUSAT,
          I spend my days blending code,
          creativity, and community.

          From full-stack projects to colorful UI/UX
          designs, from late-night writing sprints to
          student-led ventures, I chase ideas that
          spark change. I'm especially driven by tech for
          good, lifting up women in tech, and creating
          spaces where innovation feels like home.
        </p>
        <div className="flex gap-4 mt-8 pl-24">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/resume.pdf"
            download
            className="bg-pink-400 hover:bg-pink-500 nanum-pen-script-regular text-white px-6 py-2 rounded-lg text-xl shadow-md transition"
          >
            RESUME HERE
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/connect')} // 👈 Navigates to LetsConnect
            className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-lg nanum-pen-script-regular text-xl shadow-md transition"
          >
            LET’S CONNECT
          </motion.button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="mt-10 md:mt-0 md:w-1/2 flex flex-col items-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="w-[300px] md:w-[400px] cursor-pointer"
          style={{ perspective: 1000 }}
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="w-full relative"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Front Side */}
            <div 
              className="w-full rounded-3xl border-8 border-teal-400 overflow-hidden shadow-lg"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img src={profileImg} alt="Muhsina Beegum" className="w-full h-auto object-cover" />
            </div>

            {/* Back Side */}
            <div 
              className="absolute top-0 left-0 w-full h-full rounded-3xl border-8 border-teal-400 overflow-hidden shadow-lg bg-teal-50"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <img src={makeATonImg} alt="MakeATon 8.0" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
