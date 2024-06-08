import { Router } from "express";
import { checkOtp, deleteUser, getMeUser, getallUsers, logoutUser, signInUser, signUpUser } from "../controllers/auth.controller.js";
import { userMiddleware } from "../middlewares/auth.middleware.js";
import { roleGuard } from "../middlewares/roleGuard.middleware.js";

export const authRouter = Router();

authRouter.post('/signup', signUpUser);
authRouter.post('/signin', signInUser);
authRouter.get('/getMe', userMiddleware, getMeUser);
authRouter.get('/logout', userMiddleware, logoutUser);
authRouter.get('/user', getallUsers);
authRouter.delete('/user/:id', deleteUser);
authRouter.post('/otpverify', checkOtp);


authRouter.get('/api/protected', userMiddleware, roleGuard('Admin'), getMeUser);
