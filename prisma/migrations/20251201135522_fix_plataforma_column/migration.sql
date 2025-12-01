/*
  Warnings:

  - You are about to drop the column `plataformas` on the `jogos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "jogos" DROP COLUMN "plataformas",
ADD COLUMN     "plataforma" TEXT[] DEFAULT ARRAY[]::TEXT[];
