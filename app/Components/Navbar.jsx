import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { LuAlignJustify } from "react-icons/lu";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Shery from "sheryjs";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const tooglebtn = () => {
    setisMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    
    Shery.makeMagnet(".nav_ele" /* Element to target.*/, {
      //Parameters are optional.
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  },[])
  useEffect(() => {
    let navfunc = () => {
      gsap.fromTo(
        ".nav",
        { y: -100, opacity: 0 }, // Starting position and opacity
        { y: 0, opacity: 1, duration: 2.5, ease: "power3.out" }
      );
    };
    navfunc();
  },[]);
  return (
    <div className="nav  w-[100vw] fixed top-0 z-[10000] h-[80px] ">
      <div className="elements w-full h-full  flex items-center gap-72  ml-3">
        <div className="ele-1 cursor-pointer text-white text-4xl">
          <span className="tag text-[#FCA311]">{"<"}</span>
          <span className="my_name">Mudassir</span>
          <span className="tag text-[#FCA311]">{" />"}</span>
        </div>
        <div className="ele-2 cursor-pointer text-[#FCA311]  text-3xl  md:flex   hidden items-center gap-32 ">
          <span className="nav_ele">Home</span>
          <span className="nav_ele">Skills</span>
          <span className="nav_ele">Project</span>
        </div>
        <button
          onClick={tooglebtn}
          className="md:hidden text-3xl fixed right-5 text-[#FCA311]"
        >
          <LuAlignJustify />
        </button>
        {/* for Mobile screen  */}
        <div
          className={`md:hidden w-full h-screen z-[20000]  flex  fixed top-0 left-0  transition-opacity duration-300 bg-black ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            className="text-4xl text-white  fixed top-4 right-4"
            onClick={tooglebtn}
          >
            <RxCross2 />
          </button>
          <div className="text-[#FCA311] w-full h-full flex items-center justify-center ">
            <div className="text-6xl space-y-5">
              <h1>Home</h1>
              <h1>Skills</h1>
              <h1>Project</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
