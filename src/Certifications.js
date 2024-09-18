import Opening from "./components/Opening";
import CertComp from "./components/CertComp";

import { certs } from "./staticData/CertData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Certifications() {
    return (

        <section id="certification" className="flex flex-col min-h-fit gap-y-10">

            <Opening Name="Certifications" p1="Current Certifications" />
            <div className="flex justify-center w-full ">
                <Carousel emulateTouch={true} showArrows={false} showStatus={false} className="w-[80%] md:w-[35%] rounded-lg">
                    {certs.map((cert) =>
                        <CertComp key={cert?.id} title={cert?.title} link={cert?.link} info={cert?.info} image={cert?.image} />
                    )}
                </Carousel>
            </div>


        </section>

    );
};
export default Certifications;
