"use server"

import { $Enums } from "@prisma/client"
import prisma from "../../../../../prisma/database"
import { revalidatePath } from "next/cache"

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

export const addUser = async (name: string, email: string, role: string) => {
    try{
        const user = await prisma.user.create({
            data: {
                email,
                role: role as $Enums.Role,
                profile: role != $Enums.Role.SUPPLIER ? {
                    create: {
                        name
                    }
                } : undefined,
                supplier: role == $Enums.Role.SUPPLIER ? {
                    create: {
                        name: name,
                        address: '',
                    }
                } : undefined
            }
        })

        revalidatePath("/", "layout")
    }catch(e){
        console.log(e)
        throw new Error('Ada kesalahan pada server!')
    }
}