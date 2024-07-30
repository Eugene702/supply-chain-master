/*
  Warnings:

  - You are about to drop the column `idUser` on the `EvidenceCashExpenditure` table. All the data in the column will be lost.
  - Added the required column `idSupplier` to the `EvidenceCashExpenditure` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EvidenceCashExpenditure" DROP COLUMN "idUser",
ADD COLUMN     "idSupplier" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "EvidenceCashExpenditure" ADD CONSTRAINT "EvidenceCashExpenditure_idSupplier_fkey" FOREIGN KEY ("idSupplier") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvidenceCashExpenditure" ADD CONSTRAINT "EvidenceCashExpenditure_idInvoice_fkey" FOREIGN KEY ("idInvoice") REFERENCES "Invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
