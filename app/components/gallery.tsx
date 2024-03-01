'use client';

import React from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

import landscape from '../../public/landscape.jpg';
import buildings from '../../public/buildings.jpg';
import tree from '../../public/tree.jpg';

function ImageStyle(
    url: string,
    opacity: MotionValue<string> | string = '100%'
) {
    return {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: opacity,
    };
}

type OpacityAnimTypes = {
    ref: React.MutableRefObject<null>;
    opacity: MotionValue<string>;
};

function OpacityAnim(): OpacityAnimTypes {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.1], ['40%', '100%']);

    return { ref, opacity };
}

export default function ParallaxOneImg() {
    const { ref: ref1, opacity: opacity1 } = OpacityAnim();
    const { ref: ref3, opacity: opacity3 } = OpacityAnim();

    return (
        <section
            className='relative flex flex-wrap justify-evenly items-center mt-auto w-full h-150v bg-custom-black'
            id='portfolio'
        >
            <motion.div
                className='flex-1 min-w-[300px] h-1/3 min-[600px]:h-1/2 min-[900px]:h-full'
                ref={ref1}
                style={ImageStyle(landscape.src, opacity1)}
            ></motion.div>
            <motion.div
                className='flex-1 min-w-[300px] h-1/3 min-[600px]:h-1/2 min-[900px]:h-full'
                style={ImageStyle(buildings.src)}
            ></motion.div>
            <motion.div
                className='flex-1 min-w-[300px] h-1/3 min-[600px]:h-1/2 min-[900px]:h-full'
                style={ImageStyle(tree.src, opacity3)}
                ref={ref3}
            ></motion.div>
        </section>
    );
}
