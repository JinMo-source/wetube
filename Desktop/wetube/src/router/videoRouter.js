import express from "express";
import { see, videoEdit, videoDelete } from "../controller/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", videoEdit);
videoRouter.get("/:id/delete", videoDelete);

export default videoRouter;
