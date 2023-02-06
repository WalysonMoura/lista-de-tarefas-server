import { Inject,Injectable } from "tsyring";
import { IcreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { ITaskRepository } from "../../repositories/ITaskRepository";

@Injectable
export class createTaskUseCase {
  constructor(
    @Inject("TaskReposiitory")
    private taskRepository: ITaskRepository
  ) {}

  async execute({ title }: IcreateTaskDTO): Promise<void> {
    await this.taskRepository.create({
      title,
    });
  }
}
