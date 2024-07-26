import dynamic from "next/dynamic"

const XmarkIcon = dynamic(() => import('@/assets/drawer/xmark'))
const Table = () => {
    return <form>
        <table className="table table-zebra table-lg">
            <thead>
                <tr>
                    <th>Nama barang</th>
                    <th>Satuan</th>
                    <th>Jumlah Kirim</th>
                    <th>Harga Satuan</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Printer</td>
                    <td>Unit</td>
                    <td><input type="number" className="input input-bordered w-full" value={8} /></td>
                    <td><input type="number" className="input input-bordered w-full" value={2000000} /></td>
                    <td>
                        <button className="btn btn-circle">
                            <XmarkIcon className="w-4" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div className="flex justify-end items-center gap-x-3 mt-5">
            <button type="submit" className="btn btn-primary">Terima pesanan</button>
            <button type="button" className="btn text-red-900">Tolak pesanan</button>
        </div>
    </form>
}

export default Table