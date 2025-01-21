import React from 'react'
import Summary from "./summary";
import Todos from "./todos";
import styles from '../../styles.module.css'
import CompletedTasks from "./completedTasks";

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <Summary/>
            <Todos/>
            <CompletedTasks/>
        </div>
    )
}
