"use server"

import { Prisma } from "@prisma/client"
import prisma from "../../../../../../prisma/database"

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
        user: {
            include: {
                supplier: true
            }
        }
    }
}>
export const getData = async (id: string) => {
    try{
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
                user: {
                    include: {
                        supplier: true
                    }
                }
            }
        })
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}