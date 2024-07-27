"use server"

import { $Enums } from "@prisma/client"
import prisma from "../../../../../prisma/database"

export const checkEmail = async (email: string) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        return user == null
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}

export const addUser = async (uid: string, name: string, email: string, role: string) => {
    try{
        const user = await prisma.user.create({
            data: {
                id: uid,
                email,
                role: role as $Enums.Role,
                profile: {
                    create: {
                        name
                    }
                }
            }
        })
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}