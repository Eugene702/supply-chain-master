import { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
    title: 'Pemasok'
}

const Wrapper = dynamic(() => import('./components/wrapper'))
const SearchForm = dynamic(() => import('@/components/searchForm'))

const page = () => {
    return <>
        <h1 className="text-4xl font-bold">Pemasok</h1>

        <div className="mt-10 bg-white rounded-xl p-6">
            <div className="max-w-xs mb-5">
                <SearchForm />
            </div>
            <Wrapper />
        </div>
    </>
}

export default page