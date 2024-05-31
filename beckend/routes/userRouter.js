import express from "express";
import {
  getCurrentUser,
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/usersControllers.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);

userRouter.post("/login", userLogin);

userRouter.post("/logout", userLogout);

userRouter.get("/current", getCurrentUser);

export default userRouter;
