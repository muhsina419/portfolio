import { useState, useEffect } from "react";
import image1 from '../assets/1.JPG';
import image2 from '../assets/2.png';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.JPG';

const images = [
  image2,
  image4,
  image3,
  image1,
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
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-purple-600" : "bg-gray-400"
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
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
        👋 Hey There, I’m Muhsina.
      </h1>

      <p className=" mt-4 text-3xl md:text-xl text-center text-grey-600 max-w-3xl just-me-again-down-here-regular">
        Developer. Designer. Dreamer. 
        I build things that feel like me—and maybe a little like you too.
      </p>

      <div className="mt-8">
        <a
          className="nanum-pen-script-regular inline-block px-6 py-3 bg-purple-600 text-white rounded-full text-lg shadow-lg hover:bg-purple-700 transition"
        >
          👉 Scroll with me — I’ve got a story to tell.
        </a>
      </div>
    </section>
  );
}
