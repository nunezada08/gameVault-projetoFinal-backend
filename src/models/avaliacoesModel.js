import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const includeRelations = {
    include: {
        usuario: {
            select: {
                id: true,
                nome: true
            }
        },
        jogo: {
            select: {
                id: true,
                nome: true
            }
        },
        console: {
            select: {
                id: true,
                nome: true
            }
        },
    }
};

export const findAll = async () => {
    return await prisma.avaliacao.findMany({
        orderBy: {
            usuarioId: 'asc'
        },
        ...includeRelations
    })
}

export const findById = async (id) => {
    const numericId = parseInt(id);

    if (isNaN(numericId)) {
        throw new Error("ID inválido fornecido para busca de avaliação.");
    }
    
    return await prisma.avaliacao.findUnique({
        where: { id: numericId },
        ...includeRelations
    })
}
export const updateAvaliacao = async (id, dados) => {
    const numericId = parseInt(id);
    if (isNaN(numericId)) {
        throw new Error("ID inválido fornecido para atualização de avaliação.");
    }
    return await prisma.avaliacao.update({
        where: { id: numericId },
        data: dados,
        ...includeRelations
    })
}
export const deleteAvaliacao = async (id) => {
    const numericId = parseInt(id);
    if (isNaN(numericId)) { 
        throw new Error("ID inválido fornecido para exclusão de avaliação.");
    }
    return await prisma.avaliacao.delete({
        where: { id: numericId },
        ...includeRelations
    })
}