import React from 'react'
import { motion } from "framer-motion";

const ProjectsBG = () => {
    return (
        <div className='w-screen h-screen absolute flex items-center -z-20'>
            {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='absolute blur-2xl md:h-[1200px] md:w-[1200px] h-[800px] w-[800px] md:right-10'>
                <path fill="#f6c6b2" transform="translate(100 100)">
                    <animate attributeName='d'
                        dur="5s"
                        repeatCount="indefinite"
                        values="M31.2,-56.8C40,-49.1,46.1,-39.6,55.1,-29.9C64,-20.1,75.8,-10.1,78.8,1.7C81.8,13.5,76,27.1,66.8,36.3C57.5,45.5,44.8,50.5,33.1,51.1C21.4,51.6,10.7,47.8,-2.7,52.5C-16.2,57.3,-32.3,70.6,-38.9,67.1C-45.4,63.5,-42.4,43.1,-45.1,29.1C-47.8,15.1,-56.3,7.6,-58.7,-1.4C-61.2,-10.4,-57.6,-20.8,-53.6,-32.5C-49.5,-44.1,-44.9,-57,-35.9,-64.5C-26.9,-72.1,-13.5,-74.2,-1.1,-72.3C11.3,-70.4,22.5,-64.4,31.2,-56.8Z;
                        
                        M34.1,-58.9C47.4,-51.5,63.4,-48.7,65.2,-39.6C66.9,-30.6,54.3,-15.3,55.4,0.6C56.5,16.5,71.2,33,67.9,39.4C64.6,45.8,43.4,42.1,29.1,40.3C14.7,38.5,7.4,38.6,-0.4,39.3C-8.2,40,-16.3,41.2,-27.6,41.2C-38.9,41.3,-53.4,40.2,-61.5,33.2C-69.6,26.1,-71.5,13.1,-66.7,2.8C-61.9,-7.5,-50.5,-15.1,-44.4,-25.6C-38.3,-36.2,-37.4,-49.7,-30.9,-61C-24.4,-72.3,-12.2,-81.3,-0.9,-79.8C10.4,-78.3,20.9,-66.3,34.1,-58.9Z;

                        M33.7,-58.9C46.8,-50.9,62.6,-48.1,65.8,-39.1C68.9,-30.2,59.4,-15.1,52.5,-4C45.6,7.2,41.4,14.3,38.3,23.4C35.3,32.4,33.3,43.4,27.1,50.4C20.9,57.4,10.5,60.6,0.7,59.4C-9,58.1,-18.1,52.6,-24.2,45.5C-30.3,38.4,-33.5,29.8,-45,21.9C-56.5,14.1,-76.4,7.1,-80.8,-2.5C-85.2,-12.2,-74.2,-24.3,-62.3,-31.6C-50.5,-38.8,-37.8,-41.2,-27.3,-50.7C-16.8,-60.2,-8.4,-76.9,1,-78.6C10.3,-80.3,20.6,-67,33.7,-58.9Z;

                        M36.1,-58.7C48.2,-55.5,60.4,-48.7,66.4,-38.3C72.4,-27.9,72.2,-14,74.2,1.1C76.1,16.2,80.3,32.5,72.4,39.7C64.6,47,44.9,45.2,30.8,49.8C16.7,54.4,8.4,65.4,-3.5,71.4C-15.3,77.5,-30.6,78.5,-40.3,71.4C-50.1,64.3,-54.2,49,-56.5,35.7C-58.7,22.5,-59,11.2,-62.3,-1.9C-65.5,-15,-71.7,-30,-69.8,-43.8C-67.9,-57.6,-57.9,-70.3,-44.9,-73C-31.9,-75.6,-16,-68.3,-2,-64.8C12,-61.4,24,-61.9,36.1,-58.7Z;

                        M31.2,-56.8C40,-49.1,46.1,-39.6,55.1,-29.9C64,-20.1,75.8,-10.1,78.8,1.7C81.8,13.5,76,27.1,66.8,36.3C57.5,45.5,44.8,50.5,33.1,51.1C21.4,51.6,10.7,47.8,-2.7,52.5C-16.2,57.3,-32.3,70.6,-38.9,67.1C-45.4,63.5,-42.4,43.1,-45.1,29.1C-47.8,15.1,-56.3,7.6,-58.7,-1.4C-61.2,-10.4,-57.6,-20.8,-53.6,-32.5C-49.5,-44.1,-44.9,-57,-35.9,-64.5C-26.9,-72.1,-13.5,-74.2,-1.1,-72.3C11.3,-70.4,22.5,-64.4,31.2,-56.8Z;"
                    />
                </path>
            </svg> */}

            {/* <motion.svg
                initial={{
                    x: -650,
                    y: 450,
                }}
                animate={{
                    rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                    duration: 100,
                    ease: 'linear',
                    repeat: Infinity
                }}
                width="1348.5"
                height="1363.5"
                viewBox="0 0 899 909"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className='absolute -z-20 opacity-50 blur-sm'>
                <path d="M255.963 25.7032C275.946 12.4095 303.081 20.1486 313.045 41.9836L444.225 329.448C452.178 346.876 446.296 367.5 430.346 378.11L388.922 405.667C373.247 416.095 352.36 413.836 339.277 400.298L118.842 172.21C101.917 154.696 105.007 126.126 125.285 112.636L255.963 25.7032Z"
                    fill="#D9D9D9" />
                <path d="M25.6334 644.035C12.3397 624.052 20.0787 596.918 41.9138 586.954L329.378 455.774C346.806 447.821 367.43 453.703 378.04 469.653L405.597 511.077C416.025 526.752 413.766 547.638 400.229 560.722L172.14 781.156C154.626 798.082 126.056 794.992 112.566 774.714L25.6334 644.035Z"
                    fill="#D9D9D9" />
                <path d="M873.043 260.469C886.337 280.452 878.598 307.586 856.763 317.551L569.298 448.731C551.87 456.684 531.247 450.801 520.636 434.851L493.08 393.428C482.652 377.753 484.911 356.866 498.448 343.783L726.537 123.348C744.05 106.423 772.621 109.512 786.111 129.791L873.043 260.469Z"
                    fill="#D9D9D9" />
                <path d="M647.702 882.689C627.719 895.983 600.584 888.244 590.62 866.408L459.44 578.944C451.487 561.516 457.37 540.892 473.319 530.282L514.743 502.725C530.418 492.297 551.305 494.556 564.388 508.094L784.823 736.183C801.748 753.696 798.658 782.266 778.38 795.756L647.702 882.689Z"
                    fill="#D9D9D9" />
                <circle cx="436.505" cy="457.505" r="147.5" transform="rotate(-33.6335 436.505 457.505)"
                    fill="#B8B8B8" />
            </motion.svg> */}

            <svg className="w-full absolute opacity h-full opacity-20 " xmlns='http://www.w3.org/2000/svg'>
                <filter id='noiseFilter'>
                    <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
                </filter>

                <rect width='100%' height='100%' filter='url(#noiseFilter)' />
            </svg>
        </div>
    )
}

export default ProjectsBG
