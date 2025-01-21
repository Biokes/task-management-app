import React, {useEffect, useState} from 'react'
import 'react-circular-progressbar/dist/styles.css';
import Progress from "./progress";
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Status, Task} from "../../types/interfaces";
import {FetchAllTasks} from "../../store/store";
import styles from '../../styles.module.css'
export default function Summary() {
    const [tasks , setTasks] = useState<Task[]>([])
    const getCompleteTasksPercentage = () => {
        return tasks.filter((task) => task.status === Status.COMPLETED).length;
    };
    const getOnGoingTaskProgress = () => {
        return tasks.filter((task) => task.status === Status.IN_PROGRESS).length;
    };
    const getPendingTasksProgress = () => {
        return tasks.filter((task) => task.status === Status.PENDING).length;
    };
    useEffect(() => {
        const handleStorageChange = () => {
            const updatedTasks = FetchAllTasks();
            setTasks(updatedTasks);
        };
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return (
        <div className={styles.summary}>
            <div className={'flex gap-[10px] items-center'}>
                <AssignmentIcon style={{color:'var(--icons-color)'}}/>
                <p className={'pt-[5px]'}>Tasks status</p>
            </div>
            <div className={'flex justify-between  w-full py-[20px]'}>
                <Progress percent={getCompleteTasksPercentage()} text={'completed'} color={'green'}/>
                <Progress percent={getOnGoingTaskProgress()} text={'ongoing'} color={'blue'}/>
                <Progress percent={getPendingTasksProgress()} text={'pending'} color={'orange'}/>
            </div>
        </div>
    )
}
