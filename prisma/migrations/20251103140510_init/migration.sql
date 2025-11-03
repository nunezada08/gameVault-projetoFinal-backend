-- CreateTable
CREATE TABLE "consoles" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nota" DECIMAL(10,2) NOT NULL,
    "anoLancamento" INTEGER NOT NULL,
    "preco" DECIMAL(10,2) NOT NULL,
    "descricao" TEXT NOT NULL,
    "crestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "consoles_pkey" PRIMARY KEY ("id")
);
