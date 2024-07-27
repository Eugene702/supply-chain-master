import { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
    title: 'Tambah Pengguna',
}

const BackButton = dynamic(() => import('@/components/backButton'))
const Form = dynamic(() => import('./components/form'))
const page = () => {
    return <>
        <h1 className="text-4xl font-bold">Tambah Pengguna</h1>

        <div className="mt-10">
            <BackButton />

            <div className="mt-5 bg-white rounded-xl p-6">
                <Form />
            </div>
        </div>
    </>
}

export default page