"use client";
import React, { forwardRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  FaTrophy,
  FaAward,
  FaMedal,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import Image from "next/image";
import achievementImage from "../asset/image/achievement.png";
import deanImage from "../asset/image/dean.jpeg";
import type { StaticImageData } from "next/image";

interface Achievement {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: StaticImageData;
}

interface AchievementProps {
  isLoading: boolean;
}

const Achievement = forwardRef<HTMLDivElement, AchievementProps>(
  ({ isLoading }, ref) => {
    const achievements: Achievement[] = [
      {
        title: "2nd Place Final Year Project",
        description:
          "Recognized as the 2nd best project among all final year submissions.",
        icon: <FaAward className="text-2xl sm:text-3xl text-[#f2acb2]" />,
        image: achievementImage,
      },
      {
        title: "Dean's List Every Semester",
        description: "Consistently achieved top academic performance each semester.",
        icon: <FaMedal className="text-2xl sm:text-3xl text-[#f2acb2]" />,
        image: deanImage,
      },
      {
        title: "Coming Soon",
        description: "Stay tuned for more accomplishments.",
        icon: <FaTrophy className="text-2xl sm:text-3xl text-[#f2acb2]" />,
      },
    ];

    useGSAP(() => {
      if (ref && typeof ref !== "function" && ref.current) {
        gsap.from(ref.current.querySelectorAll(".achievement-card"), {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          delay: isLoading ? 6.4 : 0.4,
        });
      }
    }, [isLoading]);

    return (
      <section
        ref={ref}
        className="w-full min-h-screen bg-black text-white flex flex-col items-center pt-20 sm:pt-28 px-12 sm:px-12 font-sans"
      >
        <h1 className="text-4xl sm:text-5xl tracking-tight text-[#f2acb2] text-center mb-12">
          achievement()
        </h1>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 justify-items-center mb-16 max-w-7xl w-full px-0.1 sm:px-3">
            {achievements.map((item, index) => (
                <div
                key={index}
                className="achievement-card relative bg-[#1c1c1c] rounded-xl shadow-md overflow-hidden group border border-[#f2acb2]/30 w-full h-[460px]"
                >
                {item.image && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 z-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}

                <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center p-6 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[#f2acb2]">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="w-full mt-auto border-t border-[#f2acb2]/30 py-8 text-center text-sm sm:text-base text-[#f2acb2]">
          <div className="mb-4 flex justify-center gap-6 text-xl sm:text-2xl">
            <a
              href="https://www.linkedin.com/in/nur-athirah-992a6536a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:text-white transition" />
            </a>
            <a
              href="https://my.jobstreet.com/profile/nur-athirah-J4wPMFDQxz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JobStreet"
            >
              <BsBriefcaseFill className="hover:text-white transition" />
            </a>
            <a
              href="https://github.com/athirahHilal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="hover:text-white transition" />
            </a>
          </div>
            <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} Athirah's Portfolio. All rights reserved.
            </p>
        </footer>
      </section>
    );
  }
);

Achievement.displayName = "Achievement";
export default Achievement;