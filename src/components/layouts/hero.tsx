import React, {ReactNode, useState} from 'react'
import styles from '../../styles.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import Dashboard from "./dashboard";

export default function Hero() {
    const [currentComponent, setCurrentComponent] = useState<{component:ReactNode,text:string}>({component:<Dashboard/>,text:'Dashboard'})
    function LeftBar(){
        const options = [
            {text:'Dashboard', icon: <DashboardIcon style={{color:'var(--text-color)'}}/>, component:<Dashboard/>},
            // {text:'settings', icon: <SettingsIcon style={{color:'var(--icons-color)'}}/>,component:<p>settings</p>},
        ]
        return (
            <ul className={styles.leftbar}>
                {
                    options.map((data, index) => (
                            <div key={index}
                                 // onClick={()=>{setCurrentComponent({component:data.component,text:data.text})}}
                                 className={`${data.text !== currentComponent.text ? 'hover:bg-gray-200' : 'bg-gray-400'}`}>
                                <p className={`${data.text === currentComponent.text ? 'text-white' : 'text-blue-950'}`}>{data.icon}</p>
                                <p className={`hidden sm:flex pt-[5px] capitalize `}>{data.text}</p>
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
            <RightBar component={currentComponent.component}/>
        </div>
    )
}
