-- CreateTable
CREATE TABLE "jogos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "desenvolvedor" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "anoLancamento" INTEGER NOT NULL,
    "preco" DECIMAL(10,2) NOT NULL,
    "descricao" TEXT NOT NULL,
    "crestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jogos_pkey" PRIMARY KEY ("id")
);
