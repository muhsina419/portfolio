import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import image1 from '../assets/1.JPG';
import image2 from '../assets/starlet.jpeg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.JPG';
import image5 from '../assets/5.jpg';
import image7 from '../assets/6.jpg';
import image8 from '../assets/organisers.jpg';

const images = [
  image4,
  image3,
  image5,
  image2,
  image7,
  image8,
]

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen  flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-b from-purple-100 via-white to-blue-100">
      {/* Carousel Container */}
      <div className="mt-14  relative w-full max-w-4xl overflow-hidden rounded-lg shadow-xl h-56 md:h-96 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-20"
          >
            <img
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${index === current ? "bg-purple-600" : "bg-gray-400"
                }`}
            ></button>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + images.length) % images.length)
          }
          className="absolute top-0 left-0 z-30 h-full px-4 flex items-center justify-center group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/40 group-hover:bg-white">
            ‹
          </span>
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
          className="absolute top-0 right-0 z-30 h-full px-4 flex items-center justify-center group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/40 group-hover:bg-white">
            ›
          </span>
        </button>
      </div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="irish-grover-regular text-8xl md:text-5xl font-bold text-center text-gray-800"
      >
        Hey There, I’m Muhsina.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className=" mt-4 text-3xl md:text-xl text-center text-gray-600 max-w-3xl just-me-again-down-here-regular"
      >
        Developer. Designer. Dreamer.
        I build things that feel like me—and maybe a little like you too.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8"
      >
        <motion.a
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="nanum-pen-script-regular inline-block px-6 py-3 bg-purple-600 text-white rounded-full text-lg shadow-lg hover:bg-purple-700 transition cursor-pointer"
        >
          👉 Scroll with me — I’ve got a story to tell.
        </motion.a>
      </motion.div>
    </section>
  );
}
