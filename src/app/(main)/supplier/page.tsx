import { SearchParams } from "@/types/types"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import Wrapper from './components/wrapper'

export const metadata: Metadata = {
    title: 'Pemasok'
}

const SearchForm = dynamic(() => import('@/components/searchForm'))
const Loading = dynamic(() => import('@/components/loading'))

const page = ({searchParams}: { searchParams: SearchParams }) => {
    return <>
        <h1 className="text-4xl font-bold">Pemasok</h1>

        <div className="mt-10 bg-white rounded-xl p-6">
            <div className="max-w-xs mb-5">
                <SearchForm />
            </div>

            <Suspense fallback={<Loading />} key={searchParams.search}>
                <Wrapper
                    searchParams={searchParams} />
            </Suspense>
        </div>
    </>
}

export default page