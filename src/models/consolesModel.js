






export const findById = async (id) => {
    return await prisma.console.findUnique({
        where: { id: Number(id)}
    })
}


export const create = async (data) => {
    return await prisma.console.create({
        data: {
            nome:data.nome,
            nota:data.nota,
            anoLancamento:data.anoLancamento,
            preco:data.preco,
            descricao:data.descricao 
        }
    })

}














































export const deleteConsole = async (id) => {
    return await prisma.console.delete({
        where: { id: Number(id)}
    });
}