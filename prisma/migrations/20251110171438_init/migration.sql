-- CreateTable
CREATE TABLE "avaliacoes" (
    "id" SERIAL NOT NULL,
    "usuario" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,
    "nota" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "avaliacoes_pkey" PRIMARY KEY ("id")
);
