import { GetDataPayload } from "@/app/(main)/purchase/[id]/invoices/action";
import { moment } from "@/utils/utils";
import { forwardRef } from "react";

interface Props {
    data: GetDataPayload
}
const Letter = forwardRef<HTMLDivElement, Props>((props, ref) => <div ref={ref} className="bg-white p-3">
    <h1 className="text-xl font-bold text-center">PT. MAJU MUNDUR</h1>
    <div className="divider"></div>
    <h2 className="text-lg text-center">FAKTUR</h2>

    <p>No Faktur : {props.data.id}</p>
    <p>Tgl. Faktur : {moment(props.data.createdAt.toUTCString())}</p>
    <p>No. Pesanan : {props.data.idPurchase}</p>
    <p>Nama Pelanggan : {props.data.user.supplier?.name}</p>

    <table className="table mt-5 table-lg">
        <thead>
            <tr>
                <th>No</th>
                <th>Nama Barang</th>
                <th>Satuan</th>
                <th>Jumlah Kirim</th>
                <th>Harga Satuan</th>
                <th>Harga Total</th>
            </tr>
        </thead>
        <tbody>
            {
                props.data.invoiceItem.map((item, index) => <tr key={index}>
                    <td>{ index + 1 }</td>
                    <td>{ item.purchaseItem.purchaseRequestItem.item.name }</td>
                    <td>{ item.purchaseItem.purchaseRequestItem.item.unit }</td>
                    <td>{ item.qty }</td>
                    <td>{ item.price }</td>
                    <td>{ item.price * item.qty }</td>
                </tr>)
            }
            <tr>
                <td colSpan={5}>Total Bayar</td>
                <td>{ props.data.invoiceItem.map(e => e.qty * e.price).reduce((a, b) => a + b, 0) }</td>
            </tr>
        </tbody>
    </table>
</div>)

export default Letter