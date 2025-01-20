import {RouterProvider,} from "react-router-dom";
import {ROUTES} from "./route/routes";
import {useEffect} from "react";
import {Task} from "./types/interfaces";


export default function App() {
    let tasks: Task[] = []
    const themeMode = localStorage.getItem('to_do_theme')??'light';
    try{
        const storedTasks = localStorage.getItem('tasks')
        tasks= storedTasks ? JSON.parse(storedTasks):[]
    }catch (error){
        console.log('tasks:',localStorage.getItem('tasks'));
        tasks = [];
    }

    // const tasks = JSON.parse(localStorage.getItem('tasks'))??[];
    useEffect(()=>{
        document.documentElement.style.setProperty('--background', themeMode === "dark" ? '#000000' : '#ffffff');
        document.documentElement.style.setProperty('--small-text-color', themeMode === "dark" ? '#ffffff' : '#000000');
        localStorage.setItem('tasks',JSON.stringify(tasks))
    },[themeMode,tasks])

return <RouterProvider router={ROUTES}/>

}