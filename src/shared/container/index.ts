import { container } from "tsyrind";

// Tasks
import { ITaskRepository } from "../../modules/tasks/repositories/ITaskReposiitory";
import { TaskRepository } from "../../modules/tasks/repositories/implementations/TaskReposiitory";

container.registerSingleton<ITaskRepository>(
  "TaskReposiitory",
  TaskReposiitory
);
