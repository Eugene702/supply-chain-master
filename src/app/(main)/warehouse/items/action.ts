"use server"

import { revalidatePath } from "next/cache"
import prisma from "../../../../../prisma/database"

export const getData = async (search: string) => {
    try{
        const data = await prisma.item.findMany({
            where: {
                deletedAt: null,
                name: {
                    contains: search ?? '',
                    mode: 'insensitive'
                },
                stock: {
                    gt: isNaN(Number(search)) ? 0 : Number(search)
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        return data
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}

export const deleteData = async (id: string) => {
    try{
        await prisma.item.update({
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