"use client"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

const Form = dynamic(() => import('@/components/warehouse/purchase-requisition/[id]/edit/form'))
const Modal = () => {
    const router = useRouter()
    const ref = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        if (ref.current) {
            ref.current.showModal()
        }
    }, [ref])

    return <dialog className="modal" ref={ref}>
        <div className="modal-box max-w-none rounded-xl w-6/12">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => router.back()}>✕</button>
            <h3 className="font-bold text-lg">Edit permintaan pembelian</h3>
            <Form />
        </div>
    </dialog>
}

export default Modal