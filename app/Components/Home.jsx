import React, { useEffect } from "react";
import Image from "next/image";
import SVG from "./svg.png";
import SVG2 from "./svg2.png";
import Shery from "sheryjs";

const Home = () => {
  useEffect(() => {
    Shery.textAnimate(".h-text", {
      style: 1,
      y: 10,
      delay: 0.2,
      duration: 4,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      multiplier: 0.5,
    });
    Shery.imageMasker(".SVG2" /* Element to target.*/, {
      //Parameters are optional.
      mouseFollower: true,
      text: "Mudassir",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    Shery.makeMagnet(".cv_btn" /* Element to target.*/, {
      //Parameters are optional.
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }, []);

  const handle_download = () => {
    const link = document.createElement("a");
    link.href = "/CV1.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden">
      <div className="section_1 flex">
        <div className="intro absolute top-[120px] left-5">
          <Image className="SVG1 relative bottom-14 left-4" src={SVG} />
          <div className="intro_text  absolute top-10 left-8 z-[1000] text-4xl pt-7">
            <div className=" flex">
              <div className="text h-text text-white pr-4">Hi I’m</div>
              <div className="h-text text-white">{" <"}</div>
              <div className="h-text text-black">Mudassir</div>
              <div className="h-text text-white">{" />"}</div>
            </div>
            <br />
            <div className="h-text text-white">
              <span>Frontend Web</span>
            </div>
            <br />
            <div className="h-text text-white">
              <span>Developer</span>
            </div>
          </div>
        </div>
        <div className="SVG absolute right-0 top-20">
          <Image className="SVG2" src={SVG2} />
        </div>
      </div>
      <button
        onClick={handle_download}
        className="cv_btn glow-on-hover flex items-center justify-center text-[3vw] w-[26vw] h-[6vw] text-white bg-[#14213D] p-5 rounded-full absolute top-[75%] left-1/2 -translate-x-[50%]"
      >
        <span>Download CV</span>
      </button>
    </div>
  );
};

export default Home;
