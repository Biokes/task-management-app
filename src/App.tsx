import {RouterProvider,} from "react-router-dom";
import {ROUTES} from "./route/routes";
import {useEffect} from "react";


export default function App() {
    const themeMode = localStorage.getItem('to_do_theme')??'light'
    useEffect(()=>{
        document.documentElement.style.setProperty('--background', themeMode === "dark" ? '#000000' : '#ffffff');
        document.documentElement.style.setProperty('--small-text-color', themeMode === "dark" ? '#ffffff' : '#000000');
    },[themeMode])

return <RouterProvider router={ROUTES}/>

}