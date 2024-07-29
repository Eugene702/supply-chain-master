import { SearchParams } from "@/types/types"
import dynamic from "next/dynamic"
import { getData } from "../action"

const Table = dynamic(() => import('./table'))
const Failed = dynamic(() => import('@/components/failed'))

const Wrapper = async ({ searchParams }: { searchParams: SearchParams }) => {
    try{
        const data = await getData()
        return <Table
            data={data} />
    }catch{
        return <Failed />
    }
}

export default Wrapper