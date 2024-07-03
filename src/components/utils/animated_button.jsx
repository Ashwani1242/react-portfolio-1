import React, { useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedButton = () => {

    const [active, setActive] = useState(false);

  return (
    <motion.button 
    onClick = {() => setActive((pv) => !pv)}
    animate = {active ? "open" : "closed"}
    className='h-20 w-20 relative rounded-full bg-white/0 transition-colors hover:bg-white/20'>
        <motion.span 
        style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%"
        }} 
        variants = {{
            open: {
                rotate: "45deg",
                top: "50%"
            },
            closed: {
                rotate: "0deg"
            }
        }}
        // transition={{
        //     duration: 0.5,
        //     ease: easeInOut,
        // }}
        className='absolute h-1 w-10 bg-white'/>
        <motion.span 
        style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%"
        }}
        variants = {{
            open: {
                rotate: "-45deg",
                top: "50%"
            },
            closed: {
                rotate: "0deg"
            }
        }}
        className='absolute h-1 w-10 bg-white'/>
        <motion.span 
        style={{
            left: "calc(50% + 10px)",
            top: "65%",
            x: "-50%",
            y: "-50%"
        }} 
        variants = {{
            open: {
                rotate: "45deg",
                top: "50%",
                left: "50%"
            },
            closed: {
                rotate: "0deg"
            }
        }}
        className='absolute h-1 w-5 bg-white'/>
    </motion.button>
  )
}

export default AnimatedButton
