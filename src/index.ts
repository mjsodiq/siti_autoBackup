// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { runBackupDb } from "./runBackupDb";
import { runBackupExcel } from "./runBackupExcel";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// RUN BACKUP
setInterval(async () => {
  await runBackupDb();
  await runBackupExcel();
}, 3600000);

app.get("/", async (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
