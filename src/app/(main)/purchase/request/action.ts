"use server"

import prisma from "../../../../../prisma/database"

export const getData = async (search: string) => {
    try{
        return await prisma.purchaseRequest.findMany({
            where: {
                deletedAt: null,
                status: 'PENDING',
                id: {
                    contains: search ?? '',
                    mode: 'insensitive'
                }
            },
        })
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}