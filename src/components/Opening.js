
function Opening(props) {
    return (
        <div className={`flex flex-col w-full justify-center items-center uppercase tracking-[.6rem] text-center gap-y-10 px-5`}>
            <span className='text-green text-xl font-bold '>{props.intro}</span>
            <span className='text-3xl md:text-6xl text-white'>{props.Name}</span>
            <span className='text-green text-xl font-bold '>{props.p1}</span>
        </div>
    )
}
export default Opening;
