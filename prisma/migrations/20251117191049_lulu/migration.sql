/*
  Warnings:

  - You are about to drop the column `usuario` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `crestedAt` on the `consoles` table. All the data in the column will be lost.
  - You are about to drop the column `crestedAt` on the `jogos` table. All the data in the column will be lost.
  - Added the required column `usuarioId` to the `avaliacoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "avaliacoes" DROP COLUMN "usuario",
ADD COLUMN     "consoleId" INTEGER,
ADD COLUMN     "jogoId" INTEGER,
ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "consoles" DROP COLUMN "crestedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "jogos" DROP COLUMN "crestedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jogo_console" (
    "jogoId" INTEGER NOT NULL,
    "consoleId" INTEGER NOT NULL,

    CONSTRAINT "jogo_console_pkey" PRIMARY KEY ("jogoId","consoleId")
);

-- CreateTable
CREATE TABLE "usuario_jogo" (
    "usuarioId" INTEGER NOT NULL,
    "jogoId" INTEGER NOT NULL,

    CONSTRAINT "usuario_jogo_pkey" PRIMARY KEY ("usuarioId","jogoId")
);

-- CreateTable
CREATE TABLE "usuario_console" (
    "usuarioId" INTEGER NOT NULL,
    "consoleId" INTEGER NOT NULL,

    CONSTRAINT "usuario_console_pkey" PRIMARY KEY ("usuarioId","consoleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "jogos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_consoleId_fkey" FOREIGN KEY ("consoleId") REFERENCES "consoles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogo_console" ADD CONSTRAINT "jogo_console_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "jogos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogo_console" ADD CONSTRAINT "jogo_console_consoleId_fkey" FOREIGN KEY ("consoleId") REFERENCES "consoles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_jogo" ADD CONSTRAINT "usuario_jogo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_jogo" ADD CONSTRAINT "usuario_jogo_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "jogos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_console" ADD CONSTRAINT "usuario_console_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_console" ADD CONSTRAINT "usuario_console_consoleId_fkey" FOREIGN KEY ("consoleId") REFERENCES "consoles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
