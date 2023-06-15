import "reflect-metadata";
import "./database";
import express from "express";
import { authRouter } from "./routes/authRoutes";
import { userRouter } from "./routes/userRoutes";
import { urlRouter } from "./routes/urlRoutes";
import cors from "cors";

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(cors())
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/url", urlRouter);

app.listen(port, () => console.log(`App listening on port ${port}.`));