import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

import DPollImg from "../assets/project1.png";
import portfolioImg from "../assets/portfolio.png"; 
import thirdProjectImg from "../assets/reflectify.png"; 

const projects = [
  {
    id: 1,
    title: "D-POLL – Decentralized Voting System",
    image: DPollImg,
    description:
      "D-POLL is a blockchain-inspired voting platform for tamper-proof voting in communities. Features include authentication, real-time stats, and admin control. Built with React, Tailwind, PostgreSQL, and Render.",
    live: "https://dpoll-demo.vercel.app",
    source: "https://github.com/muhsina419/DPOLL-agile-project-",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    image: portfolioImg,
    description:
      "A storytelling portfolio showcasing my journey as a developer and designer. Built with React, Vite, Tailwind CSS, and Framer Motion.",
    live: "https://yourportfolio.live",
    source: "https://github.com/yourusername/portfolio",
  },
  {
    id: 3,
    title: "Reflectify – All-in-One Self Tracker",
    image: thirdProjectImg,
    description:
      "Reflectify helps track moods, manage tasks, and write journals — all in one place. Built with React, Firebase, and Tailwind CSS.",
    live: "https://reflectify-two.vercel.app/",
    source: "https://github.com/muhsina419/Reflectify",
  },
];

export default function Projects() {
  return (
    <section className=" min-h-screen px-6 md:px-20 py-16 text-white">
      <motion.div
        className="mb-12 md:w-2/3"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl irish-grover-regular mb-4 bg-gradient-to-r from-[#288DB5] to-[#FF6F91] bg-clip-text text-transparent drop-shadow-lg">
          WHAT I BUILD
        </h1>
        <p className="text-xl md:text-2xl just-me-again-down-here-regular leading-relaxed bg-gradient-to-r from-[#288DB5] to-[#FF6F91] bg-clip-text text-transparent">
          From community-driven tools to personal passion builds, here's a glimpse into the digital playgrounds I've crafted with curiosity and code.
        </p>
      </motion.div>

      {/* Projects Grid - 3 per row on large screens */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
