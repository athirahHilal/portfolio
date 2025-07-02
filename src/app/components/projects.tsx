"use client";
import { forwardRef, useState, useEffect, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

import portfolio1 from "../asset/image/p1.png";
import portfolio2 from "../asset/image/p1a.png";
import task1 from "../asset/image/p2.png";
import task2 from "../asset/image/p2a.png";
import ecommerce1 from "../asset/image/p3.png";
import ecommerce2 from "../asset/image/p3a.png";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndices, setImageIndices] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState<boolean[]>([]);

  const projects: Project[] = useMemo(() => [
    {
      title: "UPTM RoomEase Portal",
      description:
        "RoomEase is a mobile application developed using React Native for staff room management and access at UPTM. It features a role-based interface for admin, staff, and student access. Twilio is used for SMS notifications, SendGrid for email alerts, and Mapedin provides a 3D interactive map. Pocketbase serves as the real-time backend handling storage and user authentication.",
      technologies: ["React Native", "Pocketbase", "Twilio", "SendGrid", "Mapedin"],
      github: "https://github.com/athirahHilal/Room_Ease_Project",
      images: [portfolio1, portfolio2],
    },
    {
      title: "Bubble Blush",
      description:
        "Bubble Blush is a mobile e-commerce app built with React Native for Android and iOS platforms. It allows users to browse products, manage their cart, complete purchases, and review order history. The backend is powered by Pocketbase, enabling real-time data storage and session handling.",
      technologies: ["React Native", "Pocketbase"],
      github: "https://github.com/athirahHilal/BubbleBlush_project",
      images: [task1, task2],
    },
    {
      title: "TechNest",
      description:
        "TechNest is a responsive e-commerce website developed using PHP, HTML, CSS, and Bootstrap, designed to showcase and sell electronic gadgets. It supports admin and customer roles with dedicated access, offering product listings, shopping cart functionality, and a basic checkout flow. MySQL is used for data management.",
      technologies: ["PHP", "HTML", "CSS", "Bootstrap", "MySQL"],
      github: "https://github.com/athirahHilal/TechNest_Project",
      images: [ecommerce1, ecommerce2],
    },
    {
      title: "NichiPulse",
      description:
        "NichiPulse is a web-based system for managing industrial machines, built using React and Pocketbase. I contributed to frontend and backend development as part of a collaborative team. This project involved real-world system integration, debugging, and team-based version control practices.",
      technologies: ["React", "Pocketbase"],
      images: [blog1],
    },
  ], []);

  useEffect(() => {
    setImageIndices(projects.map(() => 0));
    setIsPaused(projects.map(() => false));
  }, [projects]);

  useEffect(() => {
    const intervals = projects.map((project, index) =>
      setInterval(() => {
        if (!isPaused[index]) {
          setImageIndices((prev) =>
            prev.map((val, i) => (i === index ? (val + 1) % project.images.length : val))
          );
        }
      }, 3000)
    );
    return () => intervals.forEach(clearInterval);
  }, [isPaused, projects]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handleImageDotClick = (projectIndex: number, imageIndex: number) => {
    setImageIndices((prev) =>
      prev.map((val, i) => (i === projectIndex ? imageIndex : val))
    );
  };

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
      className="w-full min-h-screen flex flex-col items-center px-4 md:px-8 pt-25 font-sans"
    >
      <h1 className="text-4xl sm:text-5xl tracking-tight text-[#f2acb2] text-center mb-10">
        projects()
      </h1>

      <div className="flex flex-col items-center justify-center w-full min-h-[700px]">
        <div className="relative w-full max-w-screen-lg">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className="min-w-full px-4 py-4 flex justify-center"
                  onMouseEnter={() =>
                    setIsPaused((prev) =>
                      prev.map((val, i) => (i === projectIndex ? true : val))
                    )
                  }
                  onMouseLeave={() =>
                    setIsPaused((prev) =>
                      prev.map((val, i) => (i === projectIndex ? false : val))
                    )
                  }
                >
                  <div className="relative w-full max-w-screen-md bg-background/50 border border-[#f2acb2]/30 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#f2acb2] transition-all duration-300">
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f2acb2] hover:text-[#ea5f9f] transition-colors duration-200 z-10 bg-background/50 p-2 rounded-full"
                      aria-label="Previous project"
                    >
                      <FaArrowLeft size={24} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f2acb2] hover:text-[#ea5f9f] transition-colors duration-200 z-10 bg-background/50 p-2 rounded-full"
                      aria-label="Next project"
                    >
                      <FaArrowRight size={24} />
                    </button>
                    <div className="relative w-full h-[400px] overflow-hidden">
                      {project.images.map((image, imageIndex) => (
                        <Image
                          key={imageIndex}
                          src={image}
                          alt={`${project.title} screenshot ${imageIndex + 1}`}
                          fill
                          className={`object-cover transition-opacity duration-500 ${
                            imageIndex === imageIndices[projectIndex]
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      ))}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                        {project.images.map((_, imageIndex) => (
                          <button
                            key={imageIndex}
                            onClick={() =>
                              handleImageDotClick(projectIndex, imageIndex)
                            }
                            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                              imageIndex === imageIndices[projectIndex]
                                ? "bg-[#f2acb2] scale-125"
                                : "bg-[#f2acb2]/30 hover:bg-[#f2acb2]/60"
                            }`}
                            aria-label={`View image ${imageIndex + 1} for ${project.title}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col gap-4">
                      <h2 className="text-2xl font-bold text-[#f2acb2]">{project.title}</h2>
                      <p className="text-xs text-text leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-sm text-text bg-[#f2acb2]/20 px-2 py-1 rounded font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-6 mt-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-text hover:text-[#ea5f9f] underline"
                          >
                            GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-text hover:text-[#ea5f9f] underline"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
export default Projects;