"use client"
import Link from "next/link"
import ConfirmationModal from "@/components/confirmationModal"
import { createRef } from "react"
import { useRouter } from "next/navigation"

const Table = () => {
    const confirmationModalRef = createRef<HTMLDialogElement>()
    const router = useRouter()

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
                <tr>
                    <td>1</td>
                    <td>Konfirmasi</td>
                    <td>2021-07-01</td>
                    <td>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn">Lainnya</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-2 shadow rounded-xl">
                                <li><Link href="/warehouse/purchase-requisition/20/edit" className="rounded-xl">Edit</Link></li>
                                <li><Link href="/warehouse/purchase-requisition/20/view" className="rounded-xl">Lihat permintaan barang</Link></li>
                                <li><button className="text-red-900 rounded-xl" onClick={() => confirmationModalRef.current?.showModal()}>Hapus</button></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <ConfirmationModal
         ref={confirmationModalRef}
         title="Apakah kamu yakin?"
         message="Inngin menghapus permintaan ini?"
         onCancel={() => confirmationModalRef.current?.close()}
         onConfirm={() => confirmationModalRef.current?.close()} />
    </>
}

export default Table