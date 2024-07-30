"use server"

import prisma from "../../../../prisma/database"

export const getData = async (search: string) => {
    try{
        return await prisma.purchase.findMany({
            where: {
                deletedAt: null,
                status: 'PENDING',
                OR: [
                    {
                        id: {
                            contains: search ?? '',
                            mode: 'insensitive'
                        }
                    }
                ]
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}