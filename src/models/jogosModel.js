import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const findAll = async () => {
  return await prisma.jogo.findMany({
    orderBy: { nome: 'asc' },
  })
}

export const findById = async (id) => {
    return await prisma.jogo.findUnique({
        where: { id: Number(id)}
    })
}

export const criarJogo = async (data) => {
    return await prisma.jogo.create({
        data: {
            nome:data.nome,
            desenvolvedor:data.desenvolvedor,
            genero:data.genero,
            anoLancamento:data.anoLancamento,
            preco:data.preco,
            descricao:data.descricao 
        }
    })

}
export const atualizarJogo = async (id, dados) => {
    return await prisma.jogo.update({
        where: { id: Number (id) },
        data: {
          ...(dados.nome && { nome: dados.nome }),
          ...(dados.desenvolvedor && { desenvolvedor: dados.desenvolvedor }),
          ...(dados.genero && { genero: dados.genero }),
          ...(dados.anoLancamento && { anoLancamento: dados.anoLancamento }),
          ...(dados.preco && { preco: dados.preco }),
          ...(dados.descricao && { descricao: dados.descricao }),
        }
    });
  }



export const deleteJogo = async (id) => {
    return await prisma.jogo.delete({
        where: { id: Number(id)}
    });
}