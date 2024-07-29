"use server"

import { revalidatePath } from "next/cache"
import prisma from "../../../../../prisma/database"
import { Prisma } from "@prisma/client"

export type GetDataPayload = Prisma.PurchaseRequestGetPayload<{
    include: {
        purchaseRequestItem: {
            include: {
                item: true
            }
        }
    }
}>
export const getData = async () => {
    try{
        return await prisma.purchaseRequest.findMany({
            where: {
                deletedAt: null
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

export const deleteData = async (id: string) => {
    try{
        await prisma.purchaseRequest.update({
            where: {
                id
            },
            data: {
                deletedAt: new Date()
            }
        })

        revalidatePath("/", "layout")
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}