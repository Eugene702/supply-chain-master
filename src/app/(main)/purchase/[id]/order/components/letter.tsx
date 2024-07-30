import { forwardRef } from "react";

type Props = {
    no: string,
    noFpp: string,
    date: string,
    supplier: string,
    address: string,
    item: {
        name: string,
        unit: string,
        amount: number
    }[]
}

const Letter = forwardRef<HTMLElement, Props>((props, ref) => <section ref={ref} className="bg-white p-3">
    <h1 className="text-2xl font-bold text-center">{process.env.COMPANY_NAME}</h1>
    <div className="divider"></div>
    <h1 className="text-lg text-center mb-5">SURAT PEMESANAN</h1>
    <p>No : { props.no }</p>
    <p>Tgl: { props.date }</p>
    <p>No. FPP : { props.noFpp }</p>
    <p>Nama Supplier : { props.supplier }</p>
    <p>alamat : { props.address }</p>
    <table className="table mt-5">
        <thead>
            <tr>
                <th>NO</th>
                <th>NAMA BARANG</th>
                <th>SATUAN</th>
                <th>JUMLAH MINTA</th>
            </tr>
        </thead>

        <tbody>
            {
                props.item.map((e, index) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.unit}</td>
                    <td>{e.amount}</td>
                </tr>)
            }
        </tbody>
    </table>
</section>)

export default Letter