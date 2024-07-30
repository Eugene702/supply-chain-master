/*
  Warnings:

  - You are about to drop the column `price` on the `Invoices` table. All the data in the column will be lost.
  - You are about to drop the column `qty` on the `Invoices` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invoices" DROP COLUMN "price",
DROP COLUMN "qty";

-- CreateTable
CREATE TABLE "InvoiceItem" (
    "id" TEXT NOT NULL,
    "idInvoice" TEXT NOT NULL,
    "idPurchaseItem" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "InvoiceItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvoiceItem" ADD CONSTRAINT "InvoiceItem_idInvoice_fkey" FOREIGN KEY ("idInvoice") REFERENCES "Invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceItem" ADD CONSTRAINT "InvoiceItem_idPurchaseItem_fkey" FOREIGN KEY ("idPurchaseItem") REFERENCES "PurchaseItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
