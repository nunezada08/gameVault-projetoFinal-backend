/*
  Warnings:

  - You are about to drop the column `createdAt` on the `jogos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "jogos" DROP COLUMN "createdAt",
ADD COLUMN     "crestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imagens" TEXT[] DEFAULT ARRAY[]::TEXT[];
