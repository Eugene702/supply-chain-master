"use client"

import dynamic from "next/dynamic"
import Letter from './letter'
import { GetDataPayload } from "../action"
import { useReactToPrint } from "react-to-print"
import { useRef } from "react"

const PrintIcon = dynamic(() => import('@/assets/drawer/print'))
const Information = ({ data }: { data: GetDataPayload }) => {
    const ref = useRef<HTMLDivElement>(null)
    const handlePrint = useReactToPrint({
        content: () => ref.current
    })
    return <>
        <button className="btn btn-circle rounded-full" onClick={handlePrint}>
            <PrintIcon className="w-6 fill-gray-400" />
        </button>

        <Letter data={data} ref={ref} />
    </>
}

export default Information