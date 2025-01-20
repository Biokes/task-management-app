import React, {useState} from 'react'
import AddIcon from "@mui/icons-material/Add";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import {FetchAllTasks} from "../../store/store";
import NoTasks from '../commons/noTasks'
import CreateTaskModal from "./createTaskModal";
import {Task} from '../../types/interfaces';
export default function Todos() {
    const allTasks:Task[] =  FetchAllTasks()
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
                  allTasks.map((task, index)=>(
                      <div key={index} className={'flex flex-col rounded-md border-[1px] border-blue-950 p-[10px]'}>
                          <section className={'flex flex-col'}>
                              <p>{task.name}</p>
                              <p>{task.description}</p>
                          </section>
                          <section className={'flex justify-around items-center'}>
                              <p>{task.dueDate.toLocaleString().split('T')[0]}</p>
                              <p>{task.status}</p>
                              <p>{task.priority}</p>
                          </section>
                      </div>
                  ))
               :
               <NoTasks/>
               }
           </div>
            {isModalActive &&
                <CreateTaskModal onClose={openAndCloseModal} isOpen={isModalActive}/>}
        </div>
    )
}
