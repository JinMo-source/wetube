import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter.js";
import userRouter from "./router/userRouter.js";
import videoRouter from "./router/videoRouter";

const app = express();

const logger = morgan("dev");

app.use(logger);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

const handleListen = () => console.log("http://localhost.4000");
app.listen(4000, handleListen);
