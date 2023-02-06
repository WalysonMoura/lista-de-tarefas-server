import { Router } from "express";
import { CreateTaskController } from "../modules/Tasks/useCases/createTask/CreateTaskController";

const tasksRoutes = Router();
const createTaskController = new CreateTaskController();

tasksRouter.post("/", createTaskController.handle);

export { tasksRoutes };
