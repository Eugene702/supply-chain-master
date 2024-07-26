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
                <td>Menunggu</td>
                <td>28 Januari 2024</td>
                <td>
                    <Link href="/supplier/28" className="btn">Lihat pesanan</Link>
                </td>
            </tr>
        </tbody>
    </table>
}

export default Table