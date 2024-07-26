import Link from "next/link"

const Table = () => {
    return <table className="table table-zebra table-lg">
        <thead>
            <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>FP001</td>
                <td>28 Maret 2024</td>
                <td><Link href="/purchase/request/fp001" className="btn btn-ghost">Lihat permintaan</Link></td>
            </tr>
        </tbody>
    </table>
}

export default Table