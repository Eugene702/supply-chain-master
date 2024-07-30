import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: 'Laporan Pembelian',
}

const Filter = dynamic(() => import('./components/filter'))
const Wrapper = dynamic(() => import('./components/wrapper'))
const Loading = dynamic(() => import('@/components/loading'))

const page = ({ searchParams }: { searchParams: { month: number, year: number } }) => {
    return <>
        <h1 className="text-4xl font-bold">Laporan Pembelian</h1>

        <div className="mt-10 bg-white rounded-xl p-6">
            <h2 className="text-2xl font-semibold">Filter</h2>
            <Filter />

            <div className="mt-10">
                <Suspense key={`${searchParams.month}-${searchParams.year}`} fallback={<Loading />}>
                    <Wrapper
                        searchParams={searchParams} />
                </Suspense>
            </div>
        </div>
    </>
}

export default page