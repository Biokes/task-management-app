export default function FetchAllTasks(){
    const tasks = localStorage.getItem('tasks');
    return JSON.parse(tasks as string) ?? [];
}