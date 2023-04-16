import express from "express";
import { join, login, trending } from "../controller/userController.js";
import { search } from "../controller/videoController.js";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
