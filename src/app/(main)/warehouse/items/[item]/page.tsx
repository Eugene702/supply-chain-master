import { Metadata } from "next"
import dynamic from "next/dynamic"

const Form = dynamic(() => import('@/components/warehouse/items/[item]/form'))
const BackButton = dynamic(() => import('@/components/backButton'))

export const metadata: Metadata = {
    title: 'Edit barang'
}
const page = () => {
    return <>
        <h1 className="text-4xl font-bold mb-5">Edit barang</h1>
        <BackButton />

        <div className="mt-5 bg-white p-6 rounded-xl">
            <Form />
        </div>
    </>
}

export default page