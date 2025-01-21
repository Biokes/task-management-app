import React, {useState} from 'react'
import AddIcon from "@mui/icons-material/Add";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import {FetchAllTasks} from "../../store/store";
import EmptyComponent from '../commons/emptyComponent'
import CreateTaskModal from "./createTaskModal";
import {Status, Task} from '../../types/interfaces';
import styles from '../../styles.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Reorder } from "framer-motion"

export default function     Todos() {
    const allTasks:Task[] =  FetchAllTasks()
    const today = new Date();
    const [isModalActive, setModalActive] = useState<boolean>(false)
    const [tasks, setTask] = useState<Task[]>(allTasks)
    const openAndCloseModal =()=>{
        setModalActive(!isModalActive)
    }
    const handleReorder = (newTasks: Task[]) => {
        setTask(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    return (
        <div className={styles.todos}>
            <nav>
                <section className={'flex justify-between items-center'}>
                    <div className={'flex gap-[10px] items-center'}>
                        <PlaylistAddCheckIcon style={{color:'var(--icons-color)'}}/>
                        <p className={'pt-[7px]'}>To-Do</p>
                        <p className={'text-nowrap pt-[7px] font-thin'}>today</p>
                    </div>
                    <div onClick={openAndCloseModal} className={'hover:cursor-pointer hover:bg-gray-200 transform transition duration-[700] rounded-[50%] ease-in-out'}>
                        <AddIcon/>
                    </div>
                </section>
                <p className={'text-[12px] font-thin mt-[15px]'}>
                    {`${today.getDate()} ${today.toLocaleString('default', { month: 'long' })}`}
                </p>
            </nav>
           <div className={styles.allTasks}>
               {tasks.length>= 1?
                   <Reorder.Group axis="y" values={allTasks} onReorder={handleReorder}>
                       {
                           tasks.map((task: Task, index) => (
                           <Reorder.Item key={index} value={task} className={styles.task} initial={{opacity: 0}}
                                         animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>
                               <main className={styles.task}>
                                   <section className={'flex flex-col'}>
                                       <div className={'flex flex-col justify-between items-center'}>
                                           <p className={styles.taskName}>{task.name}</p>
                                           <MoreHorizIcon
                                               className={'hover:cursor-pointer hover:bg-gray-200 transform transition duration-[700] rounded-[50%] ease-in-out'}/>
                                       </div>
                                       <p className={'truncate w-[80%]'}>{task.description}</p>
                                   </section>
                                   <section className={styles.taskFooter}>
                                       <p>{task.dueDate.toLocaleString().split('T')[0]}</p>
                                       <p className={`pt-[5px] ${task.status === Status.COMPLETED ? 'text-green-700' : task.status === Status.IN_PROGRESS ? 'text-amber-700' : 'text-blue-950'}`}>{task.status}</p>
                                       <p>{task.priority}</p>
                                   </section>
                               </main>
                           </Reorder.Item>
                            ))
                       }
                   </Reorder.Group>
               :
               <EmptyComponent text={'No Record Created Yet'}/>
               }
           </div>
            {isModalActive &&
                <CreateTaskModal onClose={openAndCloseModal} isOpen={isModalActive}/>}
        </div>
    )
}
