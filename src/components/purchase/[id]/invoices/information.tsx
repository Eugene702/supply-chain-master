"use client"

import { finsihedPayment, GetDataPayload } from "@/app/(main)/purchase/[id]/invoices/action"
import Letter from './letter'
import dynamic from "next/dynamic"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import Link from "next/link"
import { usePathname } from "next/navigation"

const PrintIcon = dynamic(() => import('@/assets/drawer/print'))

const Information = ({ data }: { data: GetDataPayload }) => {
    const pathname = usePathname()
    const ref = useRef<HTMLDivElement>(null)
    const handlePrint = useReactToPrint({
        content: () => ref.current
    })

    const onFinishPayment = async () => {
        try{
            await finsihedPayment(data.id, data.idSupplier)
        }catch{
            alert('Ada kesalahan pada server!')
        }
    }

    return <>
        <div className="flex justify-between items-center">
            <button className="btn btn-circle rounded-full" onClick={handlePrint}>
                <PrintIcon className="w-6 fill-gray-400" />
            </button>

            {
                data.evidenceCashExpenditure == null ? <button className="btn" onClick={onFinishPayment}>Selesaikan pembayaran</button> : <Link href={`${pathname}/${data.evidenceCashExpenditure.id}`} className="btn">Lihat pengeluaran kas</Link>
            }
        </div>

        <Letter data={data} ref={ref} />
    </>
}

export default Information