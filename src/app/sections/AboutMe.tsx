"use client";

import TitleHeader from "../components/TitleHeader";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

const AboutMe = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".profile-section",
      {
        //Initial values
        y: 50,
        opacity: 0,
      },
      {
        // Final values
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#about-me",
          start: "top center",
        },
      }
    );
  });
  return (
    <section
      id="about-me"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="About me" sub="Get to know me" />

        <div className="mt-20 flex flex-col md:flex-row justify-between items-start gap-10">
          {/* LEFT: Text */}
          <div className="profile-section flex-1 flex flex-col gap-7">
            <p className="text-white-50 md:text-xl">
              I'm a Research Scholar at <b>DIT University</b>, Dehradun,
              specializing in Artificial Intelligence, Machine Learning, and
              Robotics. During my B.Tech at{" "}
              <b>Lovely Professional University</b>, Jalandhar, I also gained
              experience in Full Stack Web Development.
            </p>
            <p className="text-white-50 md:text-xl">
              Beyond the technical realm, I'm a nemophilist who loves spending
              time in nature. I enjoy reading, learning new things, clicking
              landscape photos, and editing them for Instagram.
            </p>
          </div>

          {/* RIGHT: Profile Picture */}
          <div className="profile-section flex-1 flex justify-center items-center">
            <img
              src="/images/profile.jpeg"
              alt="Shruti Semwal"
              className="rounded-2xl shadow-lg w-80 h-80 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
