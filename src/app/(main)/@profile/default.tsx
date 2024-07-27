import dynamic from "next/dynamic"

const SignOutButton = dynamic(() => import('./components/signoutButton'))
const Profile = dynamic(() => import('./components/profile'))

const Default = () => {
    return <div className="min-h-screen bg-white px-6 py-10 rounded-l-3xl">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Informasi Akun</h1>
            <div className="tooltip" data-tip="Keluar akun">
                <SignOutButton />
            </div>
        </div>
        
        <Profile />
    </div>
}

export default Default