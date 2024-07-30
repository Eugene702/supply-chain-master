import { moment } from "@/utils/utils"
import { PurchaseRequest } from "@prisma/client"
import Link from "next/link"

const Table = ({ data }: { data: PurchaseRequest[] }) => {
    return <table className="table table-zebra table-lg">
        <thead>
            <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            {
                data.map((e, index) => <tr key={index}>
                    <td>{ e.id }</td>
                    <td>{ moment(e.createdAt.toUTCString()) }</td>
                    <td><Link href={`/purchase/request/${e.id}`} className="btn btn-ghost">Lihat permintaan</Link></td>
                </tr>)
            }
        </tbody>
    </table>
}

export default Table