import { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
    title: 'Faktur Pembelian',
}

const BackButton = dynamic(() => import('@/components/backButton'))
const Wrapper = dynamic(() => import('@/components/purchase/[id]/invoices/wrapper'))

const page = () => {
    return <>
        <h1 className="text-4xl font-bold">Faktur Pembelian</h1>

        <div className="mt-10">
            <BackButton />
            <div className="mt-5 bg-white p-6 rounded-xl">
                <Wrapper />
            </div>
        </div>
    </>
}

export default page