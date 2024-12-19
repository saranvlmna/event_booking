import express from "express";
import userLogin from "./user.login.js";
import userSignup from "./user.signup.js";
const userRouter = express.Router();

userRouter.post("/login", userLogin);
userRouter.post("/signup", userSignup);

export default userRouter;
