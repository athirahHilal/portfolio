"use client";
import { forwardRef, useState, useEffect } from "react";
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

  const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website showcasing my skills and projects, built with Next.js and styled with Tailwind CSS.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP"],
      github: "https://github.com/athirahHilal/portfolio",
      demo: "https://athirahhilal.vercel.app",
      images: [portfolio1, portfolio2],
    },
    {
      title: "Task Manager App",
      description: "A web app for managing tasks with CRUD functionality, user authentication, and a clean UI.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/athirahHilal/task-manager",
      demo: "https://task-manager-athirah.web.app",
      images: [task1, task2],
    },
    {
      title: "E-Commerce Store",
      description: "A full-stack e-commerce platform with product listings, cart, and payment integration.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/athirahHilal/ecommerce",
      images: [ecommerce1, ecommerce2],
    },
    {
      title: "Blog Platform",
      description: "A simple blog system with markdown support, dark mode toggle, and smooth animations.",
      technologies: ["Next.js", "MDX", "Tailwind CSS"],
      github: "https://github.com/athirahHilal/blog-platform",
      demo: "https://athirah-blog.vercel.app",
      images: [blog1],
    },
  ];

  useEffect(() => {
    setImageIndices(projects.map(() => 0));
    setIsPaused(projects.map(() => false));
  }, [projects.length]);

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

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
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
                  <div className="w-full max-w-screen-md bg-background/50 border border-[#f2acb2]/30 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#f2acb2] transition-all duration-300">
                    {/* Fixed image container */}
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
                    </div>

                    {/* Image dots */}
                    <div className="flex justify-center gap-2 mt-2">
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

                    {/* Text content */}
                    <div className="p-6 flex flex-col gap-4">
                      <h2 className="text-2xl font-bold text-[#f2acb2]">{project.title}</h2>
                      <p className="text-base text-text leading-relaxed">
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

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 max-w-full px-4">
            <button
              onClick={handlePrev}
              className="text-[#f2acb2] hover:text-[#ea5f9f] transition-colors duration-200"
              aria-label="Previous project"
            >
              <FaArrowLeft size={24} />
            </button>
            <div className="flex justify-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#f2acb2] scale-125"
                      : "bg-[#f2acb2]/30 hover:bg-[#f2acb2]/60"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="text-[#f2acb2] hover:text-[#ea5f9f] transition-colors duration-200"
              aria-label="Next project"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
export default Projects;