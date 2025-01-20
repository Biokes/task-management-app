const URGENT = 'urgent';
const LOW = 'low';
const HIGH = 'high';

enum Status {
    PENDING, COMPLETED, IN_PROGRESS
}
enum Priority{
    URGENT,MEDIUM, LOW_PRIORITY
}
export interface Task{
    date: Date,
    taskText:string,
    description: string,
    status:Status,
    priority:Priority
}