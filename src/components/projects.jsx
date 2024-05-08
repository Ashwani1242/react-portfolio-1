
import { motion, useTransform, useScroll, delay } from "framer-motion";
import React, { useState, useRef } from 'react'
import ProjectsBG from './utils/projects_bg'
import ProjectCard from "./utils/project_card";

const Projects = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["54%", "-45%"]);

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

            <section ref={targetRef} className="relative h-[1000vh] sm:h-[600vh] bg-transparent">
                <div className="sticky top-0 h-screen bg-neutral-950 flex flex-col justify-around items-center">

                    <svg className="w-full absolute opacity h-full opacity-20" xmlns='http://www.w3.org/2000/svg'>
                        <filter id='noiseFilter'>
                            <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
                        </filter>

                        <rect width='100%' height='100%' filter='url(#noiseFilter)' />
                    </svg>

                    <div className="floralwhite w-screen md:px-20 px-10 py-10">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUpVariants}
                            className='font-carattere lg:text-[100px] md:text-[84px] text-[68px] leading-none pb-4'>
                            Projects
                        </motion.h1>
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeLeftVariants}
                            transition={{
                                duration: 0.3,
                                delay: 0.6
                            }}
                            className='lg:text-[50px] md:text-[40px] text-[30px] font-caratter'>
                            Some things I've made so far...
                        </motion.h1>
                    </div>
                    <motion.div style={{ x }} className="flex gap-4">
                        {cards.map((card) => {
                            return <ProjectCard card={card} key={card.id} />;
                        })}
                    </motion.div>
                </div>
            </section>

        </div>
    )
}

//       <Card card={card} key={card.id} />;

export default Projects

const cards = [
    {
        url: "/images/projects/1.png",
        title: "Conway's Game of Life",
        links: [
            "github link", 
            "playstore link",
            "web link",
            "itch link"
        ],
        icons: [
            "github", 
            "playstore",
            "web",
            "itch",
        ],
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
