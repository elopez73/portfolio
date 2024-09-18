// NavContext.js
import React, { useState, useEffect, useContext, createContext } from 'react';

const NavContext = createContext();

export const useNav = () => useContext(NavContext);

export const NavProvider = ({ children }) => {
    const [currentNav, setCurrentNav] = useState('home');

    useEffect(() => {
        let observer;
        let mutationObserver;
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentNav(entry.target.id);
                }
            });
        };

        const observeSections = () => {
            const sections = [
                { id: 'home', element: document.getElementById('home') },
                { id: 'about', element: document.getElementById('about') },
                { id: 'project', element: document.getElementById('project') },
                { id: 'certification', element: document.getElementById('certification') },
                { id: 'contact', element: document.getElementById('contact') },
            ];

            // If an observer already exists, disconnect it
            if (observer) {
                observer.disconnect();
            }

            // Create a new IntersectionObserver
            observer = new IntersectionObserver(handleIntersection, observerOptions);

            // Observe each section element
            sections.forEach(({ element }) => {
                if (element) observer.observe(element);
            });
        };

        // Initialize observing sections
        observeSections();

        // Use MutationObserver to detect changes in the DOM (e.g., navigation changes)
        mutationObserver = new MutationObserver(() => {
            observeSections();
        });

        // Observe changes in the body or main content
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        // Clean up observers on unmount
        return () => {
            if (observer) observer.disconnect();
            if (mutationObserver) mutationObserver.disconnect();
        };
    }, []);



    return (
        <NavContext.Provider value={{ currentNav, setCurrentNav }}>
            {children}
        </NavContext.Provider>
    );
};
