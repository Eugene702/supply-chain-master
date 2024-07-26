"use client"

import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

const Form = dynamic(() => import('@/components/warehouse/items/[item]/form'))
const Modal = () => {
    const router = useRouter()
    const ref = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        if (ref.current != null) {
            ref.current.showModal()
        }
    }, [ref])

    return <dialog className="modal" ref={ref}>
        <div className="modal-box rounded-xl">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => router.back()}>✕</button>
            <h1 className="text-lg font-semibold">Edit barang </h1>
            <Form />
        </div>
    </dialog>
}

export default Modal