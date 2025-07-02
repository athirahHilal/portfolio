"use client";
import { forwardRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string;
}

interface WorkExperienceProps {
  isLoading: boolean;
}

const WorkExperience = forwardRef<HTMLDivElement, WorkExperienceProps>(({ isLoading }, ref) => {
  const workExperience: WorkExperience[] = [
    {
      title: "FullStack React Native Developer",
      company: "Nichipulse",
      date: "Jan 2025 - Current",
      description:
        "Assisted in developing and testing backend features for a factory log-tracking system. Collaborated with a team to implement practical solutions based on real client requirements. Conducted system testing to ensure reliability and usability across key functions.",
    },
    {
      title: "Upcoming Internship",
      company: "Waiting for Offer",
      date: "4 August - 7 November 2025",
      description: "Planning to begin internship placement to gain further hands-on experience in the tech industry.",
    },
  ];

  useGSAP(() => {
    gsap.from(".timeline-entry", {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: isLoading ? 5.4 : 0,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, [isLoading]);

  const renderDescription = (description: string) => {
    const points = description
      .split(".")
      .map((point) => point.trim())
      .filter((point) => point.length > 0);

    return (
      <ul className="mt-2 text-white text-sm list-disc list-outside pl-5 space-y-1">
        {points.map((point, index) => (
          <li key={index} className="text-left">{point}</li>
        ))}
      </ul>
    );
  };

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-black text-white flex flex-col items-center pt-16 sm:pt-24 px-4 sm:px-8 md:px-12 font-sans"
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#f2acb2] text-center mt-16 sm:mt-20 mb-12">
        workExperience()
      </h1>

      <div className="relative max-w-6xl w-full sm:before:absolute sm:before:top-0 sm:before:left-1/2 sm:before:-translate-x-1/2 sm:before:h-full sm:before:w-1 sm:before:bg-[#f2acb2]">
        {workExperience.map((work, index) => (
          <div
            key={index}
            className="timeline-entry mb-14 relative w-full flex flex-col sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[#f2acb2] z-10 border-4 border-black" />

            <div
              className={`sm:w-[47%] ${index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"} bg-[#1c1c1c] p-4 sm:p-6 rounded-xl shadow-md`}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#f2acb2]">
                {work.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">{work.company}</p>
              <p className="text-sm italic text-gray-400">{work.date}</p>
              {renderDescription(work.description)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

WorkExperience.displayName = "WorkExperience";
export default WorkExperience;
