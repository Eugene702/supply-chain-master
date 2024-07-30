import { generateStatusToString, moment } from "@/utils/utils"
import { Purchase } from "@prisma/client"
import Link from "next/link"

const Table = ({ data }: { data: Purchase[] }) => {
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
            {
                data.map((e, index) => <tr key={index}>
                    <td>{ e.id }</td>
                    <td>{ generateStatusToString(e.status) }</td>
                    <td>{ moment(e.createdAt.toUTCString()) }</td>
                    <td>
                        <Link href={`/supplier/${e.id}`} className="btn">Lihat pesanan</Link>
                    </td>
                </tr>)
            }
        </tbody>
    </table>
}

export default Table