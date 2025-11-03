import { PrismaClient } from '@prisma/client'
import { seedConsoles } from './seedConsoles.js'
import { seedJogos } from './seedJogos.js'

const prisma = new PrismaClient()

async function main() {
  console.log("\n🚀 Executando Seed Mestre (Consoles + Jogos)...")

  try {
    const consoleCount = await seedConsoles(prisma)
    console.log(`[MASTER] Consoles seeded: ${consoleCount}`)

    const jogosCount = await seedJogos(prisma)
    console.log(`[MASTER] Jogos seeded: ${jogosCount}`)

    console.log("\n✨ Seed Mestre Finalizado com Sucesso!")
  } catch (e) {
    throw e
  }
}

main()
  .catch((e) => {
    console.error("❌ ERRO FATAL no Seed Mestre:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
