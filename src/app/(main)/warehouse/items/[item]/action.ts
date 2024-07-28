"use server"

import { $Enums } from "@prisma/client"
import prisma from "../../../../../../prisma/database"
import { revalidatePath } from "next/cache"

export const getItem = async (id: string) => {
    try{
        const item = await prisma.item.findUnique({
            where: {
                id
            }
        })

        return item
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}


export const update = async (id: string, data: { name: string, stock: number, unit: $Enums.Unit }) => {
    try{
        await prisma.item.update({
            where: {
                id
            },
            data: {
                name: data.name,
                stock: data.stock,
                unit: data.unit
            }
        })

        revalidatePath("/", "layout")
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}