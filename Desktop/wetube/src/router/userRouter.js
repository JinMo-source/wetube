import express from "express";
import {
  user,
  userEdit,
  profileDelete,
  logout,
  startGithubLogin,
  finishGithubLogin,
} from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get("/user", user);
userRouter.get("/:id/edit", userEdit);
userRouter.get("/delete", profileDelete);
userRouter.get("/logout", logout);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);

export default userRouter;
