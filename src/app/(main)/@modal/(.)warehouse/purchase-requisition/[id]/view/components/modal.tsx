"use client"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

const Information = dynamic(() => import("@/components/warehouse/purchase-requisition/[id]/view/information"))
const modal = () => {
    const ref = useRef<HTMLDialogElement>(null)
    const router = useRouter()

    useEffect(() => {
        if (ref.current) {
            ref.current.showModal()
        }
    }, [ref])

    return <dialog className="modal" ref={ref}>
        <div className="modal-box rounded-xl">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => router.back()}>✕</button>
            <Information />
        </div>
    </dialog>
}

export default modal