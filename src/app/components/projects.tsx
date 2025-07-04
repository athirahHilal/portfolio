"use client";
import { forwardRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin();
import gsap from "gsap";
import Image, { StaticImageData } from "next/image";

import portfolio from "../asset/image/portfolio.png";
import portfolio1 from "../asset/image/p1.png";
import task1 from "../asset/image/p2.png";
import ecommerce1 from "../asset/image/p3.png";
import blog1 from "../asset/image/p4.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  images: (string | StaticImageData)[];
}

interface ProjectsProps {
  isLoading: boolean;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(({ isLoading }, ref) => {
  const projects: Project[] = useMemo(() => [
    {
      title: "UPTM RoomEase Portal",
      description:
        "RoomEase is a mobile application developed using React Native for staff room management and access at UPTM. It features a role-based interface for admin, staff, and student access. Twilio is used for SMS notifications, SendGrid for email alerts, and Mapedin provides a 3D interactive map. Pocketbase serves as the real-time backend handling storage and user authentication.",
      technologies: ["React Native", "Pocketbase", "Twilio", "SendGrid", "Mapedin", "Javascript"],
      github: "https://github.com/athirahHilal/Room_Ease_Project",
      images: [portfolio1],
    },
    {
      title: "Bubble Blush",
      description:
        "Bubble Blush is a mobile e-commerce app built with React Native for Android and iOS platforms. It allows users to browse products, manage their cart, complete purchases, and review order history. The backend is powered by Pocketbase, enabling real-time data storage and session handling.",
      technologies: ["React Native", "Pocketbase", "Javascript"],
      github: "https://github.com/athirahHilal/BubbleBlush_project",
      images: [task1],
    },
    {
      title: "TechNest",
      description:
        "TechNest is a responsive e-commerce website developed using PHP, HTML, CSS, and Bootstrap, designed to showcase and sell electronic gadgets. It supports admin and customer roles with dedicated access, offering product listings, shopping cart functionality, and a basic checkout flow. MySQL is used for data management.",
      technologies: ["PHP", "HTML", "CSS", "Bootstrap", "MySQL", "Xampp"],
      github: "https://github.com/athirahHilal/TechNest_Project",
      images: [ecommerce1],
    },
    {
      title: "NichiPulse",
      description:
        "NichiPulse is a web-based system for managing industrial machines, built using React and Pocketbase. I contributed to frontend and backend development as part of a collaborative team. This project involved real-world system integration, debugging, and team-based version control practices.",
      technologies: ["React", "Pocketbase", "Javascript"],
      images: [blog1],
    },
    {
      title: "My Portfolio Website",
      description:
        "This is my personal portfolio built using Next.js and Tailwind CSS, featuring sections like About, Projects, Skills, Education, and Work Experience. Smooth animations powered by GSAP.",
      technologies: ["Next.js", "Tailwind CSS", "GSAP", "Typescript"],
      github: "https://github.com/athirahHilal/Portfolio",
      demo: "https://portfolio-8tg4.vercel.app/",
      images: [portfolio],
    },
  ], []);

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
    }
  }, [isLoading]);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen flex flex-col items-center px-4 md:px-8 pt-24 font-sans"
    >
      <h1 className="text-4xl sm:text-5xl tracking-tight text-[#f2acb2] text-center mb-10">
        projects()
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-screen-xl">
        {projects.map((project, index) => (
          <div key={index} className="relative group w-full">
            <div className="relative w-full border-4 border-[#f2acb2] rounded-lg overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.title}
                width={800}
                height={600}
                layout="responsive"
                objectFit="contain"
                className="transition-opacity duration-300 group-hover:opacity-0"
              />
              <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-2 z-10">
                <h2 className="text-lg font-semibold px-2">{project.title}</h2>
              </div>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-background/95 backdrop-blur-md rounded-lg border-4 border-[#f2acb2] flex flex-col">
              <h2 className="text-2xl font-bold text-[#f2acb2] px-4 pt-5 text-center">
                {project.title}
              </h2>
              <div className="flex-grow flex flex-col justify-start items-start px-6 pt-4 text-left">
                <p className="text-sm text-text leading-relaxed mb-6 text-justify">
                  {project.description}
                </p>
                <div className="mt-auto w-full">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm text-text bg-[#f2acb2]/20 px-3 py-1 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text hover:text-[#ea5f9f] underline"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text hover:text-[#ea5f9f] underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                  <div className="h-2"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
export default Projects;
