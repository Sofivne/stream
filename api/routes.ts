
import { Router } from 'express';
import * as UserController from "./controller/userController";
import * as authController from "./controller/authController";

export const routes = Router();

routes.get('/users', UserController.getUser);
routes.get('/users/:id', UserController.getUserByID);
routes.post("/login", authController.login)