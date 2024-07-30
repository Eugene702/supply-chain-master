"use server"

import { Prisma } from "@prisma/client"
import prisma from "../../../../../../prisma/database"
import { revalidatePath } from "next/cache"

export type GetSupplierDataPayload = Prisma.UserGetPayload<{
    include: {
        supplier: true
    }
}>

export const getSupplierData = async () => {
    try {
        return await prisma.user.findMany({
            where: {
                deletedAt: null,
                role: "SUPPLIER"
            },
            include: {
                supplier: true
            }
        })
    } catch {
        throw new Error('Ada kesalahan pada server!')
    }
}

export type GetDataPayload = Prisma.PurchaseRequestItemGetPayload<{
    include: {
        item: true
    }
}>

export const getData = async (id: string) => {
    try {
        return await prisma.purchaseRequestItem.findMany({
            where: {
                idPurchaseRequest: id
            },
            include: {
                item: true
            }
        })
    } catch {
        throw new Error('Ada kesalahan pada server!')
    }
}

export const rejectdata = async (id: string) => {
    try{
        await prisma.purchaseRequest.update({
            where: {
                id
            },
            data: {
                status: 'REJECTED'
            }
        })

        revalidatePath("/", "layout")
    }catch{
        throw new Error('Ada kesalahan pada server!')
    }
}

export const addData = async (id: string, data: { purchaseRequestItem: string, supplier: string }[]) => {
    try {
        const distinctSuppliers = Array.from(new Set(data.map(item => item.supplier)));
        await prisma.$transaction(async trans => {
            const countPurchase = await trans.purchase.count();
            await Promise.all(distinctSuppliers.map(async (supplier, index) => {
                const paddedCount = String(countPurchase + index).padStart(3, '0');
                const purchaseId = `SP${paddedCount}`;
                const purchaseItems = data.filter(item => item.supplier === supplier).map(item => ({
                    idPurchaseRequestItem: item.purchaseRequestItem
                }));
                await trans.purchase.create({
                    data: {
                        id: purchaseId,
                        status: 'PENDING',
                        month: new Date().getMonth() + 1,
                        year: new Date().getFullYear(),
                        idSupplier: supplier,
                        purchaseItem: {
                            createMany: {
                                data: purchaseItems
                            }
                        }
                    }
                });
            }));

            await trans.purchaseRequest.update({
                where: {
                    id
                },
                data: {
                    status: 'APPROVED'
                }
            });
        });

        revalidatePath("/", "layout")
    } catch(e) {
        console.log(e)
        throw new Error('Ada kesalahan pada server!');
    }
}