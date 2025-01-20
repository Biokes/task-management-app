import React, {ReactNode, useState} from 'react'
import styles from '../../styles.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import Dashboard from "./dashboard";

export default function Hero() {
    const [currentComponent, setCurrentComponent] = useState<ReactNode>(<></>)
    function LeftBar(){
        const options = [
            {text:'Dashboard', icon: <DashboardIcon style={{color:'var(--icons-color)'}}/>, component:<Dashboard/>},
            {text:'Vital Tasks', icon: <AssignmentTurnedInIcon style={{color:'var(--icons-color)'}}/>,component:<p>vital tasks</p>},
            {text:'settings', icon: <SettingsIcon style={{color:'var(--icons-color)'}}/>,component:<p>settings</p>},
        ]
        return (
            <ul className={styles.leftbar}>
                {
                    options.map((data, index) => (
                            <div key={index} onClick={()=>{setCurrentComponent(data.component)}}>
                                <p>{data.icon}</p>
                                <p className={'hidden sm:flex pt-[5px] capitalize'}>{data.text}</p>
                            </div>
                        )
                    )
                }
            </ul>
        )
    }
    function RightBar(props: {component: ReactNode}){
        return (
            <div className={'w-full'}>
                {props.component}
            </div>

        )
    }
    return (
        <div className={'flex h-[100%]'}>
            <LeftBar/>
            <RightBar component={currentComponent}/>
        </div>
    )
}
