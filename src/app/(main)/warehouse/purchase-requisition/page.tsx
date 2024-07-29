import { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import Wrapper from "./components/wrapper"
import { Suspense } from "react"
import { SearchParams } from "@/types/types"

export const metadata: Metadata = {
    title: 'Permintaan pembelian'
}

const SearchForm = dynamic(() => import('@/components/searchForm'))
const AddIcon = dynamic(() => import('@/assets/drawer/add'))
const Loading = dynamic(() => import('@/components/loading'))

const page = ({ searchParams }: { searchParams: SearchParams }) => {
    return <>
        <h1 className="text-4xl font-bold">Permintaan Pembelian</h1>

        <div className="mt-10 bg-white rounded-xl p-6">
            <div className="flex justify-between items-center">
                <SearchForm />
                <Link href="/warehouse/purchase-requisition/add" className="btn btn-primary">
                    <AddIcon className="w-4 fill-white" />
                    <span>Buat permintaan</span>
                </Link>
            </div>

            <div className="mt-5">
                <Suspense fallback={<Loading />} key={searchParams.search}>
                    <Wrapper
                        searchParams={searchParams} />
                </Suspense>
            </div>
        </div>
    </>
}

export default page