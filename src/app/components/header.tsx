"use client";
import { useState } from "react";
import {
  FaBars,
  FaUser,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaStar,
  FaTools,
  FaTimes,
} from "react-icons/fa";

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
    <header
      className="fixed top-0 left-0 w-full bg-black shadow-lg z-50 transition-all duration-300 font-sans border-b border-[#f2acb2]"
    >
      <nav className="w-full mx-auto px-2 sm:px-4 lg:px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold text-[#f2acb2] tracking-tight cursor-pointer hover:scale-105 transition-transform duration-200">
          Portfolio
        </div>

        <ul className="hidden md:flex space-x-10">
          <li><NavButton label="About" refTarget={aboutRef} /></li>
          <li><NavButton label="Projects" refTarget={projectsRef} /></li>
          <li><NavButton label="Education" refTarget={educationRef} /></li>
          <li><NavButton label="Work Experience" refTarget={workRef} /></li>
          <li><NavButton label="Skills" refTarget={skillsRef} /></li>
          <li><NavButton label="Achievements" refTarget={achievementRef} /></li>
        </ul>

        <button
          className="md:hidden text-[#ea5f9f] focus:outline-none hover:scale-110 transition-transform duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <FaBars size={24} />
        </button>
      </nav>

      {/* Mobile Sidebar Menu with gap on LEFT side */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex justify-end"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="h-full bg-black p-6 flex flex-col items-start animate-slide-in-right relative"
            onClick={(e) => e.stopPropagation()}
            style={{ width: "calc(100vw - 80px)" }} // leaves 80px gap on left
          >
            {/* Close X button top-right */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 text-[#f2acb2] hover:text-[#ea5f9f] transition-colors duration-200 text-2xl"
            >
              <FaTimes />
            </button>

            {/* Removed "Portfolio" text here */}

            <ul className="w-full mt-12">
              <MobileNavItem
                label="About"
                icon={<FaUser />}
                refTarget={aboutRef}
                noTopBorder
              />
              <MobileNavItem
                label="Skills"
                icon={<FaTools />}
                refTarget={skillsRef}
              />
              <MobileNavItem
                label="Projects"
                icon={<FaCode />}
                refTarget={projectsRef}
              />
              <MobileNavItem
                label="Education"
                icon={<FaGraduationCap />}
                refTarget={educationRef}
              />
              <MobileNavItem
                label="Work Experience"
                icon={<FaBriefcase />}
                refTarget={workRef}
              />
              <MobileNavItem
                label="Achievements"
                icon={<FaStar />}
                refTarget={achievementRef}
                last
                noBottomBorder
              />
            </ul>
          </div>
        </div>
      )}
    </header>
  );

  function NavButton({
    label,
    refTarget,
  }: {
    label: string;
    refTarget: React.RefObject<HTMLDivElement | null>;
  }) {
    return (
      <button
        onClick={() => scrollToSection(refTarget)}
        className="text-text hover:text-[#ea5f9f] text-lg font-semibold transition-colors duration-200 relative group"
      >
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea5f9f] group-hover:w-full transition-all duration-300" />
      </button>
    );
  }

  function MobileNavItem({
    label,
    icon,
    refTarget,
    last = false,
    noTopBorder = false,
    noBottomBorder = false,
  }: {
    label: string;
    icon: React.ReactNode;
    refTarget: React.RefObject<HTMLDivElement | null>;
    last?: boolean;
    noTopBorder?: boolean;
    noBottomBorder?: boolean;
  }) {
    return (
      <li
        className={`
          py-4
          w-full
          text-left
          flex
          border-t
          ${noTopBorder ? "border-t-0" : "border-[#f2acb2]"}
          ${noBottomBorder ? "border-b-0" : last ? "border-b border-[#f2acb2]" : ""}
        `}
      >
        <button
          onClick={() => scrollToSection(refTarget)}
          className="text-white hover:text-[#ea5f9f] text-xl font-semibold w-full text-left flex items-center gap-3"
        >
          {icon} {label}
        </button>
      </li>
    );
  }
}
