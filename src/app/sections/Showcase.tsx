"use client";
import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
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
      { opacity: 1, duration: 1.5 },
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
        },
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
              href="https://github.com/ShrutiSemwal/MTech.-Dissertation-UNet-with-Attention-Mechanism"
            >
              <img
                src="/images/project1.png"
                alt="UNet with Attention-DL Model"
              />
            </a>
            <div className="text-content">
              <h2>
                Optimizing Green Building Implementation via Deep
                Learning-Powered Segmentation Techniques
              </h2>
              <p className="text-white-50 md:text-xl">
                Designed a U-Net model, integrating Spatial Multiplicative Cross
                Attention Mechanism for facade segmentation, reaching 87% mean
                IoU and 93% F1-Score.
              </p>
            </div>
          </div>
          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <a
              href="https://safewalk-eydmparjpfpwyvzkq2vru4.streamlit.app/"
              target="_blank"
              className="project"
              ref={project2Ref}
            >
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/project2.png"
                  alt="SafeWalk | Pedestrian Infrastructure Safety "
                />
              </div>
              <h2>
                {" "}
                A computer vision pipeline built using YOLOv8 and OpenCV for
                pedestrian sidewalk safety analysis and obstacle detection.{" "}
              </h2>
            </a>

            <a
              href="https://next-book-store-mocha.vercel.app/"
              target="_blank"
              className="project"
              ref={project3Ref}
            >
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project3.png" alt="Next Book Store" />
              </div>
              <h2>
                Create Books&apos; themes, display them and browse other books
                through a clean minimalist App called Next Book Store.
              </h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
