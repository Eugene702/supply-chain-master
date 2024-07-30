/*
  Warnings:

  - A unique constraint covering the columns `[idPurchase]` on the table `Invoices` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idPurchase` to the `Invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoices" ADD COLUMN     "idPurchase" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_idPurchase_key" ON "Invoices"("idPurchase");

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_idPurchase_fkey" FOREIGN KEY ("idPurchase") REFERENCES "Purchase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
