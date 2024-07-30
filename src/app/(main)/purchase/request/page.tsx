import { SearchParams } from "@/types/types"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import Wrapper from '@/components/purchase/request/wrapper'

export const metadata: Metadata = {
    title: 'Daftar Permintaan Pembelian'
}

const BackButton = dynamic(() => import('@/components/backButton'))
const SearchForm = dynamic(() => import('@/components/searchForm'))
const Loading = dynamic(() => import('@/components/loading'))

const page = ({searchParams}: { searchParams: SearchParams }) => {
    return <>
        <h1 className="text-4xl font-bold">Daftar Permintaan Pembelian</h1>

        <div className="mt-10">
            <BackButton />
            <div className="mt-5 bg-white rounded-xl p-6">
                <div className="max-w-xs mb-5">
                    <SearchForm />
                </div>

                <Suspense fallback={<Loading />} key={searchParams.search}>
                    <Wrapper
                        {...searchParams} />
                </Suspense>
            </div>
        </div>
    </>
}

export default page