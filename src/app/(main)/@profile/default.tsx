import dynamic from "next/dynamic"

const LogoutIcon = dynamic(() => import('@/assets/drawer/logout'))
const Default = () => {
    return <div className="min-h-screen bg-white px-6 py-10 rounded-l-3xl">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Informasi Akun</h1>
            <div className="tooltip" data-tip="Keluar akun">
                <button className="btn btn-circle btn-ghost">
                    <LogoutIcon className="w-5" />
                </button>
            </div>
        </div>

        <div className="flex justify-center flex-col items-center mt-8">
            <div className="avatar">
                <div className="w-40 rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>

            <h1 className="text-xl font-semibold mt-3">Eugene Feilian</h1>
            <p>Bagian Pembelian</p>
        </div>
    </div>
}

export default Default