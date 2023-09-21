import React, { useEffect } from 'react';
import { motion,useAnimation } from 'framer-motion';

const FloatingImg = ({ imageSrc }) => {
    const floatControls = useAnimation();

    useEffect(() => {
        floatControls.start({
            y: [-10, 10, -10],
            transition: { repeat: Infinity, duration: 2, ease: 'linear' },
        });
    }, [floatControls]);

    return (
        <motion.div animate={floatControls} whileHover={{ scale: 1.1 }}>
            <motion.img src={imageSrc} alt='' />
        </motion.div>
    );
};

export default FloatingImg;
