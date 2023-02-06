import { PrismaClient } from "@prisma/client";

import { IcreateTaskDTO } from "../../../dtos/ICreateTaskDTO";
import { ITaskRepository } from "../ITaskRepository";

export class TaskRepository implements ITaskRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({ title }: IcreateTaskDTO): Promise<void> {
    await this.prisma.create.task({
      data: title,
    });
  }
}
