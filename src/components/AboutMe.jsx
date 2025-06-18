import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 👈 Add this
import profileImg from '../assets/image.jpg';

export default function AboutMe() {
  const navigate = useNavigate(); // 👈 Hook for programmatic navigation

  return (
    <section className="home-gradient-bg min-h-screen flex flex-col md:flex-row items-center justify-between pl-10 px-10 py-14 text-white">
      {/* Text Section */}
      <motion.div 
        className="md:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
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
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="rounded-3xl border-8 border-teal-400 overflow-hidden shadow-lg w-[300px] md:w-[400px]">
          <img src={profileImg} alt="Muhsina Beegum" className="w-full h-auto object-cover" />
        </div>
      </motion.div>
    </section>
  );
}
