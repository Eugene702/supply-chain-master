import dynamic from "next/dynamic"

const MeForm = dynamic(() => import('@/components/meForm'))
const XmarkIcon = dynamic(() => import('@/assets/drawer/xmark'))
const AddIcon = dynamic(() => import('@/assets/drawer/add'))

const Form = () => {
    return <form className="w-full">
        <MeForm />
        <p className="text-xl font-semibold">Daftar barang</p>
        <div className="flex gap-4 items-center">
            <div className="form-control w-full">
                <label htmlFor="name" className="label">
                    <span className="label-text">Nama barang</span>
                </label>

                <select id="name" className="select select-bordered">
                    <option value="">Pilih barang</option>
                    <option value="printer">Printer</option>
                </select>
            </div>

            <div className="form-control w-full">
                <label htmlFor="qty" className="label">
                    <span className="label-text">Jumlah</span>
                </label>

                <input type="number" className="input input-bordered" id="qty" placeholder="Masukan jumlah barang" />
            </div>

            <button type="button" className="btn btn-ghost btn-sm btn-circle">
                <XmarkIcon
                    className="w-4" />
            </button>
        </div>

        <button className="btn btn-primary mt-5">
            <AddIcon className="w-4 fill-white" />
            <span>Tambah barang</span>
        </button>

        <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">Kirm permintaan</button>
        </div>
    </form>
}

export default Form