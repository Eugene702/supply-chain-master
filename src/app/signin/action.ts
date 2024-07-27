"use server"

import prisma from "../../../prisma/database"

export const checkEmail = async (email: string) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        return user != null
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}