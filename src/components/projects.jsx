
import { motion, useTransform, useScroll, delay } from "framer-motion";
import React, { useState, useRef } from 'react'
import ProjectsBG from './utils/projects_bg'

const Projects = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["46%", "-46%"]);

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
                delay: 0.2,
            },
        }
    }

    return (
        <div className=' flex p-1 justify-center bg-floralwhite items-center'>


            <section ref={targetRef} className="relative h-[1000vh] sm:h-[600vh] bg-neutral-950">

                <div className="sticky top-0 h-screen flex flex-col justify-around md:justify-between items-center">
                    <ProjectsBG />
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUpVariants}
                        className='md:m-auto p-10 font-carattere text-center floralwhite lg:text-[100px] md:text-[84px] sm:text-[68px] text-[52px] leading-none'>
                        Projects
                    </motion.h1>
                    <div className="flex items-center overflow-hidden justify-center flex-1">
                        <motion.div style={{ x }} className="flex gap-4">
                            <div className="h-[450px] w-[400px] border border-white flex flex-col gap-4 justify-center items-center">
                                <motion.button
                                    whileHover={{
                                        scale: 1.1
                                    }}
                                    className='border-2 group border-white rounded-full w-[30px] h-[60px] flex justify-center items-end transition-all duration-300'>
                                    <div className='h-[24px] w-[24px] bg-white rounded-full animate-bounce group-hover:animate-ping' />
                                </motion.button>
                                <motion.h1
                                    className='text-right lg:text-[30px] floralwhite md:text-[27px] sm:text-[24px] text-[20px] font-carattere'>
                                    Keep Scrolling
                                </motion.h1>
                            </div>

                            {cards.map((card) => {
                                return <Card card={card} key={card.id} />;
                            })}

                            <div className="h-[450px] w-[400px] border border-white flex flex-col gap-4 justify-center items-center">
                                <motion.button
                                    whileHover={{
                                        scale: 1.1
                                    }}
                                    className='border-2 group border-white rounded-full w-[30px] h-[60px] flex justify-center items-end transition-all duration-300'>
                                    <div className='h-[24px] w-[24px] bg-white rounded-full animate-bounce group-hover:animate-ping' />
                                </motion.button>
                                <motion.h1
                                    className='text-right lg:text-[30px] floralwhite md:text-[27px] sm:text-[24px] text-[20px] font-carattere'>
                                    More Projects
                                </motion.h1>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[700px] w-[700px] overflow-hidden bg-neutral-200">
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

const cards = [
    {
        url: "/imgs/abstract/1.jpg",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/imgs/abstract/2.jpg",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/imgs/abstract/3.jpg",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/imgs/abstract/4.jpg",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/imgs/abstract/5.jpg",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/imgs/abstract/6.jpg",
        title: "Title 6",
        id: 6,
    },
    {
        url: "/imgs/abstract/7.jpg",
        title: "Title 7",
        id: 7,
    },
    {
        url: "/imgs/abstract/7.jpg",
        title: "Title 8",
        id: 8,
    },
    {
        url: "/imgs/abstract/7.jpg",
        title: "Title 9",
        id: 9,
    },
    {
        url: "/imgs/abstract/7.jpg",
        title: "Title 10",
        id: 10,
    },
];



///dbfiuciuekjhssiulfhiu
