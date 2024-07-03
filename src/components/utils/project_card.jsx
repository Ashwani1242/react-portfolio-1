import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";


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
            <div
                key={card.id}
                className="relative h-96 w-72 sm:h-[480px] sm:w-[360px] overflow-hidden bg-neutral-200" >
                <div
                    style={{
                        backgroundImage: `url(${card.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-300 hover:scale-110" >
                    <div className="absolute inset-0 z-10 place-content-end">
                        <p className="sm:text-[30px] text-[22px] font-cormorant_upright font-semibold floralwhite bg-gradient-to-br from-white/10 to-white/0 p-8 flex items-center justify-center backdrop-blur-lg">
                            {card.title}
                        </p>
                    </div>
                </div>

            </div>
            <div
                className="text-nowrap text-xl font-bold flex space-x-4">
                {card.icons && card.icons.map((icon, index) => (
                    <button key={index} onClick={() => openLink(card.links[index])} className="flex items-center justify-center bg-white hover:scale-110 transition-all duration-300">
                        <img src={`/images/project_icons/${icon}.svg`} alt={icon} className="w-8 h-8" />
                    </button>
                ))}
            </div>
        </div>
    );
};

const openLink = (link) => {
    window.open(link, '_blank');
};

export default ProjectCard;