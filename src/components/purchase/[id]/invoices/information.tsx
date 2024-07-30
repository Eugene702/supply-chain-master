"use client"

import { GetDataPayload } from "@/app/(main)/purchase/[id]/invoices/action"
import Letter from './letter'
import dynamic from "next/dynamic"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"

const PrintIcon = dynamic(() => import('@/assets/drawer/print'))

const Information = ({ data }: { data: GetDataPayload }) => {
    const ref = useRef<HTMLDivElement>(null)
    const handlePrint = useReactToPrint({
        content: () => ref.current
    })

    return <>
        <div className="flex justify-between items-center">
            <button className="btn btn-circle rounded-full" onClick={handlePrint}>
                <PrintIcon className="w-6 fill-gray-400" />
            </button>

            <button className="btn">Selesaikan pembayaran</button>
        </div>

        <Letter data={data} ref={ref} />
    </>
}

export default Information