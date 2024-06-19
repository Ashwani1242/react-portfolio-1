import React from 'react'

import { motion } from "framer-motion";

const Navbar = (props) => {

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

  const fadeRightVariants = {
    initial: {
      opacity: 0,

      x: -60,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  }

  return (
      <motion.div
        variants={fadeLeftVariants}
        onMouseEnter={props.cursorHidden}
        onMouseLeave={props.textLeave}
        initial="initial"
        animate="animate"
        transition={{
          duration: .4,
          ease: "easeOut",
          delay: 0.6,
        }}
        className='flex md:p-2 top-2 right-2 text-lg fixed z-50'>
        <ul className='md:flex md:space-x-[1px] md:space-y-0 space-y-[1px] bg-black border border-black w-min'>
          <li className='bg-white cursor-pointer group relative py-2 px-4'>
            <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> Intro </p>
            <div className='absolute inset-0 font-semibold bg-black h-full w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
          </li>
          <li className='bg-white cursor-pointer group relative py-2 px-4'>
            <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> About </p>
            <div className='absolute inset-0 font-semibold bg-black h-full w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
          </li>
          <li className='bg-white cursor-pointer group relative py-2 px-4'>
            <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> Projects </p>
            <div className='absolute inset-0 font-semibold bg-black h-full w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
          </li>
          <li className='bg-white cursor-pointer group relative py-2 px-4'>
            <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> Contact </p>
            <div className='absolute inset-0 font-semibold bg-black h-full w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
          </li>
          <li className='bg-white cursor-pointer group relative py-2 px-4'>
            <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> Resume </p>
            <div className='absolute inset-0 font-semibold bg-black h-full w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
          </li>
        </ul>
      </motion.div>
  )
}

export default Navbar
