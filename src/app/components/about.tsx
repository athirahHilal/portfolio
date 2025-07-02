"use client";
import Image from "next/image";
import { forwardRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaDownload } from "react-icons/fa";
import imageIra from "../asset/image/imageIra.jpeg";

interface AboutProps {
  isLoading: boolean;
}

const About = forwardRef<HTMLDivElement, AboutProps>(({ isLoading }, ref) => {
  useGSAP(
    () => {
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
          ref.current.querySelector(".profile-container"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: isLoading ? 5.8 : 0.2,
          }
        );
        gsap.fromTo(
          ref.current.querySelector("p"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: isLoading ? 6 : 0.3,
          }
        );
        gsap.fromTo(
          ref.current.querySelector(".resume-button"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: isLoading ? 6.2 : 0.4,
          }
        );
      }
    },
    [isLoading]
  );

  return (
    <section
      ref={ref}
      className="w-full min-h-screen flex flex-col justify-center items-center p-8 sm:p-20 font-sans"
    >
      <div className="flex flex-col gap-8 max-w-4xl w-full">
        <h1 className="text-5xl tracking-tight sm:text-6xl text-[#f2acb2] text-center mt-8">
          about.me()
        </h1>
        <div className="profile-container flex flex-col lg:flex-row gap-8 items-center w-full">
          <Image
            src={imageIra}
            alt="Profile picture"
            width={400}
            height={400}
            priority
            className="rounded-full border-4 border-accent"
            style={{ objectFit: "cover", maxWidth: "100%", height: "auto" }}
          />
          <div className="flex flex-col justify-center gap-12 text-center lg:text-left lg:ml-20">
            <div>
              <p className="text-xl font-semibold uppercase text-[#f2acb2]">Full_Name</p>
              <p className="text-base text-text">"Nur Athirah Binti Hilalluddin"</p>
            </div>
            <div>
              <p className="text-xl font-semibold uppercase text-[#f2acb2]">E-Mail</p>
              <p className="text-base text-text">
                <a href="mailto:athirahhilalluddin@gmail.com" className="hover:underline">
                  "athirahhilalluddin@gmail.com"
                </a>
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold uppercase text-[#f2acb2]">GitHub</p>
              <p className="text-base text-text">
                <a
                  href="https://github.com/athirahHilal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  "https://github.com/athirahHilal"
                </a>
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg leading-relaxed text-text text-center">
          print ("I’m a final-year Diploma in Computer Science student with a passion for tech and a drive 
          to keep learning and growing. While I’m still building my experience, I’m a fast learner who enjoys 
          taking on new challenges. I work well with others, love exchanging ideas, and believe in showing up with a 
          positive attitude, staying honest, and always giving my best.")
        </p>
        <a
          href="/CV_Athirah.pdf"
          download="CV_Athirah.pdf"
          className="resume-button flex items-center justify-center gap-2 mx-auto mt-4 px-6 py-3 bg-[#f2acb2] text-black font-semibold rounded-lg hover:bg-[#f2acb2]/80 transition-colors duration-300"
        >
          <FaDownload className="w-5 h-5" />
          Resume
        </a>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;