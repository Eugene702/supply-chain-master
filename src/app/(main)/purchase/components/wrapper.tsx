import dynamic from "next/dynamic"
import { getData } from "../action"
import { SearchParams } from "@/types/types"

const Table = dynamic(() => import('./table'))
const Failed = dynamic(() => import('@/components/failed'))

const Wrapper = async ({ searchParams }: { searchParams: SearchParams }) => {
    const data = await getData(searchParams.search)

    try{
        return <Table
            data={data} />
    }catch{
        return <Failed />
    }
}

export default Wrapper