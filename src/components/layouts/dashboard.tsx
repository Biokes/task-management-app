import React from 'react'
import Summary from "./summary";
import Todos from "./todos";
import styles from '../../styles.module.css'

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <Summary/>
            <Todos/>
        </div>
    )
}
