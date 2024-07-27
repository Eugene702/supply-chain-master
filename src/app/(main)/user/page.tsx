import { SearchParams } from "@/types/types"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: 'Daftar Pengguna'
}

const SearchForm = dynamic(() => import('@/components/searchForm'))
const AddIcon = dynamic(() => import('@/assets/drawer/add'))
const Wrapper = dynamic(() => import('./components/wrapper'))
const Loading = dynamic(() => import('@/components/loading'))

const page = ({ searchParams }: { searchParams: SearchParams }) => {
    return <>
        <h1 className="text-4xl font-bold">Daftar Pengguna</h1>

        <div className="mt-10 bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center">
                <SearchForm />
                <Link href="/user/add" className="btn btn-primary">
                    <AddIcon className="w-4 fill-white" />
                    <span>Tambah Pengguna</span>
                </Link>
            </div>

            <div className="mt-5">
                <Suspense key={searchParams.search} fallback={<Loading />}>
                    <Wrapper
                        searchParams={searchParams} />
                </Suspense>
            </div>
        </div>
    </>
}

export default page