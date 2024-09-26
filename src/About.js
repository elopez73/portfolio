import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Grow from '@mui/material/Grow';
import { Grid2 } from '@mui/material';
import Opening from './components/Opening';
import { slides } from './staticData/AboutData';
import { useNav } from './context/NavContext';

export default function About() {
	const [checked, setChecked] = useState(false);
	const { currentNav } = useNav();
	const [hoveredIndex, setHoveredIndex] = useState(null);
	useEffect(() => {
		if (currentNav === 'about') {
			setChecked(true);
		} else {
			setChecked(false);
		}
	}, [currentNav]);
	const gridSizes = [3, 4, 2, 4, 3, 2];



	return (
		<section id="about" className={"flex flex-grow flex-col min-h-fit  gap-y-10 mb-10"}>
			<Opening Name="About Me" p1="Discover what makes me tick" />

			<Grid2 container spacing={4} justifyContent="center"  >
				{slides.map((slide, index) => (
					<Grid2 item key={index} size={{ xs: 5, md: gridSizes[index % gridSizes.length] }} >
						<Grow in={checked} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
							<Card className='max-w-full '>
								<CardActionArea
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}
									onClick={() => setHoveredIndex(index)}
								>
									<CardMedia
										component="img"
										className={`h-[100px] md:h-[200px] object-cover ${hoveredIndex === index && 'hidden'}`}
										image={slide.img}
										alt={slide.text}
									/>
									<CardContent className={`flex flex-col bg-[#1e1e1e]  ${hoveredIndex === index ? "h-[300px] md:h-[500px]" : "h-[200px] md:h-[300px]"} overflow-y-auto overflow-x-hidden`}>
										<div className={`flex flex-col w-full justify-center items-center uppercase tracking-[.1rem] text-center py-5`}>
											<span className='text-xl  text-white'>{slide.text}</span>
										</div>

										<div className={`relative flex justify-center items-center uppercase tracking-[.1rem]  text-white bg-[#87b4ab2b] ${hoveredIndex !== index ? 'h-full' : 'hidden'}`}>
											<span className='text-sm md:text-xl font-bold  bg-[#87b4ab65] p-1 rounded-lg'>show</span>
										</div>

										<Grow in={hoveredIndex === index} timeout={500}>
											<div className={`${hoveredIndex !== index ? 'hidden' : 'h-full'}`}>
												{slide.info1}
											</div>
										</Grow>

									</CardContent>
								</CardActionArea>
							</Card>
						</Grow>
					</Grid2>
				))}
			</Grid2>
		</section>
	);
}
