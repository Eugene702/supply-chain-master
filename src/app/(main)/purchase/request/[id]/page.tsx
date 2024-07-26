import { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
    title: 'Permintaan Pembelian'
}

const BackButton = dynamic(() => import('@/components/backButton'))
const Wrapper = dynamic(() => import('@/components/purchase/request/[id]/wrapper'))
const page = () => {
    return <>
        <h1 className="text-4xl font-bold">Permintaan Pembelian</h1>

        <div className="mt-10">
            <BackButton />
            <div className="mt-5 bg-white p-6 rounded-xl">
                <Wrapper />
            </div>
        </div>
    </>
}

export default page