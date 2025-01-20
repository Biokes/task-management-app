import styles from '../../styles.module.css'
import React from 'react'
import Navbar from "../commons/navbar";
import Hero from './hero'
export default function Home() {
    return (
        <div className={styles.home}>
            <Navbar/>
            <Hero/>
        </div>
    )
}


