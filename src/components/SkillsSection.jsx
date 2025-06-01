import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaGithub,
  FaServer,
  FaPaintBrush,
  FaGoogleDrive,
  FaFileWord
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiFirebase,
  SiMysql,
  SiVscodium,
} from "react-icons/si";


const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: <FaHtml5 /> },
  { name: "JavaScript", level: 90, category: "frontend", icon: <FaJs /> },
  { name: "React", level: 90, category: "frontend", icon: <FaReact /> },
  { name: "TypeScript", level: 85, category: "frontend", icon: <SiTypescript /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss /> },
  { name: "Next.js", level: 80, category: "frontend", icon: <SiNextdotjs /> },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: <FaNodeJs /> },
  { name: "Express", level: 75, category: "backend", icon: <SiExpress /> },
  { name: "Firebase", level: 70, category: "backend", icon: <SiFirebase /> },
  { name: "MySQL", level: 70, category: "backend", icon: <SiMysql /> },
  { name: "Railway", level: 65, category: "backend", icon: <FaServer /> },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: <FaGithub /> },
  { name: "Docker", level: 70, category: "tools", icon: <FaDocker /> },
  { name: "Figma", level: 85, category: "tools", icon: <FaFigma /> },
  { name: "VS Code", level: 95, category: "tools", icon: <SiVscodium /> },
  { name: "Canva", level: 90, category: "tools", icon: <FaPaintBrush /> },
  { name: "Google Workspace", level: 80, category: "tools", icon: <FaGoogleDrive /> },
  { name: "Microsoft Office", level: 85, category: "tools", icon: <FaFileWord /> },
];


const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
                <span className="text-primary text-xl">{skill.icon}</span>
                {skill.name}
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
