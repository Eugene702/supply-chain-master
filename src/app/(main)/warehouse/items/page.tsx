import { SearchParams } from "@/types/types"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"


export const metadata: Metadata = {
    title: 'Daftar barang Gudang'
}

const Wrapper = dynamic(() => import('./components/wrapper'))
const Loading = dynamic(() => import('@/components/loading'))

const page = ({searchParams}: { searchParams: SearchParams }) => {
    return <>
        <h1 className="text-4xl font-bold">Daftar Barang Gudang</h1>

        <Suspense key={searchParams.search} fallback={<Loading />}>
            <Wrapper
                {...searchParams} />
        </Suspense>
    </>
}

export default page