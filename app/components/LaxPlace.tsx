'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ParallaxType = {
    background: string;
    name: string;
    id: string | undefined;
};

export default function ParallaxOneImg({
    background,
    name,
    id,
}: ParallaxType): JSX.Element {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '75%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const textOp = useTransform(scrollYProgress, [0.5, 0.9], ['50%', '0%']);

    return (
        <section ref={ref} className='relative w-full h-125v' id={id}>
            <motion.h2
                style={{ y: textY, opacity: textOp }}
                className='absolute z-10 cursor-none right-1 sm:right-3 bottom-1/3 text-7xl min-[430px]:text-8xl sm:text-10xl lg:text-11xl xl:text-12xl min-[1700px]:text-15xl font-bold text-custom-white'
            >
                {name}
            </motion.h2>
            <motion.div
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                    y: backgroundY,
                }}
                className='h-125v'
            ></motion.div>
        </section>
    );
}
