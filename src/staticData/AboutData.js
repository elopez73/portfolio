
import InfoList from "../components/Infolist";
import InfoWithIcons from "../components/InfoWithIcons";
import reacrNativeIcons from '../assets/re.svg';
import TailwindIcon from '../assets/tail.svg';
import TypscriptIcon from '../assets/ts.svg';
import ab from '../assets/aboutpic.jpg';
import cv from "../assets/core-values.jpg";
import ex from "../assets/experience.jpg";
import cp from "../assets/career.jpg";
import sk from "../assets/skills.jpg"
import hb from "../assets/hobbies.jpg"

const liscv = [
	{
		title: 'Removing your ego',
		In: "Although we still want to have confidence, we must release our ego's and always allow our minds to intake new information. Even if this information is contrary to what we know, asking questions and learning the truth will always benefit our ability to learn.",
	},
	{
		title: 'Working hard',
		In: "I strive to love where I work and what I do."
	},
	{
		title: 'Caring for others',
		In: "This gives me drive in what I do and helps me strive to achieve new heights.",
	},
	{
		title: 'Innovating',
		In: "In a world that is consistently changing, innovation and trying new things even when there seems to be no other way is crucial.",
	},
];
const lispe = [
	{
		In:
			"I am currently a Full stack Developer at Tekletics."
	},
	{
		In:
			"My last job was as a Software Developer at AZCOMP Technologies from July 2021 - April 2023"
	}
	,
	{
		In:
			"In 2020 I met my beautiful wife, after a calculated decision, I went to look for a full time position while she finished her nursing degree."
	}
	,
	{
		In:
			"I was accepted into a 4 year degree at GCU and attended from 2018-2020, meanwhile having several part time jobs throughout those years such at Starbucks, Summer installation jobs, and small teaching jobs."
	}
	,
	{
		In:
			"After returning from boot camp in 2017 I started a full time job as a material handler for Baker Electric, while attending school full time."
	}
	,
	{
		In:
			"In 2016 at 17 Years old, I signed a 6 year contract with the United States Air Force Reserves. I would then end my contract in 2022."
	}
	,
	{
		In: "In 2014 at 16 years old, I gained 2 years worth of customer service and stylist skills."
	}

];

const iconLists = [
	{ name: 'React/React Native', src: reacrNativeIcons },
	{ name: 'Tailwind', src: TailwindIcon },
	{ name: 'Typscript', src: TypscriptIcon },
	{ name: 'Three.js', src: '/three.svg' },
];

const lishb = [
	{
		In: "Currently I spend my mornings working out and then programming websites before the start of my work day."
	},
	{
		In:
			"Spending time with my wife and supporting her through her journey as a nurse."
	}
	,
	{
		In:
			"Avid volleyball player since High School."
	}
	,
	{
		In:
			"Video games with my life long friends."
	}
	,
	{
		In:
			"I love movies and anime."
	}
	,
	{
		In:
			"Christian and beiliver in christ."
	}

];
const lishW = [
	{
		In: "Results-driven Front-End developer"
	},
	{
		In:
			"Adept at problem-solving, collaborating with teams, and innovating user-centric solutions."
	},
	{
		In:
			"Looking to leverage expertise in mentoring and optimizing software development processes within a dynamic team environment."
	}];
export const slides = [
	{
		id: "1",
		text: "Who I am",
		info1: <InfoList li={lishW} />,
		img: ab,
	},
	{
		id: "2",
		text: "Core Values",
		info1: <InfoList li={liscv} />,
		img: cv,
	},
	{
		id: "3",
		text: "Career Goals",
		info1: <InfoList li={[{ In: `Looking to leverage my expertise in mentoring and optimizing software development processes within a dynamic team environment.` }]} />,
		img: cp,
	},
	{
		id: "4",
		text: "Past Experiences",
		info1: <InfoList li={lispe} />,
		img: ex,
	},
	{
		id: "5",
		text: "Skills",
		info1: <InfoWithIcons items={iconLists} />,
		img: sk,
	},
	{
		id: "6",
		text: "Hobbies - Lifestyle",
		info1: <InfoList li={lishb} />,
		img: hb,
	},
];
