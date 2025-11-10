import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const findAll = async () => {
  return await prisma.avaliacao.findMany({
    orderBy: { 
        usuario: 'asc' 
    },
  })
}

export const findById = async (id) => {
  return await prisma.avaliacao.findUnique({
    where: { id: Number(id) },
  })
}