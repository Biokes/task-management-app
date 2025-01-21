import React, {useState} from 'react'
import AddIcon from "@mui/icons-material/Add";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import {FetchAllTasks} from "../../store/store";
import EmptyComponent from '../commons/emptyComponent'
import CreateTaskModal from "./createTaskModal";
import {Status, Task} from '../../types/interfaces';
import styles from '../../styles.module.css'

export default function Todos() {
    const allTasks:Task[] =  FetchAllTasks()
    const today = new Date();
    const [isModalActive, setModalActive] = useState<boolean>(false)
    const openAndCloseModal =()=>{
        setModalActive(!isModalActive)
    }
    return (
        <div className={'w-[100%] sm:w-[400px] mt-[10px] p-[20px_10px_10px_10px] shadow-md rounded-md border-[0.5px]'}>
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
           <div className={styles.allTasks}>
               {allTasks.length>= 1?
                  allTasks.map((task, index)=>(
                      <div key={index} className={styles.task}>
                          <section className={'flex flex-col'}>
                              <p className={'capitalize text-[15px] font-[500]'}>{task.name}</p>
                              <p className={'truncate w-[80%]'}>{task.description}</p>
                          </section>
                          <section className={styles.taskFooter}>
                              <p>{task.dueDate.toLocaleString().split('T')[0]}</p>
                              <p className={`pt-[5px] ${task.status===Status.COMPLETED? 'text-green-700':task.status===Status.IN_PROGRESS?'text-amber-700':'text-blue-950'}`}>{task.status}</p>
                              <p>{task.priority}</p>
                          </section>
                      </div>
                  ))
               :
               <EmptyComponent text={'No Record Created Yet'}/>
               }
           </div>
            {isModalActive &&
                <CreateTaskModal onClose={openAndCloseModal} isOpen={isModalActive}/>}
        </div>
    )
}
