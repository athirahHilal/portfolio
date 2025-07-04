"use client";
import { forwardRef } from "react";
import { useGSAP } from "@gsap/react";
import { BiTestTube } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";
import { HiOutlineChat } from "react-icons/hi";
import { PiUsersThree } from "react-icons/pi";

import gsap from "gsap";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaServer,
  FaCloud,
  FaGitAlt,
  FaCode,
  FaCheckCircle,
  FaBug,
} from "react-icons/fa";
import { DiJavascript1, DiJava } from "react-icons/di";
import {
  SiTypescript,
  SiPhp,
  SiCplusplus,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { BsDatabase } from "react-icons/bs";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillsProps {
  isLoading: boolean;
}

const Skills = forwardRef<HTMLDivElement, SkillsProps>(({ isLoading }, ref) => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "CSS", icon: <FaCss3Alt className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "JavaScript", icon: <DiJavascript1 className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", icon: <SiPhp className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "SQL", icon: <BsDatabase className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "Pocketbase", icon: <BsDatabase className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "XAMPP", icon: <FaServer className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "RESTful APIs", icon: <FaCloud className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <FaReact className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "React Native", icon: <FaReact className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
      ],
    },
    {
      title: "Dev Tools",
      skills: [
        { name: "VS Code", icon: <FaCode className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "GitHub", icon: <FaGithub className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Usability Testing", icon: <FaCheckCircle className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "Debugging", icon: <FaBug className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "Testing", icon: <BiTestTube className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "Problem Solving", icon: <GiBrain className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "Communication", icon: <HiOutlineChat className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "Team Collaboration", icon: <PiUsersThree className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <DiJava className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
        { name: "C++", icon: <SiCplusplus className="w-6 h-6 text-[#f2acb2] group-hover:text-black transition-colors duration-300" /> },
      ],
    },
  ];

  useGSAP(() => {
    if (ref && typeof ref !== "function" && ref.current) {
      gsap.fromTo(
        ref.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: isLoading ? 5.4 : 0,
        }
      );
      gsap.fromTo(
        ref.current.querySelector("h1"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: isLoading ? 5.6 : 0.1,
        }
      );
      gsap.fromTo(
        ref.current.querySelectorAll(".category-container"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: isLoading ? 5.8 : 0.2,
          stagger: 0.1,
        }
      );
    }
  }, [isLoading]);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen flex flex-col items-center pt-24 font-sans"
    >
      <h1 className="text-4xl sm:text-5xl tracking-tight text-[#f2acb2] text-center font-sans mt-10 mb-12">
        skills()
      </h1>

      <div className="flex flex-col items-center justify-center flex-grow w-full px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="category-container bg-background/50 border border-[#f2acb2]/30 rounded-lg p-6 hover:shadow-lg hover:border-[#f2acb2] transition-all duration-300"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#f2acb2] text-center font-sans mb-4">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-card group flex items-center gap-2 p-2 bg-[#f2acb2]/10 rounded-lg hover:bg-[#f2acb2] transition-all duration-300"
                  >
                    <div className="flex justify-center">{skill.icon}</div>
                    <p className="text-xs sm:text-sm font-medium text-[#f2acb2] group-hover:text-black transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
export default Skills;
