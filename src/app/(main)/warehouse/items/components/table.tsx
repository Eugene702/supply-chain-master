"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { createRef } from "react"
import ConfirmationModal from "@/components/confirmationModal"

const AddIcon = dynamic(() => import('@/assets/drawer/add'))
const SearchForm = dynamic(() => import('@/components/searchForm'))

const Table = () => {
    const confirmationModalRef = createRef<HTMLDialogElement>()

    return <div className="mt-10 bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center">
            <div className="max-w-xs mb-5">
                <SearchForm />
            </div>

            <Link href="/warehouse/items/add" className="btn btn-primary">
                <AddIcon
                    className="w-4 fill-white" />
                <span>Daftarkan barang</span>
            </Link>
        </div>

        <table className="table table-lg table-zebra">
            <thead>
                <tr>
                    <th>Nama barang</th>
                    <th>Satuan</th>
                    <th>Jumlah Stok</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Printer</td>
                    <td>Unit</td>
                    <td>20</td>
                    <td>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn">Lainnya</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-2 shadow rounded-xl">
                                <li><Link href="/warehouse/items/20" className="rounded-xl">Edit</Link></li>
                                <li><button type="button" onClick={() => confirmationModalRef.current?.showModal()} className="text-red-900 rounded-xl">Hapus barang</button></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <ConfirmationModal
            ref={confirmationModalRef}
            title="Apakah kamu yakin?"
            message="Apakah kamu yakin ingin menghapus barang ini?"
            onConfirm={() => confirmationModalRef.current?.close()}
            onCancel={() => confirmationModalRef.current?.close()} />
    </div>
}

export default Table