import React, {ReactNode, useState} from 'react'
import styles from '../../styles.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Hero() {
    const [currentComponent, setCurrentComponent] = useState<ReactNode>(<></>)
    function LeftBar(){
        const options = [
            {text:'Dashboard', icon: <DashboardIcon/>, component:<p>dashboard</p>},
            {text:'Vital Tasks', icon: <AssignmentTurnedInIcon/>,component:<p>vital tasks</p>},
            {text:'settings', icon: <SettingsIcon/>,component:<p>settings</p>},
        ]
        return (
            <ul className={styles.leftbar}>
                {
                    options.map((data, index) => (
                            <div key={index} onClick={()=>{setCurrentComponent(data.component)}}>
                                <p>{data.icon}</p>
                                <p className={'hidden md:flex pt-[5px] capitalize'}>{data.text}</p>
                            </div>
                        )
                    )
                }
            </ul>
        )
    }
    function RightBar(props: {component: ReactNode}){
        return (
            <div>
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
