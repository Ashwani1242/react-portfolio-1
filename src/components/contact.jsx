import { motion } from "framer-motion";
import ContactForm from "./utils/contact_form";

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
        <div className="min-h-screen justify-center items-center flex-col bg-neutral-90">
            <div className="floralwhit w-screen md:px-20 px-10 py-10">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUpVariants}
                    className='font-carattere lg:text-[100px] md:text-[84px] text-[68px] leading-none pb-4'>
                    Contact
                </motion.h1>
                {/* <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeLeftVariants}
                            transition={{
                                duration: 0.3,
                                delay: 0.6
                            }}
                            className='lg:text-[50px] md:text-[40px] text-[30px] font-semibold'>
                            Looks like you've reached the end...
                </motion.h1> */}
            </div>
            <ContactForm />
        </div>

    );
}

export default Contact;


// h-[400px] fle text-center justify-center items-center text-5xl