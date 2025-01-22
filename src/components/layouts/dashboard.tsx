import React, {useEffect, useState} from 'react'
import Summary from "./summary";
import Todos from "./todos";
import styles from '../../styles.module.css'
import CompletedTasks from "./completedTasks";
import {Task} from "../../types/interfaces";
import {FetchAllTasks} from "../../store/store";

export default function Dashboard() {
    const [tasks,setTask]= useState<Task[]>([]);
    useEffect(()=>{
        setTask(FetchAllTasks())
    },[tasks])
    return (
        <div className={styles.dashboard}>
            <Summary  tasks={tasks}/>
            <Todos tasks={tasks}/>
            <CompletedTasks/>
        </div>
    )
}
