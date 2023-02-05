import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prisma = new PrismaClient();

app.get("/", async () => {
  const task = await prisma.task.findMany();

  return task;
});

app.listen(3333, () => {
  console.log("Server in runing!");
});
