import React, {ReactNode} from 'react'
import styles from '../../styles.module.css'
export default function HomeBar() {
    function LeftBar(){
        return (
            <ul className={styles.leftbar}>
                <li>Dashboard</li>
                <li>Tasks</li>
                <li>settings</li>
            </ul>
        )
    }
    function RightBar(component:ReactNode){
        return (
            <>
                {component}
            </>
        )
    }
    return (
        <div>
            {/*<LeftBar/>*/}
            {/*<RightBar/>*/}
        </div>
    )
}
