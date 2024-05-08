import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";


const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const ProjectCard = ({ card }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="space-y-4">

            <p className='lg:text-[32px] md:text-[40px] text-[30px] font-carattere floralwhite nderline'>{card.title}...</p>
            <motion.div
                key={card.id}
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }}
                className="relative h-96 w-72 sm:h-[480px] sm:w-[360px] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
                <div
                    style={{
                        backgroundImage: `url(${card.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
                </div>
            </motion.div>
            <div
                className=" justify-cente items-center text-nowrap text-xl font-bold flex space-x-4">
                {card.icons && card.icons.map((icon, index) => (
                    <button key={index} onClick={() => openLink(card.links[index])} className="flex items-center justify-center bg-white rounded-lg">
                        <img src={`/images/project_icons/${icon}.svg`} alt={icon} className="w-8 h-8" />
                    </button>
                ))}
            </div>
        </div>
    );
};

const openLink = (link) => {
    window.open(link, '_blank'); // Open link in a new tab
};

export default ProjectCard;