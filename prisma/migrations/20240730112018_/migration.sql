/*
  Warnings:

  - A unique constraint covering the columns `[idInvoice]` on the table `EvidenceCashExpenditure` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EvidenceCashExpenditure_idInvoice_key" ON "EvidenceCashExpenditure"("idInvoice");
