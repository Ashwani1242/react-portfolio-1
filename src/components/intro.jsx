import React from 'react'

const Intro = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen max-h-[1080px]'>
            <div className='flex flex-col justify-center items-center absolute'>
                <div className='flex justify-end bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600'>
                    <span className='font-italiana lg:text-[200px] md:text-[150px] sm:text-[100px] text-[100px] leading-none text-wrap '> portfolio </span>
                    <span className='lg:text-[40px] md:text-[30px] sm:text-[20px] text-[14px] absolute text-black'>2024</span>
                </div>
                <span className='lg:text-[50px] md:text-[40px] sm:text-[30px] text-[20px] text-black font-carattere'>Software Developer</span>
            </div>
            <div className='flex justify-between items-end md:px-28 px-10 pb-24 leading-none md:text-3xl sm:text-2xl w-full h-full max-h-[1080px]'>
                {/* <span>Software  Developer <br /> Portfolio</span> */}
                <div className='flex flex-col text-righ'>
                    <span className=''>Ashwani Gupta</span>
                    <span className='underline underline-offset-4 cursor-pointer hover:animate-pulse'>ashwanigupta1242@gmail.com</span>
                    <div className='py-2'>
                    <a href='https://www.linkedin.com/in/ashwani-gupta-802a001b8/' target='_blank' className='underline underline-offset-4 cursor-pointer hover:animate-pulse'>linkedin</a>
                    <a href='https://github.com/Ashwani1242' target='_blank' className='underline underline-offset-4 cursor-pointer hover:animate-pulse md:pl-4 pl-2'>github</a>
                    <a href='https://play.google.com/store/apps/dev?id=8102082075523997692&pli=1' target='_blank' className='underline underline-offset-4 cursor-pointer hover:animate-pulse md:pl-4 pl-2'>playstore</a>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Intro
