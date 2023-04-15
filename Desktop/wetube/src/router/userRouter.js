import express from "express";
import {
  user,
  userEdit,
  profileDelete,
  logout,
} from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get("/user", user);
userRouter.get("/:id/edit", userEdit);
userRouter.get("/delete", profileDelete);
userRouter.get("/logout", logout);

export default userRouter;
