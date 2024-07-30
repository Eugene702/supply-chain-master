/*
  Warnings:

  - You are about to drop the column `idPurchaseRequestItem` on the `Purchase` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "idPurchaseRequestItem";

-- CreateTable
CREATE TABLE "PurchaseItem" (
    "id" TEXT NOT NULL,
    "idPurchase" TEXT NOT NULL,
    "idPurchaseRequestItem" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "PurchaseItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_idSupplier_fkey" FOREIGN KEY ("idSupplier") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseItem" ADD CONSTRAINT "PurchaseItem_idPurchase_fkey" FOREIGN KEY ("idPurchase") REFERENCES "Purchase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseItem" ADD CONSTRAINT "PurchaseItem_idPurchaseRequestItem_fkey" FOREIGN KEY ("idPurchaseRequestItem") REFERENCES "PurchaseRequestItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
