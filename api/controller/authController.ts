import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

export const login = (req: Request, res: Response) => {
    // TODO: make login function
}