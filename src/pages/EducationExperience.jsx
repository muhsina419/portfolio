import { motion } from "framer-motion";
import EducationCard from "../components/EducationCard";

const educationData = [
  {
    degree: "Integrated MSc in Computer Science",
    institution: "CUSAT - Cochin University of Science and Technology",
    year: "2023 – present",
    description: "Focused on full-stack development, AI/ML, and community tech building.",
  },
  {
    degree: "Higher Secondary (Science Stream)",
    institution: "PCNGHSS Mookkuthala",
    year: "2020 – 2022",
    description: "Emphasis on Physics, Chemistry and Mathematics",
  },
  {
    degree: "High School",
    institution: "THSS Vattamkulam",
    year: "2018 – 2020",
    description: "Built a solid foundation in logical reasoning and tech curiosity.",
  },
];

// professional experiences (internships)
const professionalExperienceData = [
  {
    role: "Project Intern",
    institution: "The Nexus Project",
    duration: "June 2024",
    description: "Worked on designing and developing Canteen App - contributing to backend by writting efficient API using FASTAPI.",
  },
  {
    role: "Python Developer Intern",
    institution: "Rootsys International",
    duration: "May 2024 – June 2024",
    description: "Worked on designing and developing responsive web interfaces using React, TailwindCSS, and Framer Motion.",
  },
];

// extra‑curricular activities and community roles
const extracurricularData = [
  {
    role: "Organizer",
    institution: "Make-A-Ton 8.0",
    duration: "2026 - Feb",
    description: "Part of Content and Tech team - designed and developed official website, writing content, handling dm's etc..",
  },
  {
    role: "Creative and Content Team",
    institution: "IEDC CUSAT",
    duration: "2025 – Present",
    description: "Handled Creative Contents over the social media platforms and help to reach more people.",
  },
  {
    role: "Outreach Lead",
    institution: "CodeSakhi",
    duration: "2024 – Present",
    description: "Led community events, workshops, and content strategy focused on empowering women in tech.",
  },
  {
    role: "Outreach Lead",
    institution: "Tinkerhub DCS CUSAT",
    duration: "2023 – 2024",
    description: "Led community events, workshops, and content strategy focused on building student tech culture.",
  },
];

export default function EducationExperienceSection() {
  return (
    <section
      id="education-experience"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-white"
    >
      {/* Main Heading */}
<motion.h2
  className="text-4xl md:text-6xl font-bold irish-grover-regular mb-1 bg-gradient-to-r from-[#288DB5] to-[#FF6F91] bg-clip-text text-transparent drop-shadow-lg text-center"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  THE MAKING OF ME
</motion.h2>

{/* Subheading */}
<motion.p
  className="text-2xl bg-gradient-to-r from-[#288DB5] to-[#FF6F91] bg-clip-text text-transparent drop-shadow text-center just-me-again-down-here-regular mb-16"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  Every step added something new to the mix — the journey from classroom corners to the real-world 
  brainstorms, contributed to the person I'm becoming.
</motion.p>

      
      <div className="relative flex flex-col gap-12 w-full max-w-6xl mx-auto items-start justify-center">
        <div className="w-full flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold mb-6 text-cyan-400 irish-grover-regular text-center md:text-left">Education 🎓</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {educationData.map((edu, index) => (
              <EducationCard
                key={`edu-${index}`}
                degree={edu.degree}
                institution={edu.institution}
                year={edu.year}
                description={edu.description}
              />
            ))}
          </div>
          <p className="text-2xl nanum-pen-script-regular text-pink-500 mt-4  items-center justify-center">
            "Not just degrees. But defining moments"
          </p>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-gray-600 my-8"></div>

        {/* Experience Section (always below education) */}
        <div className="w-full flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold mb-6 text-pink-400 irish-grover-regular text-center md:text-left">Experience 💻</h3>
          <div className="flex flex-col gap-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalExperienceData.map((exp, index) => (
                <EducationCard
                  key={`prof-${index}`}
                  degree={exp.role}
                  institution={exp.institution}
                  year={exp.duration}
                  description={exp.description}
                />
              ))}
            </div>
            {/* <div>
              <p className="text-2xl nanum-pen-script-regular text-pink-500 mt-4  items-center justify-center">
              "Not just degrees. But defining moments"
              </p>
            </div> */}

            <div className="w-full h-px bg-gray-600 my-8"></div>


            <h3 className="text-2xl font-bold mb-6 text-pink-400 irish-grover-regular text-center md:text-left">Extra-curricular Activities 💻</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extracurricularData.map((exp, index) => (
                <EducationCard
                  key={`extra-${index}`}
                  degree={exp.role}
                  institution={exp.institution}
                  year={exp.duration}
                  description={exp.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}