import { Metadata } from "next"
import dynamic from "next/dynamic"

const Form = dynamic(() => import('@/components/warehouse/items/add/form'))
const BackButton = dynamic(() => import('@/components/backButton'))

export const metadata: Metadata = {
    title: 'Tambah daftar barang'
}
const page = () => {
    return <>
        <h1 className="text-4xl font-bold mb-5">Tambah daftar barang</h1>
        <BackButton />

        <div className="mt-5 bg-white p-6 rounded-xl">
            <Form />
        </div>
    </>
}

export default page