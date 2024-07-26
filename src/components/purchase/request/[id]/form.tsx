const Form = () => {
    return <form>
        <table className="table table-zebra table-lg">
            <thead>
                <tr>
                    <th>Nama barang</th>
                    <th>Pemasok</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Printer</td>
                    <td>
                        <select className="select select-bordered">
                            <option value="">Pilih supplier</option>
                            <option value="maju munjur">Maju Mundur</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>

        <div className="flex justify-end items-center gap-x-2">
            <button type="button" className="btn text-red-900">Tolak pesanan</button>
            <button type="submit" className="btn btn-primary">Buat pesanan</button>
        </div>
    </form>
}

export default Form