import { forwardRef } from "react";

type Props = {
    no: string,
    date: string,
    item: {
        name: string,
        unit: string,
        amount: number
    }[]
}

const Letter = forwardRef<HTMLElement, Props>((props, ref) => <section ref={ref} className="bg-white p-3">
    <h1 className="text-2xl font-bold text-center">{process.env.COMPANY_NAME}</h1>
    <div className="divider"></div>
    <h1 className="text-lg text-center mb-5">FORM PERMINTAAN PEMBELIAN</h1>
    <p>No. FPP : { props.no }</p>
    <p>Tgl. FPP: { props.date }</p>
    <p>Agar dilakukan pemesanan untuk barang di bawah ini:</p>
    <table className="table">
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