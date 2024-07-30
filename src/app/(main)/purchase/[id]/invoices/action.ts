"use server"

import { Prisma } from "@prisma/client"
import prisma from "../../../../../../prisma/database"
import { revalidatePath } from "next/cache"

export type GetDataPayload = Prisma.InvoicesGetPayload<{
    include: {
        invoiceItem: {
            include: {
                purchaseItem: {
                    include: {
                        purchaseRequestItem: {
                            include: {
                                item: true
                            }
                        }
                    }
                }
            }
        },
        evidenceCashExpenditure: true,
        user: {
            include: {
                supplier: true
            }
        }
    }
}>
export const getData = async (id: string) => {
    try {
        return await prisma.invoices.findUnique({
            where: {
                idPurchase: id
            },
            include: {
                invoiceItem: {
                    include: {
                        purchaseItem: {
                            include: {
                                purchaseRequestItem: {
                                    include: {
                                        item: true
                                    }
                                }
                            }
                        }
                    }
                },
                evidenceCashExpenditure: true,
                user: {
                    include: {
                        supplier: true
                    }
                }
            }
        })
    } catch {
        throw new Error('Ada kesalahan pada server!')
    }
}

export const finsihedPayment = async (id: string, idSupplier: string) => {
    try {
        const countData = await prisma.evidenceCashExpenditure.count()
        const paddedCount = String(countData + 1).padStart(3, '0');
        const idData = `BK${paddedCount}`;
        await prisma.evidenceCashExpenditure.create({
            data: {
                idInvoice: id,
                id: idData,
                idSupplier: idSupplier
            }
        })

        revalidatePath("/", "layout")
    } catch (e){
        console.log(e)
        throw new Error('Ada kesalahan pada server!')
    }
}