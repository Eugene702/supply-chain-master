"use server"

import { Prisma } from "@prisma/client"
import prisma from "../../../../../../prisma/database"

export type GetDataPayload = Prisma.PurchaseGetPayload<{
    include: {
        user: {
            include: {
                supplier: true
            }
        },
        purchaseItem: {
            include: {
                purchaseRequestItem: {
                    include: {
                        item: true,
                        purchaseRequest: true
                    }
                }
            }
        }
    }
}>

export const getData = async (id: string) => {
    try{
        return await prisma.purchase.findUnique({
            where: {
                id
            },
            include: {
                user: {
                    include: {
                        supplier: true
                    }
                },
                purchaseItem: {
                    include: {
                        purchaseRequestItem: {
                            include: {
                                item: true,
                                purchaseRequest: true
                            }
                        }
                    }
                }
            }
        })
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}