import { month } from "@/utils/utils"

const Filter = () => {
    return <div className="flex gap-x-4 items-end">
        <div className="w-full">
            <label className="block">Bulan</label>
            <select className="select select-bordered w-full">
                <option defaultValue="" disabled selected>Pilih bulan</option>
                {
                    month.map((item, index) => {
                        return <option key={index} value={index + 1}>{item}</option>
                    })
                }
            </select>
        </div>

        <div className="w-full">
            <label className="block">Tahun</label>
            <input type="number" className="input input-bordered w-full" />
        </div>

        <button type="button" className="btn">Cari</button>
    </div>
}

export default Filter