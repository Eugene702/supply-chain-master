import Link from "next/link"

const Table = () => {
    return <table className="table table-zebra table-lg">
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
                <td>SP001</td>
                <td>Diterima</td>
                <td>28 Juli 2024</td>
                <td>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn">Lainnya</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-xl z-[1] w-52 p-2 shadow">
                            <li><Link href="/purchase/01/invoices" className="rounded-xl">Lihat Faktur</Link></li>
                            <li><Link href="/purchase/01/order" className="rounded-xl">Lihat Surat Pemesanan</Link></li>
                            <li><button className="text-red-400 rounded-xl">Batalkan Pemesanan</button></li>
                        </ul>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
}

export default Table