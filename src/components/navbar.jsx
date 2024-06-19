import React from 'react'

import { motion } from "framer-motion";

import resume from './files/resume.pdf'

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
      <ul className='md:flex md:space-x-[1px] md:space-y-0 space-y-[1px] bg-black border border-black w-min font-semibold'>
        <li className='bg-white cursor-pointer group relative py-2 px-4'>
          <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> Intro </p>
          <div className='absolute inset-0 bg-black h-full w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
        </li>
        <li className='bg-white cursor-pointer group relative py-2 px-4'>
          <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> About </p>
          <div className='absolute inset-0 bg-black h-full w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
        </li>
        <li className='bg-white cursor-pointer group relative py-2 px-4'>
          <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> Projects </p>
          <div className='absolute inset-0 bg-black h-full w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
        </li>
        <li className='bg-white cursor-pointer group relative py-2 px-4'>
          <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> Contact </p>
          <div className='absolute inset-0 bg-black h-full w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
        </li>
        <li className='bg-white cursor-pointer group relative py-2 px-4'>
          <a href={resume} download='resume' className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'>
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 pl-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>
          <div className='absolute inset-0 bg-black h-full w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
        </li>
      </ul>
    </motion.div>
  )
}

export default Navbar
