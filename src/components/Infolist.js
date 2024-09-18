
import { Card, CardActionArea, CardContent } from "@mui/material";

function InfoList(props) {
    const lists = props.li;


    return <ul className=' flex flex-col list-disc gap-y-10'>

        {lists.map((lists, index) => (
            <Card sx={{ maxWidth: '100%' }}>
                <CardActionArea>

                    <CardContent className="bg-green ">
                        <div className={`flex flex-col w-full justify-center items-center uppercase tracking-[.1rem] text-center gap-y-5`}>

                            {lists.title && <span className=' text-sm md:text-xl font-extrabold text-black  border-b-[#0000006b] border-b-[1px] '>{lists.title}</span>}
                            <span className='text-xs md:text-lg text-white font-medium '>{lists.In}</span>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>


        )
        )}
    </ul>

}
export default InfoList;
