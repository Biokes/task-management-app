import React, {useEffect, useState} from 'react'
import AddIcon from "@mui/icons-material/Add";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import {FetchAllTasks} from "../../store/store";
import EmptyComponent from '../commons/emptyComponent'
import CreateTaskModal from "./createTaskModal";
import {Status, Task} from '../../types/interfaces';
import styles from '../../styles.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Reorder } from "framer-motion";

export default function Todos(data:{tasks: Task[]}) {
    const today = new Date();
    const [isModalActive, setModalActive] = useState<boolean>(false)
    const [tasks, setTask] = useState<Task[]>(data.tasks)
    const [state, setState] = useState<string>('');

    const openAndCloseModal =()=>{
        setModalActive(!isModalActive)
        setState(state?'':'state');
    }
    useEffect(()=>{
        setTask(FetchAllTasks())
    },[state])

    return (
        <div className={`${tasks.length>=1 ? 'md:h-[95%] overflow-y-auto':'h-[200px]'} ${styles.todos}`}>
            <nav>
                <section className={'flex justify-between items-center'}>
                    <div className={'flex gap-[10px] items-center'}>
                        <PlaylistAddCheckIcon style={{color:'var(--icons-color)'}}/>
                        <p className={'pt-[7px]'}>To-Do</p>
                        <p className={'text-nowrap pt-[7px] font-thin'}>today</p>
                    </div>
                    <div onClick={openAndCloseModal} className={styles.iconBg}>
                        <AddIcon/>
                    </div>
                </section>
                <p className={'text-[12px] font-thin mt-[15px]'}>
                    {`${today.getDate()} ${today.toLocaleString('default', { month: 'long' })}`}
                </p>
            </nav>
           <div className={`${tasks.length >=1 ?'overflow-y-auto h-[50vh] md:max-h-[90%]' : ''} ${styles.allTasks}`}>
               {tasks.length>= 1?
                   <Reorder.Group axis="y" values={tasks} onReorder={setTask} className={'flex flex-col gap-[12px]'}>
                       {
                           tasks.map((task: Task, index) => (
                           <Reorder.Item key={index} value={task} dragElastic={0.1} transition={{ duration: 0.25, ease: "easeInOut" }} dragTransition={{bounceStiffness: 600, bounceDamping: 20,}}>
                               <main className={styles.task}>
                                   <section className={'flex flex-col'}>
                                       <div className={'flex justify-between items-center'}>
                                           <p className={styles.taskName}>{task.name}</p>
                                           <div className={styles.iconBg}>
                                               <MoreHorizIcon/>
                                           </div>

                                       </div>
                                       <p className={'truncate w-[80%]'}>{task.description}</p>
                                   </section>
                                   <section className={styles.taskFooter}>
                                       <p>{task.dueDate.toLocaleString().split('T')[0]}</p>
                                       <p className={`pt-[5px] ${task.status === Status.COMPLETED ? 'text-green-700' 
                                           : task.status === Status.IN_PROGRESS ? 'text-amber-700' : 'text-blue-950'}`}>{task.status}</p>
                                       <p>{task.priority}</p>
                                   </section>
                               </main>
                           </Reorder.Item>
                            ))
                       }
                   </Reorder.Group>
               :
               <EmptyComponent text={'No Task Created Yet'}/>
               }
           </div>
            {isModalActive &&
                <CreateTaskModal onClose={openAndCloseModal} isOpen={isModalActive}/>}
        </div>
    )
}
