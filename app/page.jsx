"use client";
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Cylinder from "./Components/Cylinder";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import MouseFollower from "./Components/MouseFollower";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

const Page = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);
  return (
    <>
      <MouseFollower />
      <Navbar />
      <div ref={scrollRef} className="w-full  bg-[#000000] pt-20 ">
        <Home />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <Footer />
        {/* <div style={{ width: "100vw", height: "100vh" }}>
        <Cylinder />
        </div> */}
      </div>
    </>
  );
};

export default Page;
