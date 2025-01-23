import styles from '../../styles.module.css'
import React from 'react'
import EmptyComponent from "../commons/emptyComponent";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import {Task} from "../../types/interfaces";

export default function CompletedTasks(props:{tasks:Task[]}) {

    return (
        <div className={`${props.tasks.length>3? 'flex flex-col':'xs:hidden' } ${styles.completedTasks}`}>
            <div className={'flex gap-[10px] items-center p-[15px] w-full'}>
                <PlaylistAddCheckIcon style={{color:'var(--icons-color)'}}/>
                <p className={'pt-[7px]'}>Completed Tasks</p>
            </div>
            <EmptyComponent text={'No completed tasks yet'}/>
        </div>
    )
}
