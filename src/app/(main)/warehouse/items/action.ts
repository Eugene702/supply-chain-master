"use server"

import { revalidatePath } from "next/cache"
import prisma from "../../../../../prisma/database"

export const getData = async (search: string) => {
    try{
        const data = await prisma.item.findMany({
            where: {
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
        await prisma.item.delete({
            where: {
                id
            }
        })

        revalidatePath("/", "layout")
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}