import { motion } from "framer-motion";
import ContactForm from "./utils/contact_form";
import Marquee from "./utils/marquee";

const Contact = () => {

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
        <div className="min-h-screen justify-around items-center flex flex-col bg-neutral-90 relative">
            <img src="/images/test.jpg" alt="" className="-z-50 absolute object-cover w-full h-full overflow-auto opacity-80" />
            <svg className="w-full absolute h-full opacity-50 -z-50" xmlns='http://www.w3.org/2000/svg'>
                <filter id='noiseFilter'>
                    <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
                </filter>
                <rect width='100%' height='100%' filter='url(#noiseFilter)' />
            </svg>
            <div className="floralwhit w-screen md:px-20 px-10 py-10">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUpVariants}
                    className='font-carattere lg:text-[100px] md:text-[84px] text-[68px] leading-none pb-2'>
                    Contact
                </motion.h1>
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeLeftVariants}
                    transition={{
                        duration: 0.3,
                        delay: 0.6
                    }}
                    className='lg:text-[50px] md:text-[40px] text-[30px] font-semibold'>
                    Let's get in touch...
                </motion.h1>
            </div>

            <ContactForm />

            <div className="flex flex-col mt-auto w-full justify-center items-center bg-black/50 pb-12 pt-4 px-20">


                <div className="flex justify-between items-center w-full py-6 container">
                    <Marquee />
                    {/* <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUpVariants}
                        className='font-italiana lg:text-[60px] md:text-[56px] text-[48px] leading-none p-2 floralwhite'>
                        Ashwani Gupta
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUpVariants}
                        className='font-italiana lg:text-[60px] md:text-[56px] text-[48px] leading-none p-2 floralwhite'>
                        2024
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUpVariants}
                        className='font-italiana lg:text-[60px] md:text-[56px] text-[48px] leading-none p-2 floralwhite'>
                        Lucknow, India
                    </motion.div> */}
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="h-[1px] w-full bg-neutral-200/80 m-2" />
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUpVariants}
                        transition={{
                            duration: 0.3,
                            delay: 0.6
                        }}
                        className='font-carattere floralwhite lg:text-[30px] md:text-[28px] text-[24px] px-4'>
                        Social
                    </motion.h1>
                    <div className="h-[1px] w-full bg-neutral-200/80 m-2" />
                </div>
                <motion.div
                    variants={fadeUpVariants}
                    // onMouseEnter={props.cursorHidden}
                    // onMouseLeave={props.textLeave}
                    initial="initial"
                    animate="animate"
                    transition={{
                        duration: .4,
                        ease: "easeOut",
                        delay: 0.6,
                    }}
                    className='flex text-lg pt-4'>
                    <ul className='flex space-x-[1px] bg-black border border-black w-min font-semibold'>
                        <li className='bg-white cursor-pointer group relative py-2 px-4'>
                            <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> Intro </p>
                            <div className='absolute inset-0 bg-black w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
                        </li>
                        <li className='bg-white cursor-pointer group relative py-2 px-4'>
                            <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> About </p>
                            <div className='absolute inset-0 bg-black w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
                        </li>
                        <li className='bg-white cursor-pointer group relative py-2 px-4'>
                            <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> Projects </p>
                            <div className='absolute inset-0 bg-black w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
                        </li>
                        <li className='bg-white cursor-pointer group relative py-2 px-4'>
                            <p className='relative inset-0 flex items-center justify-center z-20 group-hover:text-white duration-500'> Contact </p>
                            <div className='absolute inset-0 bg-black w-0 flex items-center justify-center group-hover:w-full z-10 duration-500'> </div>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
