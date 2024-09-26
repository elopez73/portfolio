import { useState,useEffect } from "react";
import Opening from "./components/Opening";
import { certs } from "./staticData/CertData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Grid2, Card, Grow, CardMedia,CardActionArea,CardContent } from '@mui/material';

import { useNav } from "./context/NavContext";

function Certifications() {

    const [checked, setChecked] = useState(true);
    const { currentNav } = useNav();

    useEffect(() => {
        if (currentNav === 'certification') {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [currentNav])
    return (

        <section id="certification" className="flex flex-col min-h-fit gap-y-10">

            <Opening Name="Certifications" p1="Current Certifications" />

                <Grid2 container spacing={4} justifyContent="center">

                <Carousel emulateTouch={true} showArrows={false} showStatus={false} className="w-[80%] md:w-[35%] rounded-lg">
                    {certs.map((cert) =>
                        <Grow in={checked} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                            <Card className='max-w-full bg-transparent mb-10'>
                                <CardActionArea
                                    className="no-underline hover:no-underline"
                                    component="a"
                                    href={cert?.link}
                                    target="_blank"
                                >
                                <CardMedia
                                    component="img"
                                    className={`h-fit  object-contain  `}
                                    image={cert?.image}
                                    alt={cert?.title}
                                />
                                <CardContent className="flex bg-[#1e1e1e] h-fit justify-center items-center">
                                    <Card >
                                        <CardActionArea>

                                            <CardContent className="bg-green ">
                                                <div className={`flex flex-col w-full justify-center items-center uppercase tracking-[.1rem] text-center gap-y-5`}>

                                                    <span className=' text-sm md:text-xl font-extrabold text-black  border-b-[#0000006b] border-b-[1px]  '>{cert?.title}</span>
                                                    <span className='text-xs text-white font-medium'>{cert?.info}</span>
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                </CardContent>

                                </CardActionArea>
                            </Card>
                        </Grow>
                    )}
                </Carousel>
                </Grid2>



        </section>

    );
};
export default Certifications;
