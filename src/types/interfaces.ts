export enum Status {
    PENDING = 'pending',
     IN_PROGRESS = 'in progress',
     COMPLETED = 'completed',
}
export enum Priority{
    URGENT = 'URGENT',
    TRIVIAL = 'TRIVIAL',
    LOW_PRIORITY = 'LOW_PRIORITY',
    MEDIUM = 'MEDIUM'
}
export interface Task{
    dueDate: Date,
    name:string,
    description: string,
    status:Status,
    priority:Priority,
    dateCreated: Date
}
export interface Notification{
    description:string,
    isViewed:boolean,
    timeCreated:Date
}