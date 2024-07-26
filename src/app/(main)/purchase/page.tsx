import { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Pembelian',
}

const Wrapper = dynamic(() => import('./components/wrapper'))
const SearchInput = dynamic(() => import('@/components/searchForm'))
const page = () => {
    return <>
        <h1 className="text-4xl font-bold">Pembelian</h1>
        <div className="mt-10 bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center">
                <SearchInput />
                <Link href="/purchase/request" className="btn btn-primary">Permintaan Pembelian</Link>
            </div>

            <div className="mt-5">
                <Wrapper />
            </div>
        </div>
    </>
}

export default page