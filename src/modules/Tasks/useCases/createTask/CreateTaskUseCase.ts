import { Inject } from "tsyring";
import { IcreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { ITaskRepository } from "../../repositories/ITaskRepository";

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
