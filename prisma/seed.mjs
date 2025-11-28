import { PrismaClient } from '@prisma/client'
import { seedConsoles } from './seedConsoles.js'
import { seedJogos } from './seedJogos.js'
import { seedAvaliacoes } from './seedAvaliacoes.js'

const prisma = new PrismaClient()

async function main() {
  console.log("\n🚀 Executando Seed Principal (Consoles + Jogos)...")

  try {
    const consoleCount = await seedConsoles(prisma)
    console.log(`[MAIN] Consoles seeded: ${consoleCount}`)

    const jogosCount = await seedJogos(prisma)
    console.log(`[MAIN] Jogos seeded: ${jogosCount}`)

    const avaliacoesCount = await seedAvaliacoes(prisma)
    console.log(`[MAIN] Jogos seeded: ${avaliacoesCount}`)

    console.log("\n✨ Seed Principal Finalizado com Sucesso!")
  } catch (e) {
    throw e
  }
}

main()
  .catch((e) => {
    console.error("❌ ERRO FATAL no Seed Principal:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


  /* 
  A seed.mjs foi feita para que eu pudesse rodar todas as seeds que foram feitas separadamente, para isso exportamos as seeds e importamos para essa seed principal, preferimos usar as seeds desta maneira pois é melhor para que consigamos achar o erro mais facilmente, já que o erro aparece em uma das seeds especificas.
   */