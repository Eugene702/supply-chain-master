const Information = () => {
    return <div>
        <h1 className="text-xl font-bold text-center">PT. MAJU MUNDUR</h1>
        <div className="divider"></div>
        <h2 className="text-lg text-center">FAKTUR</h2>

        <p>No Faktur : F001</p>
        <p>Tgl. Faktur : 28 Januari 2025</p>
        <p>No. Pesanan : SP001</p>
        <p>Nama Pelanggan : PT. MAJU MUNDUR</p>

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
                <tr>
                    <td>1</td>
                    <td>Hardisk</td>
                    <td>Unit</td>
                    <td>8</td>
                    <td>150.000</td>
                    <td>1.200.000</td>
                </tr>
                <tr>
                    <td colSpan={5}>Total Bayar</td>
                    <td>1.200.000</td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Information