import React, { useEffect } from "react";
import Shery from "sheryjs";

const Projects = () => {
  useEffect(() => {
    Shery.imageMasker(".pj_1", {
      mouseFollower: true,
      text: "FOOD_WEB",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }, []);
  useEffect(() => {
    Shery.imageMasker(".pj_2", {
      mouseFollower: true,
      text: "GSAP",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }, []);
  useEffect(() => {
    Shery.imageMasker(".pj_3", {
      mouseFollower: true,
      text: "Weather",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }, []);
  return (
    <div className="w-full min-h-screen overflow-hidden bg-black">
      <div className="w-full relative h-full">
        <div className="w-full flex justify-center absolute mt-20 project_head">
          <div className="project_head">
            <h2 className="text-4xl md:text-6xl text-white">Projects</h2>
            <h2 className="text-4xl md:text-6xl text-white">Projects</h2>
          </div>
        </div>
        <div className="pj_cards  w-full h-full relative md:flex block space-y-5 md:space-y-0 items-center gap-5 md:gap-10 px-4 md:px-[2vw] top-[20vw]">
          <a
            href="https://turbotastes.netlify.app/"
            target="_blank"
            className="block md:w-[30vw] w-full"
          >
            <div className="pj_1 w-full h-[40vw] md:h-[30vw] flex cursor-pointer">
              <video
                className="relative top-0 w-full h-full"
                src="/food-web.mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </a>
          <a
            href="https://gsap-anim-web.netlify.app/"
            target="_blank"
            className="block md:w-[30vw] w-full"
          >
            <div className="pj_2 w-full h-[40vw] md:h-[30vw] cursor-pointer">
              <video
                className="w-full h-full"
                src="Gsap2.mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </a>
          <a
            href="https://weather868.netlify.app/"
            target="_blank"
            className="block md:w-[30vw] w-full"
          >
            <div className="pj_3 w-full h-[40vw] md:h-[30vw] cursor-pointer">
              <video
                className="w-full h-full"
                src="Weather.mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
