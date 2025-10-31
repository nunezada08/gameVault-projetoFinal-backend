import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findALL =  async () => {
    return await prisma.jogos.findMany({
        orderBy: { nome: 'asc' }
    });
}