import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.users.findMany()
        res.json(users)
    } catch {
        res.status(500).json({ message: "Error retrieving user"})
    }
}
