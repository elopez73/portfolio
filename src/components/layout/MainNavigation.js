import { navItems } from "../../staticData/NavItems";
import { useState, useEffect, useRef } from 'react';
import { useNav } from "../../context/NavContext";
function MainNavigation() {
	const [sliderStyles, setSliderStyles] = useState({});
	const navHeightRef = useRef(null);
	const navRef = useRef(null);
	const { currentNav, setCurrentNav } = useNav();

	useEffect(() => {
		// Find the selected nav item
		const selectedNavItem = navRef.current?.querySelector(`.nav-item-${currentNav}`);
		if (selectedNavItem) {
			const { offsetLeft, offsetWidth, offsetHeight } = selectedNavItem;
			setSliderStyles({
				left: `${offsetLeft}px`,
				width: `${offsetWidth}px`,
				height: `${offsetHeight}px`,
				top: `${selectedNavItem.offsetTop}px`, // Adjust to center the slider
			});
		}
	}, [ currentNav]);
	function scrollToSection(id) {
		setCurrentNav(id);


		const section = document.getElementById(id);
		if (section) {
			const offsetTop = section.getBoundingClientRect().top + window.scrollY;
			const navHeight = navHeightRef.current?.getBoundingClientRect().height+20 || 0;

			window.scrollTo({
				top: offsetTop - navHeight,
				behavior: 'smooth',
			});
		}
	}

	return (
		<div ref={navHeightRef} className="hidden md:flex w-full fixed justify-center top-0 z-[100]">
			<ul
				ref={navRef}
				className="relative flex flex-row justify-center md:gap-x-10 p-2 text-white mt-5 bg-[#0008] rounded-full"
			>
				{/* Sliding background */}
				<div
					className="absolute bg-green rounded-full transition-all duration-300 ease-in-out "
					style={sliderStyles}
				></div>

				{navItems.map(({ id, name }) => {
					return (
						<button onClick={() => scrollToSection(id)} key={id}>
							<li
								className={`nav-item-${id} relative px-2 rounded-full z-10 text-lg text-bold tracking-[.1rem]`}
							>
								{name}
							</li>
						</button>
					);
				})}
			</ul>
		</div>
	);
}

export default MainNavigation;
