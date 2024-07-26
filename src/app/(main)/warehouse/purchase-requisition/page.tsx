import { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Permintaan pembelian'
}

const Wrapper = dynamic(() => import('./components/wrapper'))
const SearchForm = dynamic(() => import('@/components/searchForm'))
const AddIcon = dynamic(() => import('@/assets/drawer/add'))

const page = () => {
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
                <Wrapper />
            </div>
        </div>
    </>
}

export default page