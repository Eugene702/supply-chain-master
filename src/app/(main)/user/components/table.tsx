"use client"
import Link from "next/link"
import ConfirmationModal from "@/components/confirmationModal"
import { createRef } from "react"
import { GetDataPayload } from "../action"
import { generateRoleToString } from "@/utils/utils"

const Table = ({
    data
}: {
    data: GetDataPayload[]
}) => {
    const confirmationModalRef = createRef<HTMLDialogElement>()
    const handleOnConfirmDelete = () => {
        confirmationModalRef.current?.close()
    }

    return <>
        <table className="table table-zebra table-lg">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Tanggal</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map((e, index) => <tr key={index}>
                        <td>{ e.role == "SUPPLIER" ? e.supplier?.name : e.profile?.name }</td>
                        <td>{ e.email }</td>
                        <td>{ generateRoleToString(e.role) }</td>
                        <td>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn">Lainnya</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-xl z-[1] w-52 p-2 shadow">
                                    <li><Link href="/user/20" className="rounded-xl">Edit</Link></li>
                                    <li><button className="btn text-red-900" onClick={() => confirmationModalRef.current?.showModal()}>Hapus Pengguna</button></li>
                                </ul>
                            </div>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

        <ConfirmationModal
            ref={confirmationModalRef}
            title="Hapus pengguna!"
            message="Apaka kamu yakin ingin menghapus pengguna ini?"
            onConfirm={handleOnConfirmDelete}
            onCancel={() => confirmationModalRef.current?.close()} />
    </>
}

export default Table