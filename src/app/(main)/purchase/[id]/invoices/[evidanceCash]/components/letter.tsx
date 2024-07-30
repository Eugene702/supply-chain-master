import { forwardRef } from "react";
import { GetDataPayload } from "../action";
import { moment } from "@/utils/utils";

interface Props{
    data: GetDataPayload
}

const Letter = forwardRef<HTMLDivElement, Props>((props, ref) => <div className="p-3 bg-white" ref={ref}>
    <h1 className="text-2xl text-center font-bold">{ process.env.COMPANY_NAME }</h1>
    <div className="divider"></div>
    <h1 className="text-xl text-center text-gray-400">BUKTI PENGELUARAN KAS</h1>
    <p>No. BPK : { props.data.id }</p>
    <p>Tgl. BPK : { moment(props.data.createdAt.toUTCString()) }</p>
    <p>No. Faktur : { props.data.idInvoice }</p>
    <p>Nama Supplier: { props.data.supplier.name }</p>
    <p>Sejumlah : { props.data.invoice.invoiceItem.map(e => e.qty * e.price).reduce((a, b) => a + b, 0) }</p>
</div> )

export default Letter