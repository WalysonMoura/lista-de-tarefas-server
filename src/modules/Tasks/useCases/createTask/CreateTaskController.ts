import { Request, Response } from "express";
import { container } from "tsyring";

import { createTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title } = req.body;

    const createTaskUseCase = container.resolve(createTaskUseCase);

    await createTaskUseCase.execute({ title });

    return res.status(201).send();
  }
}
