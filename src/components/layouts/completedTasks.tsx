import styles from '../../styles.module.css'
import React from 'react'
import EmptyComponent from "../commons/emptyComponent";

export default function CompletedTasks() {
    return (
        <div className={styles.completed}>
            <EmptyComponent text={'No completed tasks yet'}/>
        </div>
    )
}
