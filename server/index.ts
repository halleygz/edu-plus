import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { config } from "./config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();
const PORT = config.server.port;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});