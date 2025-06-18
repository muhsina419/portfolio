import SkillsHeader from "../components/skills/SkillsHeader"
import SkillCategoryCard from "../components/skills/SkillCategoryCard"
import AdditionalSkills from "../components/skills/AdditionalSkills"


import {
  Globe,
  Server,
  Database,
  PenToolIcon as Tool,
  Smartphone,
  Palette,
} from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Globe className="w-6 h-6" />,
      description: "Languages I use to build, automate, and create across frontend, backend, and scripting environments.",
      skills: [
        { name: "Python", level: 95 },
        { name: "HTML/CSS", level: 85 },
        { name: "Java", level: 90 },
        { name: "C/C++", level: 95 },
        { name: "SQL", level: 100 },
        { name: "JavaScript", level: 70},
      ],
    },
    {
      title: "Frameworks & Development Tools",
      icon: <Server className="w-6 h-6" />,
      description: "Technologies and libraries I build with across different domains.",
      skills: [
        { name: "React", level: 80 },
        { name: "MongoDB", level: 90 },
        { name: "Django", level: 70 },
        { name: "PostgreSQL", level: 78 },
        { name: "TailwindCSS" , level:80},
        { name: "Twilio" , level: 80},
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Tool className="w-6 h-6" />,
      description: "Development workflow and deployment tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Vercel", level: 92 },
        { name: "AWS", level: 75 },
        { name: "CI/CD", level: 78 },
        { name: "Linux", level: 82 },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-6 h-6" />,
      description: "User interface and experience design",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Canva", level: 90 },
        { name: "UI Design", level: 82 },
        { name: "Prototyping", level: 80 },
        { name: "Framer Motion", level:70},
      ],
    },
  ]

  const additionalSkills = [
    // Professional Skills
  "Content Strategy",
  "Technical Writing",
  "Content creation",
  "Community Building",
  "Outreach Strategies",
  "Hackathon Operations",
  "AI & ML Implementation",

  // Project Management & Collaboration
  "Agile / Scrum",
  "Jira",
  "Trello",
  "Notion",
  "Slack",
  "Google Workspace",
  ]

  return (
    <div className="min-h-screen home-gradient-bg">
      <div className="container mx-auto px-4 py-16">
        <SkillsHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={index} category={category} />
          ))}
        </div>
        <AdditionalSkills skills={additionalSkills} />
      </div>
    </div>
  )
}
