import { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { getCountPurchaseRequest } from "./action"
import Wrapper from './components/wrapper'
import { SearchParams } from "@/types/types"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: 'Pembelian',
}

const SearchInput = dynamic(() => import('@/components/searchForm'))
const Loading = dynamic(() => import('@/components/loading'))
const Failed = dynamic(() => import('@/components/failed'))

const page = async ({ searchParams }: { searchParams: SearchParams }) => {
    try {
        const countPurchaseRequest = await getCountPurchaseRequest()
        return <>
            <h1 className="text-4xl font-bold">Pembelian</h1>
            <div className="mt-10 bg-white p-6 rounded-xl">
                <div className="flex justify-between items-center">
                    <SearchInput />
                    <Link href="/purchase/request" className="btn btn-primary">Permintaan Pembelian {countPurchaseRequest > 0 ? `(${countPurchaseRequest})` : null}</Link>
                </div>

                <div className="mt-5">
                    <Suspense fallback={<Loading />} key={searchParams.search}>
                        <Wrapper
                            searchParams={searchParams} />
                    </Suspense>
                </div>
            </div>
        </>
    } catch {
        return <Failed />
    }

}

export default page