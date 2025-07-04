"use client";
import { forwardRef, useMemo, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin();
import Image, { StaticImageData } from "next/image";
import { FaArrowUp } from "react-icons/fa";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const projects: Project[] = useMemo(
    () => [
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
    ],
    []
  );

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
        {projects.map((project, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="relative w-full border-4 border-[#f2acb2] rounded-lg overflow-hidden group transition-all duration-300"
            >
              {/* Image View */}
              <div
                className="relative w-full h-[auto] min-h-0 aspect-video bg-white"
                onClick={() => {
                  if (isMobile) {
                    setOpenIndex(isOpen ? null : index);
                  }
                }}
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className="!m-0 !p-0 block"
                />
              </div>

              {/* Desktop Content on Hover */}
              {!isMobile && (
                <div className="absolute inset-0 w-full h-full bg-background/95 backdrop-blur-md text-text p-4 flex flex-col min-h-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <h2 className="text-2xl font-bold text-[#f2acb2] text-center">{project.title}</h2>
                  <p className="text-sm leading-relaxed mt-4 text-justify flex-grow">{project.description}</p>

                  <div className="mt-auto mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm bg-[#f2acb2]/20 px-3 py-1 rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 mt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-[#ea5f9f] underline"
                        >
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-[#ea5f9f] underline"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Content Below */}
              {isMobile && isOpen && (
                <div className="w-full bg-background/95 backdrop-blur-md text-text p-4 flex flex-col border-t border-[#f2acb2]">
                  <h2 className="text-2xl font-bold text-[#f2acb2] text-center">{project.title}</h2>
                  <p className="text-sm leading-relaxed mt-4 text-justify">{project.description}</p>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm bg-[#f2acb2]/20 px-3 py-1 rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 mt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-[#ea5f9f] underline"
                        >
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-[#ea5f9f] underline"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <button
                    className="mt-6 w-full bg-[#f2acb2] text-black py-2 flex items-center justify-center"
                    onClick={() => setOpenIndex(null)}
                  >
                    <FaArrowUp className="text-lg" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
export default Projects;