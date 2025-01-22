import styles from '../../styles.module.css'
import React, {useEffect, useState} from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
export default function Navbar(){
    const [theme, setTheme] = useState<string>(localStorage.getItem('to_do_theme')??'light')
    const ModeSelector=()=>{
        useEffect(()=>{
            document.documentElement.style.setProperty('--text-color', theme==='dark'?'#ffffff':'#010428')
            document.documentElement.style.setProperty('--background-color', theme==='dark'?'#010428':'#ffffff')
        },[])
        const switchTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
           localStorage.setItem('to_do_theme',theme === 'light'? 'dark':'light')
            setTheme(localStorage.getItem('to_do_theme')?? '');
        }
        return (
            <button
                    className={styles.modeSelector}
                    onClick={(e)=>switchTheme(e)}
            >
                <LightModeIcon className={styles.iconColor}/>
            </button>
        )
    }
    return (
     <div className={styles.navbar}>
         <h2 className={'text-[20px]'}>Task board</h2>
         <ModeSelector/>
     </div>
    )
}