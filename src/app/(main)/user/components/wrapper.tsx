import { SearchParams } from "@/types/types"
import dynamic from "next/dynamic"
import { getData } from "../action"

const Table = dynamic(() => import('./table'))
const Wrapper = async ({
    searchParams
}: {
    searchParams: SearchParams
}) => {
    const data = await getData(searchParams.search)
    return <Table data={data} />
}

export default Wrapper