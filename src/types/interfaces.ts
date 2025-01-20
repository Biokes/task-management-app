const URGENT = 'urgent';
const LOW = 'low';
const HIGH = 'high';

enum Status {
    PENDING, COMPLETED, IN_PROGRESS
}
export enum Priority{
    URGENT = 'URGENT',
    TRIVIAL = 'TRIVIAL',
    LOW_PRIORITY = 'LOW_PRIORITY',
    MEDIUM = 'MEDIUM'
}
export interface Task{
    date: Date,
    taskText:string,
    description: string,
    status:Status,
    priority:Priority
}