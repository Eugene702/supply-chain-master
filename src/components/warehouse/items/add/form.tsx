"use client"

import dynamic from "next/dynamic"

const MeForm = dynamic(() => import('@/components/meForm'))
const Form = () => {
    return <form>
        <MeForm />
        <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="form-control">
                <label htmlFor="name" className="label">
                    <span className="label-text">Nama barang</span>
                </label>

                <input type="text" className="input input-bordered" placeholder="Masukan nama barang" id="name" />
            </div>
            <div className="form-control">
                <label htmlFor="stock" className="label">
                    <span className="label-text">Stok barang</span>
                </label>

                <input type="number" className="input input-bordered" placeholder="Masukan stok barang" />
            </div>
            <div className="form-control col-span-2">
                <label htmlFor="units" className="label">
                    <span className="label-text">Satuan barang</span>
                </label>

                <select id="units" className="select select-bordered">
                    <option value="">Pilih satuan barang</option>
                    <option value="unit">Unit</option>
                    <option value="rim">Rim</option>
                </select>
            </div>
        </div>

        <button type="submit" className="btn btn-primary rounded-xl mt-3">Simpan</button>
    </form>
}

export default Form