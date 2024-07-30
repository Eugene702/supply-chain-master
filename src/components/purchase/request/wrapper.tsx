import { getData } from "@/app/(main)/purchase/request/action"
import { SearchParams } from "@/types/types"
import dynamic from "next/dynamic"

const Table = dynamic(() => import('./table'))
const Failed = dynamic(() => import('@/components/failed'))

const Wrapper = async (searchParams: SearchParams) => {
    try {
        const data = await getData(searchParams.search)
        return <Table
            data={data} />
    }catch{
        return <Failed />
    }
}

export default Wrapper