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
  useGSAP(() => {
    if (ref && typeof ref !== "function" && ref.current) {
      const section = ref.current;
      const heading = section.querySelector("h1");
      const profile = section.querySelector(".profile-container");
      const paragraph = section.querySelector("p");
      const button = section.querySelector(".resume-button");

      gsap.set([section, heading, profile, paragraph, button], { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        delay: isLoading ? 2.2 : 0,
        defaults: { duration: 0.8, ease: "power2.out" },
      });

      tl.to(section, { opacity: 1, y: 0, duration: 1 })
        .to(heading, { opacity: 1, y: 0 }, "-=0.6")
        .to(profile, { opacity: 1, y: 0 }, "-=0.6")
        .to(paragraph, { opacity: 1, y: 0 }, "-=0.6")
        .to(button, { opacity: 1, y: 0 }, "-=0.6");
    }
  }, [isLoading]);

  return (
      <section
        ref={ref}
        className="w-full min-h-screen flex flex-col justify-center items-center mt-10 sm:mt-0 pt-4 pb-8 px-4 sm:p-20 font-sans"
      >

      <div className="flex flex-col gap-8 max-w-4xl w-full">
        <h1
          className="text-5xl tracking-tight sm:text-6xl text-[#f2acb2] text-center mt-0"
          style={{ willChange: "opacity, transform" }}
        >
          &quot;about.me()&quot;
        </h1>

        <div
          className="profile-container flex flex-col lg:flex-row gap-8 items-center w-full"
          style={{ willChange: "opacity, transform" }}
        >
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
              <p className="text-base text-text">
                <span>&quot;Nur Athirah Binti Hilalluddin&quot;</span>
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold uppercase text-[#f2acb2]">E-Mail</p>
              <p className="text-base text-text">
                <a href="mailto:athirahhilalluddin@gmail.com" className="hover:underline">
                  <span>&quot;athirahhilalluddin@gmail.com&quot;</span>
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
                  <span>&quot;https://github.com/athirahHilal&quot;</span>
                </a>
              </p>
            </div>
          </div>

        </div>

        <p className="text-lg leading-relaxed text-text text-center" style={{ willChange: "opacity, transform" }}>
          print (
          <span>
            &quot;I’m a final-year Diploma in Computer Science student with a passion for tech and a drive to keep learning and growing. While I’m still building my experience, I’m a fast learner who enjoys taking on new challenges. I work well with others, love exchanging ideas, and believe in showing up with a positive attitude, staying honest, and always giving my best.&quot;
          </span>
          )
        </p>

        <a
          href="/CV_Athirah.pdf"
          download="CV_Athirah.pdf"
          className="resume-button flex items-center justify-center gap-2 mx-auto mt-4 px-6 py-3 bg-[#f2acb2] text-black font-semibold rounded-lg hover:bg-[#f2acb2]/80 transition-colors duration-300"
          style={{ willChange: "opacity, transform" }}
        >
          <FaDownload className="w-5 h-5" />
          &quot;Resume&quot;
        </a>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
