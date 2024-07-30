import dynamic from "next/dynamic"
import { getData } from "../action"

const Information = dynamic(() => import('./information'))
const Failed = dynamic(() => import('@/components/failed'))

const Wrapper = async ({ searchParams }: { searchParams: { month: number, year: number } }) => {
    try {
        const data = await getData(searchParams.month, searchParams.year)
        if (data) {
            return <>
                {/* <button className="btn">print</button> */}
                <Information data={data} />
            </>
        }else{
            return <Failed message="Data tidak ditemukan!" />
        }
    } catch {
        return <Failed />
    }
}

export default Wrapper