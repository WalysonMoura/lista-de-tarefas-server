import { IcreateTaskDTO } from "../../dtos/ICreateTaskDTO";

export interface ITaskRepository {
    create({title}: IcreateTaskDTO): Promise<void>
} 

