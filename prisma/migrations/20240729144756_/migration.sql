/*
  Warnings:

  - You are about to drop the column `idPurchase` on the `Invoices` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Invoices" DROP CONSTRAINT "Invoices_idPurchase_fkey";

-- AlterTable
ALTER TABLE "Invoices" DROP COLUMN "idPurchase";
