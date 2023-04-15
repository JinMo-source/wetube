import express from "express";
import { join, login } from "../controller/userController.js";
import { search } from "../controller/videoController.js";

const globalRouter = express.Router();

globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
