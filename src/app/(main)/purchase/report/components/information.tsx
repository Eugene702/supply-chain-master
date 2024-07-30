import { moment } from "@/utils/utils"
import { GetDataPayload } from "../action"

const Information = ({ data }: { data: GetDataPayload[] }) => {
    return <div>
        <h1 className="text-xl font-bold text-center">Laporan Pengeluaran Bulan Desember 2024</h1>
        <div className="divider"></div>
        <table className="table table-zebra table-lg">
            <thead>
                <tr>
                    <th>Tanggal</th>
                    <th>Jumlah</th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map((e, index) => <tr key={index}>
                        <td>{ moment(e.createdAt.toUTCString()) }</td>
                        <td>{ e.invoiceItem.map(a => a.price * a.qty).reduce((a, b) => a+ b, 0) }</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default Information