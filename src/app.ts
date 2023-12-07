import "dotenv/config";
import express from "express";
import db from "./config/db";
import morgan from "morgan";
import userRouter from "./router/user.router";

db();
export const port = process.env.PORT || 3000;
export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", userRouter);
