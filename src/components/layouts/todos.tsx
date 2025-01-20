import React, {useState} from 'react'
import AddIcon from "@mui/icons-material/Add";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import {FetchAllTasks} from "../../store/store";
import NoTasks from '../commons/noTasks'
import CreateTaskModal from "./createTaskModal";
export default function Todos() {
    const allTasks =  FetchAllTasks()
    const today = new Date();
    const [isModalActive, setModalActive] = useState<boolean>(false)
    const openAndCloseModal =()=>{
        setModalActive(!isModalActive)
    }
    return (
        <div className={'w-[100%] sm:ml-[20px] sm:w-[400px] mt-[10px] p-[20px_10px_10px_10px] shadow-md rounded-md'}>
            <nav>
                <section className={'flex justify-between items-center'}>
                    <div className={'flex gap-[10px] items-center'}>
                        <PlaylistAddCheckIcon style={{color:'var(--icons-color)'}}/>
                        <p className={'pt-[7px]'}>To-Do</p>
                        <p className={'text-nowrap pt-[7px] font-thin'}>today</p>
                    </div>
                    <div onClick={openAndCloseModal} className={'hover:cursor-pointer hover:bg-gray-200 transform transition duration-[700] rounded-[50%] ease-in-out' }>
                        <AddIcon/>
                    </div>
                </section>
                <p className={'text-[12px] font-thin mt-[15px]'}>
                    {`${today.getDate()} ${today.toLocaleString('default', { month: 'long' })}`}
                </p>
            </nav>
           <div>
               {allTasks.length>= 1?
                   <p>
                       tasks is available
                   </p>
               :
               <NoTasks/>
               }
           </div>
            {isModalActive && <CreateTaskModal onClose={openAndCloseModal} isOpen={isModalActive}/>}
        </div>
    )
}
