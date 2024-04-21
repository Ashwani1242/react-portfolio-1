import React from 'react'

import { motion } from "framer-motion";

const Navbar = () => {

  const fadeLeftVariants = {
    initial: {
        opacity: 0,

        x: 60,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
}

  return (
    <motion.div 
    variants={fadeLeftVariants}
    initial="initial"
    animate="animate"
    transition={{
        duration: .4,
        ease: "easeOut",
        delay: 0.6,
    }} 
    className='flex md:p-2 top-2 right-2 text-lg fixed z-50'>
      <ul className='md:flex md:space-x-[1px] md:space-y-0 space-y-[1px] bg-black border border-black w-min'>
        <li className='py-2 px-4 bg-white cursor-pointer'>Intro</li>
        <li className='py-2 px-4 bg-white cursor-pointer'>About</li>
        <li className='py-2 px-4 bg-white cursor-pointer'>Projects</li>
        <li className='py-2 px-4 bg-white cursor-pointer'>Contact</li>
      </ul>
    </motion.div>
  )
}

export default Navbar
