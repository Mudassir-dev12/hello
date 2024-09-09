import React, { useEffect } from "react";
import Shery from "sheryjs";

const Skills = () => {
  useEffect(() => {
    Shery.imageMasker(".mask" /* Element to target.*/, {
      //Parameters are optional.
      mouseFollower: false,
      text: "Shery",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }, []);
  return (
    <div className="w-full min-h-[120vh] overflow-hidden bg-black">
      <div className="skills_head pt-[80px]">
        <div class="waviy flex  justify-center">
          <div className="space-x-2">
            <span style={{ "--i": 1 }}>S</span>
            <span style={{ "--i": 2 }}>K</span>
            <span style={{ "--i": 3 }}>i</span>
            <span style={{ "--i": 4 }}>l</span>
            <span style={{ "--i": 5 }}>l</span>
            <span style={{ "--i": 6 }}>s</span>
          </div>
          <img className="skill_icon pl-5 size-20" src="/icon.gif" />
        </div>
      </div>
      <div className="cards">
        <div className="cards-1 flex flex-col sm:flex-row items-center gap-10 relative sm:top-20 sm:left-36">
          <div className="card1 card_hover cursor-pointer  w-full sm:w-[20vw] mt-10 mx-4 rounded-2xl bg-[#E5E5E5]">
            <div className="text-4xl sm:text-6xl text-[#14213D] pl-4 sm:pl-10 pt-3 sm:pt-5">
              <h1>Html5</h1>
            </div>
            <div className="flex justify-center">
              <img className="w-16 sm:w-[10vw]" src="/html.png" alt="HTML5" />
            </div>
          </div>
          <div className="card2 card_hover cursor-pointer w-full mt-10 sm:w-[20vw] mx-4 rounded-2xl bg-[#E5E5E5]">
            <div className="text-4xl sm:text-6xl text-[#14213D] pl-4 sm:pl-10 pt-3 sm:pt-5">
              <h1>CSS3</h1>
            </div>
            <div className="flex justify-center">
              <img className="w-16 sm:w-[10vw]" src="/css.png" alt="HTML5" />
            </div>
          </div>
          <div className="card3 card_hover cursor-pointer mt-10 w-full sm:w-[20vw] mx-4 rounded-2xl bg-[#E5E5E5]">
            <div className="text-4xl sm:text-6xl text-[#14213D] pl-4 sm:pl-10 pt-3 sm:pt-5">
              <h1>JS</h1>
            </div>
            <div className="flex justify-center">
              <img className="w-16 sm:w-[10vw]" src="/JS.png" alt="HTML5" />
            </div>
          </div>
        </div>
        <br />
        <div className="cards-2 flex flex-col sm:flex-row items-center gap-10 relative sm:top-20 sm:left-36">
          <div className="card4 card_hover cursor-pointer w-full mt-10 sm:w-[20vw] mx-4 rounded-2xl bg-[#E5E5E5]">
            <div className="text-4xl sm:text-6xl text-[#14213D] pl-4 sm:pl-10 pt-3 sm:pt-5">
              <h1>Raect</h1>
            </div>
            <div className="flex justify-center">
              <img className="w-16 sm:w-[10vw]" src="/react.png" alt="HTML5" />
            </div>
          </div>
          <div className="card5 card_hover cursor-pointer w-full sm:w-[20vw] mt-10 mx-4 rounded-2xl bg-[#E5E5E5]">
            <div className="text-4xl sm:text-6xl text-[#14213D] pl-4 sm:pl-10 pt-3 sm:pt-5">
              <h1>GSAP</h1>
            </div>
            <div className="flex justify-center">
              <img
                className="w-16 rounded-xl sm:w-[10vw]"
                src="/gsap.png"
                alt="HTML5"
              />
            </div>
          </div>
          <div className="card6 card_hover cursor-pointer w-full sm:w-[20vw] mt-10 mx-4 rounded-2xl bg-[#E5E5E5]">
            <div className="text-3xl sm:text-5xl text-[#14213D]  sm:pl-10 pt-3 sm:pt-5">
              <h1>Tailwind</h1>
            </div>
            <div className="flex justify-center">
              <img className="w-16 sm:w-[10vw]" src="/tailwind.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
