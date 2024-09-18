import React, { useState, useEffect, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function InfoWithIcons({ items }) {
    const [inView, setInView] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef(null);
    const scrollTimeoutRef = useRef(null);

    useEffect(() => {
        // Store the initial reference to the element in a variable
        const currentRef = containerRef.current;

        // Set up the IntersectionObserver
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        // Observe the current reference
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            // Unobserve the stored reference
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);


    useEffect(() => {
        // Handler for scroll event
        const handleScroll = () => {
            setIsScrolling(true);

            // Clear previous timeout to avoid premature animation start
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            // Set a timeout to stop scrolling status after 200ms
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 200);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div id="icon-container" className="flex flex-col md:flex-row justify-evenly items-center h-full" ref={containerRef}>
            {items.map((item, index) => (
                <Tooltip key={index} title={item.name} sx={{ backgroundColor: 'black' }} >
                    <IconButton
                        className={`w-[50px] h-[50px] ${inView && !isScrolling ? 'bounce-animation' : ''}`}
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
