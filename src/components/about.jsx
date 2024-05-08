import { motion } from 'framer-motion'
import React, { useState } from 'react'

const About = () => {

    const [items] = useState([
        'Flutter',
        'Dart',
        'Firebase',
        'HTML',
        'CSS',
        'Javascript',
        'Tailwind CSS',
        'React JS',
        'Framer Motion',
        'Unity',
        'C Sharp',
        'Unreal Engine',
        'Flutter Flame',
        'Figma',
        'Blender',
        'Python',
        'C++',
        'Golang',
        'Git',
        'Github',
    ]);

    const skillVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

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
        <div
            className='about-background floralwhite md:p-28 p-10'>
            <div>
                <div>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUpVariants}
                        className='font-carattere text-cente lg:text-[100px] md:text-[84px] sm:text-[68px] text-[52px] leading-none pb-10'>
                        Hello!
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeDownVariants}
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
                        variants={fadeLeftVariants}
                        transition={{
                            duration: 0.3,
                            delay: 0.6
                        }}
                        className='text-right lg:text-[50px] md:text-[40px] sm:text-[30px] text-[20px] font-carattere'>
                        - Ashwani Gupta
                    </motion.h1>
                </div>
                <div>
                    <div
                        className='border-y border-neutral-500 py-16 sm:px-12 px-2'>
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeRightVariants}
                            className='font-carattere lg:text-[68px] text-[52px] leading-none text-wrap py-12'>
                            Skills ~
                        </motion.h1>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={skillVariants}
                            className='flex flex-wrap justify-center gap-3'>
                            {items.map((item, index) => (
                                <motion.p
                                    key={index}
                                    variants={skillVariants}
                                    className='bg-floralwhit border-white border text-blac px-4 py-2 rounded-lg md:text-lg text-sm font-semibold items-center justify-center flex'>
                                    <img src={`/images/skill_icons/${item}.svg`} alt="Icon" className="w-6 h-6 mr-3" />
                                    {item}
                                </motion.p>
                            ))}
                        </motion.div>
                    </div>
                    <div className='border-bk border-neutral-500 lg:flex lg:flex-row pt-10 justify-between'>
                        <div className='py-12 sm:px-12 px-6'>
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeRightVariants}
                                className='font-carattere lg:text-[68px] text-[52px] leading-none text-wrap pb-10'>
                                Education ~
                            </motion.h1>
                            <motion.ol
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeRightVariants}
                                className='gap-4 list-disc text-[24px]'>
                                <motion.li
                                    variants={fadeRightVariants}>
                                    <p className='font-semibold text-lg'>B.Tech - Information Technology</p>
                                    <p className='font-semibold text-3xl'>SR Institute Of Management And Technology</p>
                                    <p className='text-lg'>2020 - Present</p>
                                </motion.li>
                                <motion.li
                                    variants={fadeRightVariants}>
                                    <p className='font-semibold text-lg'>Intermediate</p>
                                    <p className='font-semibold text-3xl'>Pioneer Montessori Inter College</p>
                                    <p className='text-lg'>2020</p>
                                </motion.li>
                                <motion.li
                                    variants={fadeRightVariants}>
                                    <p className='font-semibold text-lg'>High School</p>
                                    <p className='font-semibold text-3xl'>Pioneer Montessori Inter College</p>
                                    <p className='text-lg'>2018</p>
                                </motion.li>
                            </motion.ol>
                        </div>
                        <div className='w-full h-[1px] bg-neutral-500 lg:hidden block'/>
                        <div className='py-12 sm:px-12 px-6'>
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeLeftVariants}
                                className='font-carattere lg:text-[68px] text-[52px] leading-none text-wrap pb-10'>
                                Certifications ~
                            </motion.h1>
                            <motion.ol
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeLeftVariants}
                                className='list-disc text-[24px]'>
                                <motion.li
                                    variants={fadeLeftVariants}>
                                    <p className='font-semibold text-lg'>YBI Foundation</p>
                                    <p className='font-semibold text-3xl'>Python Programming with Data Structures and Algorithms</p>
                                    <p className='text-lg'>ID - 14364000007314356</p>
                                </motion.li>
                                <motion.li
                                    variants={fadeLeftVariants}>
                                    <p className='font-semibold text-lg'>Udemy</p>
                                    <p className='font-semibold text-3xl'>Unity Game Development</p>
                                    <p className='text-lg'>ID - UC-ef981dc0-84ef-4312-86bb-c0d60aa79342</p>
                                </motion.li>
                                <motion.li
                                    variants={fadeLeftVariants}>
                                    <p className='font-semibold text-lg'>GUVI Geek Networks, IITM Research Park</p>
                                    <p className='font-semibold text-3xl'>Python</p>
                                    <p className='text-lg'>ID - 46jM99L67R26r6D116</p>
                                </motion.li>
                                <motion.li
                                    variants={fadeLeftVariants}>
                                    <p className='font-semibold text-lg'>GUVI Geek Networks, IITM Research Park</p>
                                    <p className='font-semibold text-3xl'>Game Development Using PyGame</p>
                                    <p className='text-lg'>ID - e9169z1f8l6Ovn63j2</p>
                                </motion.li>
                            </motion.ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
