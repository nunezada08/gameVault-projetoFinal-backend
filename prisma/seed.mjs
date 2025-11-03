// prisma/seed.mjs 
// Este é o script mestre que você executa via `npx prisma db seed`.

import { PrismaClient } from '@prisma/client';
// Certifique-se de que os nomes e caminhos dos arquivos de seed estão corretos.
import { seedConsoles } from './seedConsoles.js'; 
import { seedJogos } from './seedJogos.js'; 

const prisma = new PrismaClient();

/**
 * Função principal assíncrona que orquestra a execução de todos os seeds.
 */
async function main() {
    console.log("\n🚀 Executando Seed Mestre (Consoles + Jogos)...");

    try {
        // 1. Executa o Seed de Consoles
        const consoleCount = await seedConsoles(prisma); 
        console.log(`[MASTER] Consoles seeded: ${consoleCount}`);

        // 2. Executa o Seed de Jogos
        const jogosCount = await seedJogos(prisma);
        console.log(`[MASTER] Jogos seeded: ${jogosCount}`);
        
        console.log("\n✨ Seed Mestre Finalizado com Sucesso!");

    } catch (e) {
        // Se ocorrer um erro em qualquer seed, ele será capturado aqui.
        throw e; 
    }
}

// Bloco de execução principal, garantindo a desconexão do Prisma.
main()
    .catch((e) => {
        console.error("❌ ERRO FATAL no Seed Mestre:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });