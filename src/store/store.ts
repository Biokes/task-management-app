import {Task} from "../types/interfaces";

export function FetchAllTasks(){
    const tasks = localStorage.getItem('tasks');
    return JSON.parse(tasks as string) ?? [];
}

export function AddTask(task:Task){
    const tasks = FetchAllTasks()
    tasks.push(task)
    const taskToSave = JSON.stringify(tasks)
    localStorage.setItem('tasks',taskToSave)
}

