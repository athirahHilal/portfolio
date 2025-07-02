"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface HeaderProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  educationRef: React.RefObject<HTMLDivElement | null>;
  workRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  achievementRef: React.RefObject<HTMLDivElement | null>; 
}

export default function Header({
  aboutRef,
  projectsRef,
  educationRef,
  workRef,
  skillsRef,
  achievementRef, 
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md shadow-lg z-50 transition-all duration-300 font-sans border-b border-[#f2acb2]">
      <nav className="w-full mx-auto px-2 sm:px-4 lg:px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-3xl font-extrabold text-[#f2acb2] tracking-tight cursor-pointer hover:scale-105 transition-transform duration-200">
          Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          <li>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-text hover:text-[#ea5f9f] text-lg font-semibold transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea5f9f] group-hover:w-full transition-all duration-300" />
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-text hover:text-[#ea5f9f] text-lg font-semibold transition-colors duration-200 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea5f9f] group-hover:w-full transition-all duration-300" />
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(educationRef)}
              className="text-text hover:text-[#ea5f9f] text-lg font-semibold transition-colors duration-200 relative group"
            >
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea5f9f] group-hover:w-full transition-all duration-300" />
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(workRef)}
              className="text-text hover:text-[#ea5f9f] text-lg font-semibold transition-colors duration-200 relative group"
            >
              Work Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea5f9f] group-hover:w-full transition-all duration-300" />
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-text hover:text-[#ea5f9f] text-lg font-semibold transition-colors duration-200 relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea5f9f] group-hover:w-full transition-all duration-300" />
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(achievementRef)}
              className="text-text hover:text-[#ea5f9f] text-lg font-semibold transition-colors duration-200 relative group"
            >
              Achievements
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea5f9f] group-hover:w-full transition-all duration-300" />
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#ea5f9f] focus:outline-none hover:scale-110 transition-transform duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md shadow-xl flex flex-col items-center py-6 md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <li className="py-3">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-text hover:text-[#ea5f9f] text-xl font-semibold transition-colors duration-200"
            >
              About
            </button>
          </li>
          <li className="py-3">
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-text hover:text-[#ea5f9f] text-xl font-semibold transition-colors duration-200"
            >
              Skills
            </button>
          </li>
          <li className="py-3">
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-text hover:text-[#ea5f9f] text-xl font-semibold transition-colors duration-200"
            >
              Projects
            </button>
          </li>
          <li className="py-3">
            <button
              onClick={() => scrollToSection(educationRef)}
              className="text-text hover:text-[#ea5f9f] text-xl font-semibold transition-colors duration-200"
            >
              Education
            </button>
          </li>
          <li className="py-3">
            <button
              onClick={() => scrollToSection(workRef)}
              className="text-text hover:text-[#ea5f9f] text-xl font-semibold transition-colors duration-200"
            >
              Work Experience
            </button>
          </li>
          <li className="py-3">
            <button
              onClick={() => scrollToSection(achievementRef)}
              className="text-text hover:text-[#ea5f9f] text-xl font-semibold transition-colors duration-200"
            >
              Achievements
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
