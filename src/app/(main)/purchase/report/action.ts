"use server"

import { Prisma } from "@prisma/client"
import prisma from "../../../../../prisma/database"

export type GetDataPayload = Prisma.InvoicesGetPayload<{
    include: {
        invoiceItem: true
    },
}>
export const getData = async (month: number, year: number) => {
    try{
        return await prisma.invoices.findMany({
            where: {
                AND: {
                    month: parseInt(month.toString()),
                    year: parseInt(year.toString())
                }
            },
            include: {
                invoiceItem: true
            },
            orderBy: {
                month: 'asc'
            }
        })
    }catch(e){
        console.log(e)
        throw new Error('Ada kesalahan pada server!')
    }
}