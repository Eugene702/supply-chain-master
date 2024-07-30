"use server"

import { Prisma } from "@prisma/client"
import prisma from "../../../../../prisma/database"
import { revalidatePath } from "next/cache"

export type GetDataPayload = Prisma.PurchaseGetPayload<{
    include: {
        purchaseItem: {
            include: {
                purchaseRequestItem: {
                    include: {
                        item: true
                    }
                }
            }
        }
    }
}>

export const getData = async (id: string) => {
    try {
        return await prisma.purchase.findUnique({
            where: {
                id
            },
            include: {
                purchaseItem: {
                    include: {
                        purchaseRequestItem: {
                            include: {
                                item: true,
                            }
                        }
                    }
                }
            }
        })
    } catch {
        throw new Error('Ada kesalahan pada server!')
    }
}

export const rejectData = async (id: string) => {
    try {
        await prisma.purchase.update({
            where: {
                id
            },
            data: {
                status: 'REJECTED'
            }
        })

        revalidatePath("/", "layout")
    } catch {
        throw new Error('Ada kesalahan pada server!')
    }
}

export const saveData = async (idSupplier: string, idPurchase: string, data: { idPurchaseItem: string, qty: number, price: number }[]) => {
    try {
        await prisma.$transaction(async e => {
            const invoiceCount = await prisma.invoices.count()
            const paddedCount = `${invoiceCount + 1}`.padStart(3, '0')
            const invoiceId = `FP${paddedCount}`

            await e.invoices.create({
                data: {
                    id: invoiceId,
                    idSupplier: idSupplier,
                    idPurchase: idPurchase,
                    month: new Date().getMonth() + 1,
                    year: new Date().getFullYear(),
                    invoiceItem: {
                        createMany: {
                            data: data.map(a => ({
                                idPurchaseItem: a.idPurchaseItem,
                                qty: a.qty,
                                price: a.price
                            }))
                        }
                    }
                }
            })

            await Promise.all(data.map(async a => {
                const getPurchaseItem = await e.purchaseItem.findUnique({
                    where: {
                        id: a.idPurchaseItem
                    },
                    include: {
                        purchaseRequestItem: true
                    }
                })

                if(getPurchaseItem){
                    const getItem = await e.item.findUnique({
                        where: {
                            id: getPurchaseItem.purchaseRequestItem.idItem
                        }
                    })

                    if(getItem){
                        await e.item.update({
                            where: {
                                id: getItem.id
                            },
                            data: {
                                stock: getItem.stock + a.qty
                            }
                        })
                    }else{
                        throw new Error('Barang tidak ditemukan!')
                    }
                }else{
                    throw new Error('Ada kesalahan pada server!')
                }
            }))

            await e.purchase.update({
                where: {
                    id: idPurchase
                },
                data: {
                    status: 'APPROVED'
                }
            })
        })

        revalidatePath("/", "layout")
    } catch(e) {
        console.log(e)
        throw new Error('Ada kesalahan pada server!')
    }
}
