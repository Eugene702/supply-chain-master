"use server"

import { revalidatePath } from "next/cache"
import prisma from "../../../../../../../prisma/database"

export const getItems = async () => {
    try{
        const data = await prisma.item.findMany({
            where: {
                deletedAt: null,
            },
            orderBy: {
                name: 'asc'
            }
        })

        return data
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}

export const getData = async (id: string) => {
    try{
        return await prisma.purchaseRequest.findUnique({
            where: { id },
            include: {
                purchaseRequestItem: true
            }
        })
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}

export const updateData = async (id: string, data: {item: string, qty: number}[]) => {
    try{
        await prisma.purchaseRequest.update({
            where: { id },
            data: {
                purchaseRequestItem: {
                    deleteMany: {},
                    createMany: {
                        data: data.map(item => ({
                            idItem: item.item,
                            qty: item.qty
                         }))
                    }
                }
            }
        })

        revalidatePath("/", "layout")
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}