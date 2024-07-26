import { Metadata } from "next"
import dynamic from "next/dynamic"

const Form = dynamic(() => import('@/components/warehouse/purchase-requisition/form'))
const BackButton = dynamic(() => import('@/components/backButton'))

export const metadata: Metadata = {
    title: "Tambah Permintaan Pembelian",
}

const page = () => {
    return <>
        <h1 className="text-4xl font-bold">Tambah Permintaan Pembelian</h1>

        <div className="mt-10">
            <BackButton />
            <div className="bg-white p-6 rounded-xl mt-5">
                <Form />
            </div>
        </div>
    </>
}

export default page