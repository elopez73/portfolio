import { navItems } from "../../staticData/NavItems";
import { useState, useEffect, useRef } from 'react';
import { Bars2Icon, XMarkIcon } from "@heroicons/react/16/solid"; // Import menu icons
import { useNav } from "../../context/NavContext";
function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
    const [sliderStyles, setSliderStyles] = useState({});
    const navHeightRef = useRef(null);
    const navRef = useRef(null);
    const { currentNav, setCurrentNav } = useNav();



    useEffect(() => {
        const selectedNavItem = navRef.current?.querySelector(`.nav-item-${currentNav}`);
        if (selectedNavItem) {
            const { offsetLeft, offsetWidth, offsetHeight } = selectedNavItem;
            setSliderStyles({
                left: `${offsetLeft}px`,
                width: `${offsetWidth}px`,
                height: `${offsetHeight}px`,
                top: `${selectedNavItem.offsetTop}px`,
            });
        }
    }, [currentNav]);

    function scrollToSection(id) {
        setCurrentNav(id);

        const section = document.getElementById(id);
        console.log(section)
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop - 76,
                behavior: 'smooth',
            });
        }

        // Close the dropdown menu after navigating
        setIsOpen(false);
    }

    return (
        <div ref={navHeightRef} className="fixed w-[100svw] md:hidden p-4 z-[100] ">
            {/* Toggle button for dropdown menu */}
            <div className={`flex w-full justify-center items-center p-4 bg-[#0008] transition-all duration-300 ease-in-out  ${isOpen ? 'rounded-t-lg':'rounded-lg'}`}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white"
                >
                    {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars2Icon className="h-6 w-6" />}
                </button>
            </div>

            {/* Dropdown menu with smooth animation */}
            <ul
                ref={navRef}
                className={`relative  w-full bg-[#0008] rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? 'max-h-96' : 'max-h-0'}`} // Adjust max-h-96 to the expected height
            >
                {/* Sliding background */}
                <div
                    className="absolute bg-green rounded-lg transition-all duration-300 ease-in-out "
                    style={sliderStyles}
                ></div>

                {navItems.map(({ id, name }) => (
                    <button onClick={() => scrollToSection(id)} key={id} className="w-full text-center text-white">
                        <li className={`nav-item-${id} relative p-4 z-50 text-lg `}>
                            {name}
                        </li>
                    </button>
                ))}
            </ul>
        </div>
    );
}

export default MobileNavigation;
