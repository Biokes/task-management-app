import 'react-circular-progressbar/dist/styles.css';
import Progress from "./progress";
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Status, Task} from "../../types/interfaces";
import styles from '../../styles.module.css'
export default function Summary(props:{tasks: Task[]}) {
    const getCompleteTasksPercentage = () => {
        return (props.tasks.filter((task) => task.status === Status.COMPLETED).length/props.tasks.length)*100?? 0;
    };
    const getOnGoingTaskProgress = () => {
        return (props.tasks.filter((task) => task.status === Status.IN_PROGRESS).length/props.tasks.length)*100?? 0;
    };
    const getPendingTasksProgress = () => {
        return (props.tasks.filter((task) => task.status === Status.PENDING).length/props.tasks.length)*100 ?? 0;
    };

    return (
        <div className={styles.summary}>
            <div className={'flex gap-[10px] items-center border-[0.5px] shadow-sm p-[12px]'}>
                <AssignmentIcon style={{color:'var(--icons-color)'}}/>
                <p className={'pt-[5px]'}>Tasks status</p>
            </div>
            <div className={'flex justify-between  w-full p-[20px]'}>
                <Progress percent={getCompleteTasksPercentage()} text={'completed'} color={'green'}/>
                <Progress percent={getOnGoingTaskProgress()} text={'ongoing'} color={'blue'}/>
                <Progress percent={getPendingTasksProgress()} text={'pending'} color={'orange'}/>
            </div>
        </div>
    )
}
