
import Opening from "./components/Opening";
import Hero from './assets/Hero.png'
function Home() {
    return (
        <section id="home" className='flex flex-col min-h-full justify-center'>
            <div className='flex w-full justify-center items-center mb-10'>
                <div className='w-fit bg-[#0007] rounded-md'>
                    <img className="w-[100px]" src={Hero} alt=''></img>
                </div>

            </div>
            <Opening intro="Building Dynamic Webistes" Name="Esau Lopez" p1="Front End Devloper, based in the Phoenix Metro Area" />
        </section>

    );
};
export default Home;
