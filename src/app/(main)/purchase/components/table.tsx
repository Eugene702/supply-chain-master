"use client"

import { generateStatusToString, moment } from "@/utils/utils"
import { Purchase } from "@prisma/client"
import Link from "next/link"
import ConfirmationModal from "@/components/confirmationModal"
import { createRef, useState } from "react"
import { deleteData } from "../action"

const Table = ({ data }: { data: Purchase[] }) => {
    const confirmationModalRef = createRef<HTMLDialogElement>()
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const onClickDelete = (id: string) => {
        setDeleteId(id)
        confirmationModalRef.current?.showModal()
    }

    const handleConfirmationDelete = async () => {
        try{
            if(!deleteId) return
            await deleteData(deleteId)
            confirmationModalRef.current?.close()
        }catch{
            alert('Ada kesalahan pada server!')
        }
    }

    return <>
        <table className="table table-zebra table-lg">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Status</th>
                    <th>Tanggal</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map((e, index) => <tr key={index}>
                        <td>{e.id}</td>
                        <td>{generateStatusToString(e.status)}</td>
                        <td>{moment(e.createdAt.toUTCString())}</td>
                        <td>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn">Lainnya</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-xl z-[1] w-52 p-2 shadow">
                                    { e.status == "APPROVED" ? <li><Link href={`/purchase/${e.id}/invoices`} className="rounded-xl">Lihat Faktur</Link></li> : null }
                                    <li><Link href={`/purchase/${e.id}/order`} className="rounded-xl">Lihat Surat Pemesanan</Link></li>
                                    { e.status === 'PENDING' && <li><button onClick={() => onClickDelete(e.id)} className="rounded-xl">Batalkan</button></li> }
                                </ul>
                            </div>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

        <ConfirmationModal
            ref={confirmationModalRef}
            title="Apakah kamu yakin?"
            message="Apakah kamu yakin ingin membatalkan daftar pembelian ini?"
            onConfirm={handleConfirmationDelete}
            onCancel={() => confirmationModalRef.current?.close()} />
    </>
}

export default Table