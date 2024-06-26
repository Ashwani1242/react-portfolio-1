import React from 'react';
import About from "./components/about";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Cursor from './components/utils/cursor';

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

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

  const mouseVariants = {
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

  const staggerVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeLeftVariant = {
    initial: {
      opacity: 0,

      x: 60,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  }

  const fadeRightVariant = {
    pageStart: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  }

  const fadeUpVariant = {
    pageStart: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.2
      }
    }
  }

  const fadeDownVariant = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4
      }
    }
  }


  return (
    <div className="">
      
      <Cursor />

      <Navbar
        cursorHidden={cursorHidden}
        textLeave={textLeave}
        fadeLeftVariant={fadeLeftVariant}
      />

      <Intro
        cursorHidden={cursorHidden}
        tirtiaryTextEnter={tirtiaryTextEnter}
        secondaryTextEnter={secondaryTextEnter}
        primaryTextEnter={primaryTextEnter}
        textLeave={textLeave}
        fadeUpVariant={fadeUpVariant}
        fadeRightVariant={fadeRightVariant}
      />

      <About
        cursorHidden={cursorHidden}
        textLeave={textLeave}
        staggerVariant={staggerVariant}
        fadeUpVariant={fadeUpVariant}
        fadeDownVariant={fadeDownVariant}
        fadeLeftVariant={fadeLeftVariant}
        fadeRightVariant={fadeRightVariant}
      />

      <Projects
        cursorHidden={cursorHidden}
        textLeave={textLeave}
        fadeUpVariant={fadeUpVariant}
        fadeLeftVariant={fadeLeftVariant}
      />

      <Contact
        cursorHidden={cursorHidden}
        textLeave={textLeave}
        staggerVariant={staggerVariant}
        fadeUpVariant={fadeUpVariant}
        fadeLeftVariant={fadeLeftVariant}
      />


      {/* <motion.div
        className="mask flex justify-center items-center"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        variants={mouseVariants}
        animate={cursorVariant}
      /> */}
    </div>
  );
}

export default App;
