export interface Task {
    id?: string,
    name: string,
    create: string,
    end?: string,
    isDone: boolean,
    plannedDate?: string,
    priority?: number
}