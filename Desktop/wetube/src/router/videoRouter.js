import express from "express";
import {
  see,
  getUpload,
  postUpload,
  videoDelete,
} from "../controller/videoController.js";

const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get(`/:id([0-9a-f]{24})`, see);
videoRouter.get("/:id([0-9a-f]{24})/delete", videoDelete);

export default videoRouter;
