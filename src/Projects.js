import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import CardActionArea from '@mui/material/CardActionArea';
import Grow from '@mui/material/Grow';
import { Grid2 } from '@mui/material';
import Opening from './components/Opening';
import { projectData } from './staticData/ProjectData';
import { useNav } from './context/NavContext';
export default function Projects() {
	const [checked, setChecked] = useState(true); // Default to true to show cards on load
	const { currentNav } = useNav();

	useEffect(() => {
		if (currentNav === 'project') {
			setChecked(true);
		} else {
			setChecked(false);
		}
	}, [currentNav])
	return (
		<section id="project" className="flex flex-col min-h-fit  gap-y-10 py-10">
			<Opening Name="Projects" p1="Current Projects" />
			<Grid2 container spacing={4} justifyContent="center">
				{projectData.map((project, index) => (
					<Grid2 item key={index} size={{ xs: 10, md:3 }} >
						{/* Apply the Grow animation to each card */}
						<Grow in={checked} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
							<Card className='max-w-full shadow-2xl'>
								<CardActionArea
									className="no-underline hover:no-underline"
									component="a"
									href={project.link}
									target="_blank"
								>
									<CardMedia
										component="img"
										className={`h-[200px] md:h-[300px] object-cover `}
										image={project.image}
										alt={project.title}
									/>
									<CardContent className="flex bg-[#1e1e1e] h-[200px] justify-center items-center">
										<Card >
											<CardActionArea>

												<CardContent className="bg-green ">
													<div className={`flex flex-col w-full justify-center items-center uppercase tracking-[.1rem] text-center gap-y-5`}>

														<span className=' text-sm md:text-xl font-extrabold text-black  border-b-[#0000006b] border-b-[1px]  '>{project.title}</span>
														<span className='text-xs text-white font-medium'>{project.description}</span>
													</div>
												</CardContent>
											</CardActionArea>
										</Card>

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
