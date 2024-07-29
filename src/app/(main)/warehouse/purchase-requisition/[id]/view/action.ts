"use server"

import { Prisma } from "@prisma/client"
import prisma from "../../../../../../../prisma/database"

export type GetDataPayload = Prisma.PurchaseRequestGetPayload<{
    include: {
        purchaseRequestItem: {
            include: {
                item: true
            }
        }
    }
}>

export const getData = async (id: string) => {
    try{
        return await prisma.purchaseRequest.findUnique({
            where: {
                id
            },
            include: {
                purchaseRequestItem: {
                    include: {
                        item: true
                    }
                }
            }
        })
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}