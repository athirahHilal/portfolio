"use client";
import { useRef, useState, useEffect } from "react";
import About from "./components/about";
import Skills from "./components/skills";
import Loader from "./components/loader";
import Header from "./components/header";
import Projects from "./components/projects";
import Education from "./components/education";
import WorkExperience from "./components/workExperience";
import Achievement from "./components/achievement";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const achievementRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-background">
      <Header
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        educationRef={educationRef}
        workRef={workRef}
        skillsRef={skillsRef}
        achievementRef={achievementRef}
      />
      <Loader ref={loaderRef} isLoading={isLoading} aboutRef={aboutRef} />
      <main className="flex flex-col w-full pt-16">
        <About ref={aboutRef} isLoading={isLoading} />
        <Projects ref={projectsRef} isLoading={isLoading} />
        <Education ref={educationRef} isLoading={isLoading} />
        <WorkExperience ref={workRef} isLoading={isLoading} />
        <Skills ref={skillsRef} isLoading={isLoading} />
        <Achievement ref={achievementRef} isLoading={isLoading} />
      </main>
    </div>
  );
}
