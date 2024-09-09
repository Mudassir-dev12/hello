import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverText, setIsOverText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if the mouse is over a text element
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor && elementUnderCursor.textContent.trim()) {
        setIsOverText(true);
      } else {
        setIsOverText(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={`mouse-follower  ${isOverText ? 'mix-blend' : ''}`}
      animate={{
        x: position.x - 10, // Adjust these values to center the follower
        y: position.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    ></motion.div>
  );
};

export default MouseFollower;
