import { motion } from "framer-motion";
import ContactForm from "./utils/contact_form";
import Marquee from "./utils/marquee";
import SocialLinks from "./utils/social_links";

const Contact = (props) => {

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
            <div className="floralwhit w-screen md:px-20 px-10 py-8">
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

            <ContactForm cursorHidden={props.cursorHidden} textLeave={props.textLeave} />

            <div className="flex flex-col mt-auto w-full justify-center items-center bg-black/50 pt-4 md:px-20 px-10">


                <div className="flex justify-center items-center w-full mb-4">
                    <div className="h-[1px] w-full bg-neutral-200/80" />
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
                    <div className="h-[1px] w-full bg-neutral-200/80" />
                </div>

                <SocialLinks fadeUpVariants={fadeUpVariants} cursorHidden={props.cursorHidden} textLeave={props.textLeave} />
                <div className="flex justify-between items-center w-full pt-4 container">
                    <Marquee />
                </div>
            </div>
        </div>
    );
}

export default Contact;
