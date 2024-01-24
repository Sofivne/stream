import { Router } from 'express';
import * as UserController from "./controllers/userController.js";
import * as AuthController from "./controllers/authController.js"
export const routes = Router();

routes.get('/users', UserController.getUser);
routes.get('/users/:id', UserController.getUserById);
routes.post("/login", AuthController.login)

