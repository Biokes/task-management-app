import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
export default function Todos() {
    const today = new Date();
    return (
        <div className={'w-[100%] sm:ml-[20px] sm:w-[400px] mt-[10px] p-[20px_10px_10px_10px] shadow-md rounded-md'}>
            <nav>
                <section className={'flex justify-between items-center'}>
                    <div className={'flex gap-[10px] items-center'}>
                        <PlaylistAddCheckIcon style={{color:'var(--icons-color)'}}/>
                        <p className={'pt-[7px]'}>To-Do</p>
                    </div>
                   <AddIcon/>
                </section>
                <p className={'text-[12px] font-thin mt-[15px]'}>
                    {`${today.getDate()} ${today.toLocaleString('default', { month: 'long' })}`}
                </p>
            </nav>
           <div>
               {
                   'map all tasksg'
               }
           </div>
        </div>
    )
}
