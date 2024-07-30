-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_idPurchase_fkey" FOREIGN KEY ("idPurchase") REFERENCES "Purchase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_idSupplier_fkey" FOREIGN KEY ("idSupplier") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
