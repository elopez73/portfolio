
import MainNavigation from "./components/layout/MainNavigation";
import MobileNavigation from "./components/layout/MobileNavigation";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Certifications from "./Certifications";
import classes from "./apps.module.css";
import { NavProvider } from "./context/NavContext";
import BG from './assets/Background.jpg'
import { Divider } from "@mui/material";


function App() {

	return (<NavProvider>
		<div className={classes.app} >
			<img src={BG} className={classes.bg} alt="None"></img>
			<MainNavigation />
			<MobileNavigation />
			<Home />
			<Divider />
			<About />
			<Divider />
			<Projects />
			<Divider />
			<Certifications />
			<Divider />
			<Contact />
		</div>
	</NavProvider>
	);
}

export default App;
