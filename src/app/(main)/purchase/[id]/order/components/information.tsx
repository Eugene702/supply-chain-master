"use client"
import { useRef } from "react"
import { GetDataPayload } from "../action"
import { useReactToPrint } from "react-to-print"
import Letter from './letter'
import { moment } from "@/utils/utils"
import dynamic from "next/dynamic"

const PrintIcon = dynamic(() => import('@/assets/drawer/print'))

const Information = ({ data }: { data: GetDataPayload }) => {
    const ref = useRef<HTMLElement>(null)
    const handlePrint = useReactToPrint({
        content: () => ref.current
    })

    return <>
        <button className="btn btn-circle rounded-full" onClick={handlePrint}>
            <PrintIcon className="w-6 fill-gray-400" />
        </button>
        <Letter
            ref={ref}
            no={data.id}
            address={data.user.supplier?.address ?? 'Tak dikenal'}
            date={moment(data.createdAt.toUTCString())}
            item={data.purchaseItem.map(e => ({
                amount: e.purchaseRequestItem.qty,
                name: e.purchaseRequestItem.item.name,
                unit: e.purchaseRequestItem.item.unit
            }))}
            noFpp={data.purchaseItem[0].purchaseRequestItem.idPurchaseRequest}
            supplier={data.user.supplier?.name ?? 'Tak dikenal'} />
    </>
}

export default Information