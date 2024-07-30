"use server"

import { revalidatePath } from "next/cache"
import prisma from "../../../../prisma/database"

export const getCountPurchaseRequest = async () => {
    try{
        return await prisma.purchaseRequest.count({
            where: {
                deletedAt: null,
                status: 'PENDING'
            }
        })
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}

export const getData = async (search: string) => {
    try{
        return await prisma.purchase.findMany({
            where: {
                deletedAt: null,
                OR: [
                    {
                        id: {
                            contains: search ?? '',
                            mode: 'insensitive'
                        }
                    }
                ]
            }
        })
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}

export const deleteData = async (id: string) => {
    try{
        await prisma.purchase.update({
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