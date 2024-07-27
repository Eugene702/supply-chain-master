"use server"

import { Prisma } from "@prisma/client"
import prisma from "../../../../prisma/database"

export type GetDataPayload = Prisma.UserGetPayload<{
    select: {
        id: true,
        email: true,
        role: true,
        profile: {
            select: {
                name: true,
            }
        }
    }
}>
export const getData = async(search: string) => {
    try{
        const user = await prisma.user.findMany({
            where: {
                profile: {
                    name: {
                        contains: search ?? '',
                        mode: 'insensitive'
                    }
                },
                email: {
                    contains: search ?? '',
                    mode: 'insensitive'
                }
            },
            select: {
                id: true,
                email: true,
                role: true,
                profile: {
                    select: {
                        name: true,
                    }
                }
            }
        })

        return user
    }catch{
        throw new Error('Kesalahan pada server!')
    }
}