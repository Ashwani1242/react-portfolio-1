import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../navbar';

const ResponsiveNavbar = (props) => {

    const [active, setActive] = useState(false);

    return (
        <div>
            <div className='fixed flex flex-col items-end top-2 right-2 z-50 md:hidden'>
                <motion.button
                    onClick={() => setActive((pv) => !pv)}
                    animate={active ? "open" : "closed"}
                    className='h-12 w-12 relative transition-colors bg-black border-b-'>
                    <motion.span
                        style={{
                            left: "50%",
                            top: "35%",
                            x: "-50%",
                            y: "-50%"
                        }}
                        variants={{
                            open: {
                                rotate: "45deg",
                                top: "50%"
                            },
                            closed: {
                                rotate: "0deg"
                            }
                        }}
                        className='absolute h-[2px] w-6 bg-white' />
                    <motion.span
                        style={{
                            left: "50%",
                            top: "50%",
                            x: "-50%",
                            y: "-50%"
                        }}
                        variants={{
                            open: {
                                rotate: "-45deg",
                                top: "50%"
                            },
                            closed: {
                                rotate: "0deg"
                            }
                        }}
                        className='absolute h-[2px] w-6 bg-white' />
                    <motion.span
                        style={{
                            left: "calc(50% + 6px)",
                            top: "65%",
                            x: "-50%",
                            y: "-50%"
                        }}
                        variants={{
                            open: {
                                rotate: "45deg",
                                top: "50%",
                                left: "50%"
                            },
                            closed: {
                                rotate: "0deg"
                            }
                        }}
                        className='absolute h-[2px] w-3 bg-white' />
                </motion.button>

                <AnimatePresence>
                    {active && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="mt-2" >
                            <Navbar
                                cursorHidden={props.cursorHidden}
                                cursorDefault={props.cursorDefault}
                                fadeLeftVariant={props.fadeLeftVariant}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className='fixed top-2 right-2 z-50 md:block hidden'>
                <Navbar
                    cursorHidden={props.cursorHidden}
                    cursorDefault={props.cursorDefault}
                    fadeLeftVariant={props.fadeLeftVariant}
                />
            </div>
        </div>
    )
}

export default ResponsiveNavbar
