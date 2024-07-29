"use server"

import { revalidatePath } from "next/cache"
import prisma from "../../../../../../prisma/database"

export const addData = async (form: {qty: number, item: string}[]) => {
    try{
        const countData = await prisma.purchaseRequest.count();
        const paddedCount = String(countData).padStart(3, '0');
        const id = `FP${paddedCount}`;

        await prisma.purchaseRequest.create({
            data: {
                id,
                status: 'PENDING',
                purchaseRequestItem: {
                    createMany: {
                        data: form.map(item => ({
                            idItem: item.item,
                            qty: item.qty
                        }))
                    }
                }
            }
        });

        revalidatePath("/", "layout")
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}

export const getItem = async () => {
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