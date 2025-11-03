import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findALL =  async () => {
    return await prisma.jogo.findMany({
        orderBy: { nome: 'asc' }
    });
}

export const findById = async (id) => {
    return await prisma.jogo.findUnique({
        where: { id: Number(id)}
    })
}

























export const deleteJogo = async (id) => {
    return await prisma.jogo.delete({
        where: { id: Number(id)}
    });
}