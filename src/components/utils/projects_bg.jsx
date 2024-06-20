import React from 'react'

const ProjectsBG = () => {
    return (
        <div className='w-screen h-screen absolute flex items-center -z-20'>
            <svg className="w-full absolute opacity h-full opacity-10 " xmlns='http://www.w3.org/2000/svg'>
                <filter id='noiseFilter'>
                    <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
                </filter>
                <rect width='100%' height='100%' filter='url(#noiseFilter)' />
            </svg>
        </div>
    )
}

export default ProjectsBG
