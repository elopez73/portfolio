import React, { useState, useEffect, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function InfoWithIcons({ items }) {
    const [inView, setInView] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef(null);
    const scrollTimeoutRef = useRef(null);

    useEffect(() => {
        const currentRef = containerRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);


    useEffect(() => {
   const handleScroll = () => {
            setIsScrolling(true);

            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 200);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div id="icon-container" className="flex flex-col justify-evenly items-center h-full" ref={containerRef}>
            {items.map((item, index) => (
                <Tooltip key={index} title={item.name}   >
                    <IconButton
                        className={`w-[60px] h-[60px]  ${inView && !isScrolling ? 'bounce-animation' : ''}`}
                        style={{
                            animationDelay: `${index * 0.2}s`,
                            animationPlayState: inView && !isScrolling ? 'running' : 'paused',
                        }}
                    >
                        <img src={item.src} alt={item.name} />
                    </IconButton>
                </Tooltip>
            ))}
        </div>
    );
}
