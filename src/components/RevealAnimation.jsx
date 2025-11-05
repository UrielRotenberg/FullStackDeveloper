import React from 'react';
import { Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const RevealAnimation = ({ children, sx = {}, delay = 0, trigger = 0.1 }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: trigger,
    });

    const defaultStyle = {
        transition: `opacity 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s, transform 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
    };

    const hiddenStyle = {
        opacity: 0,
        transform: 'translateY(30px)',
    };

    const visibleStyle = {
        opacity: 1,
        transform: 'translateY(0)',
    };

    return (
        <Box
            ref={ref}
            sx={{
                ...defaultStyle,
                ...(inView ? visibleStyle : hiddenStyle),
                ...sx,
            }}
        >
            {children}
        </Box>
    );
};

export default RevealAnimation;