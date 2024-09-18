import React from 'react';
import {  Link } from '@mui/material';

function CertComp(props) {
    return (
       <div>
            <img className=' h-[250px] md:h-[400px] ' src={props.image} alt='' />

            <div className={`flex flex-col w-full justify-center items-center uppercase tracking-[.1rem] text-center gap-y-5 bg-[#1e1e1e] p-5 mb-10 rounded-b-lg`}>


                        <span className='text-xs text-white  bg-green p-1 rounded-lg'>
                            {props.info}
                        </span>
                        <Link className={'text-green'} href={props.link} target="_blank" rel="noopener" variant="body2" underline={'none'}>
                            Click here to open in a new tab
                        </Link>
                    </div>

                </div>

    );
}

export default CertComp;
