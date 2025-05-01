"use client";

import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase: any = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    //render once when component mounts
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <a
              className="image-wrapper"
              target="_blank"
              href="https://next-book-store-mocha.vercel.app/"
            >
              <img src="/images/project1.png" alt="Next Book Store" />
            </a>
            <div className="text-content">
              <h2>
                Create Books' themes, display them and browse other books
                through a clean minimalist App called Next Book Store
              </h2>
              <p className="text-white-50 md:text-xl">
                This project showcases the latest features of Next.js 15,
                including Next.js Form for seamless client-side form
                submissions, Server Component HMR Cache for faster development,
                and Partial Prerendering for performance optimization.
              </p>
            </div>
          </div>
          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <a
              href="https://house-marketplace-blond-tau.vercel.app/"
              target="_blank"
              className="project"
              ref={project2Ref}
            >
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="House Marketplace App" />
              </div>
              <h2>
                {" "}
                House Marketplace App- Find and list houses for sale or for rent{" "}
              </h2>
            </a>
            <a
              href="https://github.com/ShrutiSemwal/Online-Store"
              target="_blank"
              className="project"
              ref={project3Ref}
            >
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="Online Room Decor Store" />
              </div>
              <h2> Online Room Decor Store</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
