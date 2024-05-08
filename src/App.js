import About from "./components/about";
import Intro from "./components/intro";
import Navbar from "./components/navbar";

import React from 'react'
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Projects from "./components/projects";

function App() {

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 100, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.pageX - 50);
      cursorY.set(e.pageY - 50);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const variants = {
    default: {
      mixBlendMode: "exclusion"
    },
    primaryText: {
      scale: 3,
      backgroundColor: "White",
      mixBlendMode: "exclusion"
    },
    secondaryText: {
      scale: 2,
      backgroundColor: "White",
      mixBlendMode: "exclusion"
    },
    tirtiaryText: {
      scale: 1.5,
      backgroundColor: "purple",
      mixBlendMode: "exclusion"
    },
    hidden: {
      scale: 0,
      backgroundColor: "black",
      mixBlendMode: "normal"
    }
  }

  const [cursorVariant, setCursorVariant] = useState("default")
  const primaryTextEnter = () => setCursorVariant("primaryText")
  const secondaryTextEnter = () => setCursorVariant("secondaryText")
  const tirtiaryTextEnter = () => setCursorVariant("tirtiaryText")
  const textLeave = () => setCursorVariant("default")
  const cursorHidden = () => setCursorVariant("hidden")

  return (
    <div className="">
      {/* <Navbar /> */}
      <Intro cursorHidden={cursorHidden} tirtiaryTextEnter={tirtiaryTextEnter} secondaryTextEnter={secondaryTextEnter} primaryTextEnter={primaryTextEnter} textLeave={textLeave} />
      <About />
      <Projects/>

      <motion.div
        className="mask flex justify-center items-center"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}

        variants={variants}
        animate={cursorVariant}
      >
        {/* <div className="h-[8px] w-[8px] bg-red-400 rotate-12 rounded-full" /> */}
      </motion.div>
    </div>
  );
}

export default App;
