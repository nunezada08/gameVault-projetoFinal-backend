import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const findAll = async () => {
  return await prisma.console.findMany({
    orderBy: { nome: 'asc' },
  })
}

export const findById = async (id) => {
  return await prisma.console.findUnique({
    where: { id: Number(id) },
  })
}

export const create = async (data) => {
  return await prisma.console.create({
    data: {
      nome: data.nome,
      nota: data.nota,
      anoLancamento: data.anoLancamento,
      preco: data.preco,
      descricao: data.descricao,
    },
  })
}

export const deleteConsole = async (id) => {
  return await prisma.console.delete({
    where: { id: Number(id) },
  })
}

 export const update = async (id, data) => {
    return await prisma.console.update({
        where: { id: Number(id) },
        data: {
            ...(data.nome && { nome: data.nome }),
            ...(data.nota && { nota: Number(data.nota)}),
            ...(data.anoLancamento && { anoLancamento: Number(data.anoLancamento)}),
            ...(data.preco && { preco: Number(data.preco)}),
            ...(data.descricao && { descricao: data.descricao })
        }
    })
  }