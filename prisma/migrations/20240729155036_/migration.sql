-- CreateTable
CREATE TABLE "EvidenceCashExpenditure" (
    "id" TEXT NOT NULL,
    "idInvoice" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EvidenceCashExpenditure_pkey" PRIMARY KEY ("id")
);
