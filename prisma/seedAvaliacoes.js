import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const generateMockAvaliacoes = (count) => {
    const mockData = [];
    const nomes = ["Alice", "Bob", "Charlie", "Diana", "Eduardo", "Fábio", "Gustavo", "Helena", "Igor", "Juliana"];
    const comentariosBase = [
        "Incrível, superou minhas expectativas. Jogo obrigatório!",
        "Achei bom, mas o controle é um pouco desconfortável para longas sessões.",
        "Muito a desejar, a biblioteca de jogos é limitada em comparação com os rivais.",
        "Excelente custo-benefício, o preço atual é muito justo pelo que oferece.",
        "Funcionalidade mediana, mas a nostalgia é forte. Valeu a pena a compra.",
        "Sem palavras, o melhor design e a melhor experiência de usuário.",
        "Nota 10/10, o suporte da plataforma é um diferencial incrível.",
        "Decepcionante, a descrição não condiz com a realidade do hardware.",
        "Satisfeito, exatamente como anunciado. Roda todos os meus títulos preferidos.",
        "Poderia ter mais recursos de mídia, mas o foco em jogos é claro e funciona.",
        "Um produto razoável, sem grandes inovações, mas cumpre o que promete.",
        "Compra que vale a pena, estou viciado desde o primeiro dia de uso!",
    ];

    for (let i = 1; i <= count; i++) {
        const usuarioIndex = i % nomes.length;
        const comentarioIndex = Math.floor(Math.random() * comentariosBase.length);
        
    
        const notaNumerica = Math.random() * 9 + 1; 

        mockData.push({
            usuario: `${nomes[usuarioIndex]} ${i}`,
            comentario: comentariosBase[comentarioIndex],
            // Converte a nota para string com duas casas decimais, essencial para o tipo Decimal(10, 2)
            nota: notaNumerica.toFixed(2), 
        });
    }
    return mockData;
};


export async function seedAvaliacoes(prisma) {
    const numberOfReviews = 50;
    const avaliacoesData = generateMockAvaliacoes(numberOfReviews);

    console.log(`\n⭐️ Iniciando o seed de avaliações, criando ${numberOfReviews} reviews para a tabela 'Avaliacao'...`);

    const dataToInsert = avaliacoesData.map(avaliacao => ({
        ...avaliacao,
        comentario: avaliacao.comentario.substring(0, 500), 
    }));


    const { count } = await prisma.avaliacao.createMany({
        data: dataToInsert,
        skipDuplicates: true,
    });

    console.log(`\n✅ Sucesso! Total de ${count} avaliações criadas/verificadas na tabela 'Avaliacao'.`);
    return count;
}

async function main() {
    console.log('Iniciando o Seeding de Avaliacoes...');
    await seedAvaliacoes(prisma);
}

main()
  .catch((e) => {
    console.error('⚠️ Erro durante o seeding de Avaliacoes:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('\n✨ Seeding de Avaliacoes concluído. Conexão Prisma desconectada.');
  });