"use client";

import { useEffect, useRef, useState } from "react";

const SnapScrollPage = ({ sections }: { sections: React.ReactNode[] }) => {
  // const sections = ["Section 1", "Section 2", "Section 3"];
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleDotClick = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Ensures the section aligns at the start (top) of the container
    });
  };

  return (
    <div className="snap-container">
      <div className="pagination-dots">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      {sections.map((section, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) sectionRefs.current[index] = el;
          }}
          className="snap-section"
        >
          {section}
        </div>
      ))}
      <style jsx>{`
        .snap-container {
          height: 100vh;
          scroll-snap-type: y mandatory;
          scroll-padding-top: 4rem;
          overflow-y: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth; /* Smooth scrolling to match snap behavior */
        }
        .snap-container::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }
        .snap-section {
          height: 100vh;
          scroll-snap-align: start;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          background-color: #f5f5f5;
        }
        .pagination-dots {
          position: fixed;
          top: 50%;
          right: 1rem;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .dot {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: #ccc;
          border: none;
          cursor: pointer;
        }
        .dot.active {
          background-color: #333;
        }
      `}</style>
    </div>
  );
};

export default SnapScrollPage;
