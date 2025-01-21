import React, {useEffect, useState} from 'react'
import 'react-circular-progressbar/dist/styles.css';
import Progress from "./progress";
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Status, Task} from "../../types/interfaces";
import {FetchAllTasks} from "../../store/store";

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
        <div className={'w-[100%] sm:ml-[20px] sm:w-[400px] p-[30px_10px_20px_10px] shadow-md rounded-md bg-white -mx-[-5px]'}>
            <div className={'flex gap-[10px] items-center'}>
                <AssignmentIcon style={{color:'var(--icons-color)'}}/>
                <p className={'pt-[5px]'}>Tasks status</p>
            </div>
            <div className={'flex justify-around w-full px-[10px] py-[10px]'}>
                <Progress percent={getCompleteTasksPercentage()} text={'completed'} color={'green'}/>
                <Progress percent={getOnGoingTaskProgress()} text={'ongoing'} color={'blue'}/>
                <Progress percent={getPendingTasksProgress()} text={'pending'} color={'orange'}/>
            </div>
        </div>
    )
}
