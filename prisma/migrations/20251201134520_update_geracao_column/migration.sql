/*
  Warnings:

  - Added the required column `fabricante` to the `consoles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `geracao` to the `consoles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "consoles" ADD COLUMN     "fabricante" TEXT NOT NULL,
ADD COLUMN     "geracao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "jogos" ADD COLUMN     "plataformas" TEXT[] DEFAULT ARRAY[]::TEXT[];
