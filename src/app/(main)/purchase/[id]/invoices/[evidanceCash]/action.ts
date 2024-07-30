"use server"

import { Prisma } from "@prisma/client"
import prisma from "../../../../../../../prisma/database"

export type GetDataPayload = Prisma.EvidenceCashExpenditureGetPayload<{
    include: {
        invoice: {
            include: {
                invoiceItem: true
            }
        },
        supplier: true
    }
}>
export const getData = async (id: string) => {
    try{
        console.log(id)
        return await prisma.evidenceCashExpenditure.findUnique({
            where: {
                id: id
            },
            include: {
                invoice: {
                    include: {
                        invoiceItem: true
                    }
                },
                supplier: true
            }
        })
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}