"use client"
import Link from "next/link"
import ConfirmationModal from "@/components/confirmationModal"
import { createRef, useState } from "react"
import { deleteData, GetDataPayload } from "../action"
import { generateStatusToString, moment } from "@/utils/utils"

const Table = ({ data }: { data: GetDataPayload[] }) => {
    const confirmationModalRef = createRef<HTMLDialogElement>()
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const onClickDelete = (id: string) => {
        setDeleteId(id)
        confirmationModalRef.current?.showModal()
    }

    const onConfirmDelete = async () => {
        try {
            if(deleteId){
                await deleteData(deleteId)
                setDeleteId(null)
                confirmationModalRef.current?.close()
            }
        } catch {
            alert('Ada kesalahan pada server!')
            confirmationModalRef.current?.close()
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
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-2 shadow rounded-xl">
                                    {e.status == "PENDING" ? <li><Link href={`/warehouse/purchase-requisition/${e.id}/edit`} className="rounded-xl">Edit</Link></li> : null}
                                    <li><Link href={`/warehouse/purchase-requisition/${e.id}/view`} className="rounded-xl">Lihat permintaan barang</Link></li>
                                    { e.status == "PENDING" ? <li><button className="text-red-900 rounded-xl" onClick={() => onClickDelete(e.id)}>Hapus</button></li> : null }
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
            message="Inngin menghapus permintaan ini?"
            onCancel={() => confirmationModalRef.current?.close()}
            onConfirm={onConfirmDelete} />
    </>
}

export default Table