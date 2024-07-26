"use client"

import { forwardRef } from "react"

interface Props {
    title: string,
    message: string,
    onConfirm: () => void,
    onCancel: () => void
}

const ConfirmationModal = forwardRef<HTMLDialogElement, Props>((props, ref) => {
    return <dialog className="modal" ref={ref}>
        <div className="modal-box rounded-xl">
            <h3 className="font-bold text-lg">{props.title}</h3>
            <p className="py-4">{props.message}</p>
            <div className="flex justify-end">
                <button className="btn btn-primary mr-2" onClick={props.onConfirm}>Ya</button>
                <button className="btn btn-secondary" onClick={props.onCancel}>Tidak</button>
            </div>
        </div>
    </dialog>
})

export default ConfirmationModal