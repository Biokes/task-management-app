import styles from '../../styles.module.css'
import React from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
export default function Navbar(){
    const ModeSelector=()=>{
        let clickedClass=  'clicked'
        const body = document.body
        const lightTheme = 'light'
        const darkTheme ='dark'
        let theme ='';
        if(localStorage){
            theme = localStorage.getItem('to_do_theme')?? lightTheme;
        }
        if(theme=== lightTheme || theme=== darkTheme) {
            body.classList.add(lightTheme)
        }else{
            body.classList.add(darkTheme)
        }
        const switchTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
            const target = e.target as HTMLButtonElement
            if(theme===darkTheme){
                body.classList.replace(darkTheme,lightTheme);
                target.classList.remove(clickedClass);
                localStorage.setItem('to_do_theme',lightTheme);
                theme = lightTheme;
            }else{
                body.classList.replace(lightTheme,darkTheme);
                target.classList.add(clickedClass);
                localStorage.setItem('to_do_theme',darkTheme);
                theme = darkTheme;
            }
        }
        return (
            <button id={'modeSelector'}
                    className={`${theme === 'dark' ? clickedClass : ''} ${styles.modeSelector}`}
                    onClick={(e)=>switchTheme(e)}
            >
                <LightModeIcon className={'dark:text-amber-400 text-black'}/>
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