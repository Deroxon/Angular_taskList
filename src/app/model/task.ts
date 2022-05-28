export interface Task {
    _id?: { $oid: string},
    name: string,
    create: string,
    end?: string,
    isDone: boolean
}