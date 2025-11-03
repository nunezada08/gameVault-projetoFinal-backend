import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.console.findMany({
        orderBy: { nome: 'asc'}
    });
}