import express from 'express';
import type {Router} from 'express';
import AuthenticationController from './controller.js';
import { restrictToAuthenticatedUsers } from '../middleware/auth.middleware.js';


export const authRouter: Router = express.Router();

const authController = new AuthenticationController();

authRouter.post("/signup",authController.handleSignup.bind(authController));
authRouter.post("/signin",authController.handleSingin.bind(authController));
authRouter.get("/me", restrictToAuthenticatedUsers(), authController.handleMe.bind(authController));

