"use server"

import { $Enums } from "@prisma/client"
import prisma from "../../../../../../prisma/database"
import { revalidatePath } from "next/cache"

export const addData = async(name: string, stock: number, units: string) => {
    try{
        await prisma.item.create({
            data: {
                name: name,
                stock: stock,
                unit: units as $Enums.Unit
            }
        })

        revalidatePath("/", "layout")
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}