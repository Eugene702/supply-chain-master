import { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
    title: 'Permintaan Pembelian',
}

const BackButton = dynamic(() => import('@/components/backButton'))
const Information = dynamic(() => import('@/components/warehouse/purchase-requisition/[id]/view/information'))

const page = () => {
    return <>
        <h1 className="text-4xl font-bold">Permintaan Pembelian</h1>
        <div className="mt-10">
            <BackButton />
            <div className="mt-5 bg-white rounded-xl p-6">
                <Information />
            </div>
        </div>
    </>
}

export default page