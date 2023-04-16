import express from "express";
import {
  see,
  getEdit,
  postEdit,
  videoDelete,
} from "../controller/videoController.js";

const videoRouter = express.Router();

videoRouter.route("/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id", see);
videoRouter.get("/:id/delete", videoDelete);

export default videoRouter;
