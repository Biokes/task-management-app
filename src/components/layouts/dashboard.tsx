import React,{useEffect} from 'react'
import Summary from "./summary";
import Todos from "./todos";
import styles from '../../styles.module.css'
import CompletedTasks from "./completedTasks";
import { useTasks} from "../../contexts/TaskContext";
import {FetchAllTasks} from "../../utils/utils";

export default function Dashboard() {
    const { tasks, setTasks } = useTasks();
    useEffect(() => {
        const fetchedTasks = FetchAllTasks();
        setTasks(fetchedTasks);
    }, [setTasks]);
    return (
            <div className={styles.dashboard}>
                <Summary  tasks={tasks}/>
                <Todos tasks={tasks }/>
                <CompletedTasks tasks={tasks}/>
            </div>
    )
}