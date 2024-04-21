import { useInView, motion, useAnimation, useTransform, useScroll } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

const About = () => {

    return (
        <div
            className='bg-[#202020] floralwhite md:p-28 p-10'>
            <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                        opacity: 1,
                        y: 0,
                    }
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.4
                }}
                className='font-italiana text-center lg:text-[100px] md:text-[84px] sm:text-[68px] text-[52px] leading-none text-wrap pb-10'>
                Hello There!
            </motion.h1>
            <motion.p
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, y: -30 },
                    visible: {
                        opacity: 1,
                        y: 0,
                    }
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.6
                }}
                className='font-italiana text-justify md:text-2xl sm:text-xl'>
                I'm Ashwani Gupta, a software developer and a game developer also studying UI/UX. I am proficient in multi-platform app dvelopment with Flutter, Golang TUI, frontend dvelopment with React, and C# in context of Game Development with Unity. This is the portfolio to showcase my technical capabilities and design skills.
                <br />
                <br />
                Welcome to my portfolio - hope you enjoy it! ;)
                <br />
                <br />
            </motion.p>
            <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, x: 60 },
                    visible: {
                        opacity: 1,
                        x: 0,
                    }
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.6
                }}
                className='text-right lg:text-[50px] md:text-[40px] sm:text-[30px] text-[20px] font-carattere'>
                - Ashwani Gupta
            </motion.h1>
        </div>
    )
}

export default About
