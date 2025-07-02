"use client";
import { forwardRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image, { StaticImageData } from "next/image";

// Import SPM result image
import spmResult from "../asset/image/result/spm.jpg";
// Import Diploma result images
import diplomaResult1 from "../asset/image/result/diploma/1.jpg";
import diplomaResult2 from "../asset/image/result/diploma/2.jpg";
import diplomaResult3 from "../asset/image/result/diploma/3.jpg";
import diplomaResult4 from "../asset/image/result/diploma/4.jpg";
import diplomaResult5 from "../asset/image/result/diploma/5.jpg";

interface Education {
  institution: string;
  qualification: string;
  duration: string;
  description: string;
  resultImages?: StaticImageData[];
}

interface EducationProps {
  isLoading: boolean;
}

const Education = forwardRef<HTMLDivElement, EducationProps>(({ isLoading }, ref) => {
  const [selectedResults, setSelectedResults] = useState<StaticImageData[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const education: Education[] = [
    {
      institution: "SMK Puncak Alam",
      qualification: "Sijil Pelajaran Malaysia (SPM)",
      duration: "2014 - 2019",
      description: "Successfully completed SPM with solid results across key subjects such as Bahasa Melayu, English, Pendidikan Islam, Seni, and additional academic areas.",
      resultImages: [spmResult],
    },
    {
      institution: "Universiti Poly-Tech Malaysia",
      qualification: "Diploma in Computer Science",
      duration: "2023 - Current",
      description: "Currently in my final year of study, consistently earning the Dean's List award every semester. I've gained hands-on experience in developing mobile applications, building websites, and understanding the fundamentals of networking and cybersecurity.",
      resultImages: [diplomaResult1, diplomaResult2, diplomaResult3, diplomaResult4, diplomaResult5],
    },
    {
      institution: "Coming Soon",
      qualification: "Bachelor's Degree",
      duration: "Future",
      description: "Planning to pursue further studies to deepen expertise in Computer Science and Artificial Intelligence.",
    },
  ];

  useGSAP(() => {
    gsap.from(".education-card", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  const handleViewResults = (images: StaticImageData[]) => {
    setSelectedResults(images);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedResults && currentImageIndex < selectedResults.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (selectedResults && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-black text-white flex flex-col items-center pt-16 sm:pt-24 px-4 sm:px-8 md:px-12 font-sans"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#f2acb2] text-center font-sans mt-16 sm:mt-20 mb-12">
        educations()
      </h1>

      <div className="relative w-full max-w-6xl before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-1 before:bg-[#f2acb2] hidden sm:block">
        {education.map((edu, index) => (
          <div
            key={index}
            className="relative mb-14 w-full flex flex-col sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[#f2acb2] z-10 border-4 border-black" />

            <div
              className={`education-card sm:w-[47%] ${index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"} bg-[#1c1c1c] p-4 sm:p-6 rounded-xl shadow-md flex flex-col items-center gap-2 text-center`}
            >
              <h2 className="text-lg sm:text-xl font-semibold text-[#f2acb2]">{edu.institution}</h2>
              <p className="text-sm sm:text-base text-gray-300">{edu.qualification}</p>
              <p className="text-sm italic text-gray-400">{edu.duration}</p>
              <p className="text-sm sm:text-base text-white">{edu.description}</p>
              {edu.resultImages && (
                <button
                  onClick={() => handleViewResults(edu.resultImages!)}
                  className="mt-2 px-4 py-2 bg-[#f2acb2] text-black rounded-md hover:bg-[#f2acb2]/80 transition"
                >
                  View Result
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="block sm:hidden w-full max-w-lg">
        {education.map((edu, index) => (
          <div
            key={index}
            className="education-card w-[80%] mx-auto bg-[#1c1c1c] p-4 rounded-xl shadow-md mb-8 text-center"
          >
            <h2 className="text-lg font-semibold text-[#f2acb2]">{edu.institution}</h2>
            <p className="text-sm text-gray-300">{edu.qualification}</p>
            <p className="text-sm italic text-gray-400">{edu.duration}</p>
            <p className="text-sm text-white">{edu.description}</p>
            {edu.resultImages && (
              <button
                onClick={() => handleViewResults(edu.resultImages!)}
                className="mt-2 px-4 py-2 bg-[#f2acb2] text-black rounded-md hover:bg-[#f2acb2]/80 transition"
              >
                View Result
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedResults && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative bg-[#1c1c1c] p-4 rounded-lg max-w-md w-full">
            <Image
              src={selectedResults[currentImageIndex]}
              alt="Result"
              className="w-full h-auto rounded-md"
              width={800}
              height={600}
              objectFit="contain"
            />
            {selectedResults.length > 1 && (
              <div className="flex justify-between mt-2">
                <button
                  onClick={handlePrevImage}
                  disabled={currentImageIndex === 0}
                  className={`px-4 py-2 bg-[#f2acb2] text-black rounded-md ${
                    currentImageIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#f2acb2]/80"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextImage}
                  disabled={currentImageIndex === selectedResults.length - 1}
                  className={`px-4 py-2 bg-[#f2acb2] text-black rounded-md ${
                    currentImageIndex === selectedResults.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#f2acb2]/80"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
            <button
              onClick={() => setSelectedResults(null)}
              className="absolute top-2 right-2 px-3 py-1 bg-[#f2acb2] text-black rounded-full text-sm hover:bg-[#f2acb2]/80"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
});

Education.displayName = "Education";

export default Education;