import { Router } from "express"
import { tasksRoutes } from "./task.routes"

const router = Router()

router.use("/tasks",tasksRoutes)


export { router }