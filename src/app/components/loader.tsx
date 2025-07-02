"use client";
import { forwardRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface LoaderProps {
  isLoading: boolean;
  aboutRef?: React.RefObject<HTMLDivElement | null>;
}

const Loader = forwardRef<HTMLDivElement, LoaderProps>(({ isLoading, aboutRef }, ref) => {
  useGSAP(
    () => {
      if (ref && typeof ref !== "function" && ref.current) {
        const heart = ref.current.querySelector(".loader-heart");
        const text = ref.current.querySelector(".loader-text");
        gsap.to(heart, {
          scale: 1.3,
          y: -10,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(text, {
          y: 8,
          duration: 0.7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        if (!isLoading) {
          gsap.to(ref.current, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
              if (ref.current) {
                ref.current.style.display = "none";
              }
              // Scroll to the About section
              if (aboutRef && aboutRef.current) {
                aboutRef.current.scrollIntoView({ behavior: "smooth" });
              } else {
                // Fallback to scroll to top
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            },
          });
        }
      }
    },
    [isLoading, aboutRef]
  );

  return (
        <div
        ref={ref}
        className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50 font-sans"
        >
      <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="loader-heart"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="#FAA4BD"
        />
      </svg>
      <p className="loader-text text-xl font-semibold text-foreground mt-4">
        Loading Athirah's Resume!
      </p>
    </div>
  );
});

Loader.displayName = "Loader";

export default Loader;