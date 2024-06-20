import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {

    const marqueeElements = [
        'Ashwani Gupta',
        '2024',
        'Lucknow, India',
        '2024',
    ]

    const time = 30

    return (
        <div className='container mx-auto overflow-x-hidden h-20 overflow-y-hidden'>
            <div className="flex my-gradient">
                <motion.div
                    initial={{
                        x: 0
                    }}
                    animate={{
                        x: '-100%'
                    }}
                    transition={{
                        duration: time,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    className="marquee flex flex-shrink-0">
                    {marqueeElements.map((String, index) => {
                        return <div className='font-italiana lg:text-[60px] md:text-[56px] text-[48px] leading-none pr-72 text-nowrap floralwhite' key={index}> {String} </div>
                    })}
                </motion.div>
                <motion.div
                    initial={{
                        x: 0
                    }}
                    animate={{
                        x: '-100%'
                    }}
                    transition={{
                        duration: time,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    className="marquee flex flex-shrink-0">
                    {marqueeElements.map((String, index) => {
                        return <div className='font-italiana lg:text-[60px] md:text-[56px] text-[48px] leading-none pr-72 text-nowrap floralwhite' key={index}> {String} </div>
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default Marquee
