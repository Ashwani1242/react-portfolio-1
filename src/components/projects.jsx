import { motion } from 'framer-motion'
import React, { useState } from 'react'
import IntroBG from './utils/intro_bg'
import ProjectsBG from './utils/projects_bg'

const Projects = () => {

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.2
            }
        }
    }

    const fadeDownVariants = {
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

    const fadeRightVariants = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.3,
                duration: 0.5,
            },
        }
    }

    const fadeLeftVariants = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.3,
                duration: 0.5,
            },
        }
    }

    return (
        <div className='md:p-28 p-10 flex justify-center items-center'>
            <ProjectsBG />
            <div>
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUpVariants}
                    className=' font-carattere text-center lg:text-[100px] md:text-[84px] sm:text-[68px] text-[52px] leading-none pb-10'>
                    Projects
                </motion.h1>
            </div>

        </div>
    )
}

export default Projects
