import { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
    title: 'Daftar Permintaan Pembelian'
}

const BackButton = dynamic(() => import('@/components/backButton'))
const Wrapper = dynamic(() => import('@/components/purchase/request/wrapper'))
const SearchForm = dynamic(() => import('@/components/searchForm'))

const page = () => {
    return <>
        <h1 className="text-4xl font-bold">Daftar Permintaan Pembelian</h1>

        <div className="mt-10">
            <BackButton />
            <div className="mt-5 bg-white rounded-xl p-6">
                <div className="max-w-xs mb-5">
                    <SearchForm />
                </div>

                <Wrapper />
            </div>
        </div>
    </>
}

export default page