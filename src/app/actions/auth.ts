"use server"

import { Prisma } from "@prisma/client"
import prisma from "../../../prisma/database"

export type AuthUserPayload = Prisma.UserGetPayload<{
    select: {
        id: true,
        email: true,
        role: true,
        profile: {
            select: {
                name: true
            }
        }
    }
}>

export const getUser = async (uid: string) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                id: uid
            },
            select: {
                id: true,
                email: true,
                role: true,
                profile: {
                    select: {
                        name: true
                    }
                }
            }
        })

        return user
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}