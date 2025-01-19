import Home from "../components/layouts/home";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

export const ROUTES = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={'/'} element={<Home/>}/>
        </>
    )
)