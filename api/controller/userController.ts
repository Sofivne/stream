import {PrismaClient} from "@prisma/client"
import {Request, Response} from "express";
import {User} from "../models/user";
import {HTTP_STATUS} from "../enums/status"

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try{
        const user = prisma.users.findMany()
        res.send(user)
        console.log(user)
    }catch (e){
        res.send(HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
}


export const getUserByID = async (req: Request, res: Response): Promise<void>=>{
    const id_user = parseInt(req.params.id)
    try{
        const userById = await prisma.users.findUnique({ where: { id: id_user } });
        res.send(userById)
    }
    catch (e) {
        res.send(HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
}

