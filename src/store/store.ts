import {Task} from "../types/interfaces";

export function FetchAllTasks(){
    const tasks = localStorage.getItem('tasks');
    return JSON.parse(tasks as string) ?? [];
}

export function AddTask(task:Task){
    const tasks = FetchAllTasks();
    const updatedTasks = [...tasks, task];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

