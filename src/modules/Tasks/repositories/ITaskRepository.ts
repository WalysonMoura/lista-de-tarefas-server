export interface IcreateTaskDTO {
    title: string
}


export interface ITaskRepository {
    create({title}: IcreateTaskDTO): Promise<void>
} 

