"use client"

import useAuth from "@/hooks/useAuth"
const Profile = () => {
    const auth = useAuth()

    return auth.isLoading ? <div className="loading"></div> : auth.user && auth.user.profile ? <div className="flex justify-center flex-col items-center mt-8">
        <div className="avatar">
            <div className="w-40 rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
                <img src={`https://ui-avatars.com/api/?name=${auth.user.profile.name}`} />
            </div>
        </div>

        <h1 className="text-xl font-semibold mt-3">{auth.user.profile.name}</h1>
        <p>{
            auth.user.role == "ADMIN" ? "Admin" : 
            auth.user.role == "PURCHASING" ? "Pembeli" :
            auth.user.role == "SUPPLIER" ? "Pemasok" : 
            auth.user.role == "WAREHOUSE" ? "Gudang" : "Tidak diketahui"
        }</p>
    </div> : <h1 className="text-xl">Anda belum login!</h1>
}

export default Profile