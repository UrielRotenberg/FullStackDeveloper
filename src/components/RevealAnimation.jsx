import React from 'react';
import { Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const RevealAnimation = ({ children, sx = {}, delay = 0, trigger = 0.1 }) => {
    // ref: מצביע לרכיב ה-DOM, inView: האם הרכיב ב-Viewport
    const [ref, inView] = useInView({
        triggerOnce: true, // מפעיל את האנימציה פעם אחת בלבד
        threshold: trigger,    // אחוז מהרכיב הנראה (10% כברירת מחדל)
    });

    // סגנון המעבר
    const defaultStyle = {
        transition: `opacity 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s, transform 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
    };

    // מצב התחלתי (נסתר)
    const hiddenStyle = {
        opacity: 0,
        transform: 'translateY(30px)',
    };

    // מצב סופי (גלוי)
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