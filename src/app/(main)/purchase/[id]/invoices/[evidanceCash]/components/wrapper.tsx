import dynamic from "next/dynamic"
import { getData } from "../action"

const Information = dynamic(() => import('./information'))
const Failed = dynamic(() => import('@/components/failed'))
const Wrapper = async ({ id }: { id: string }) => {
    try{
        const data = await getData(id)
        if(data){
            return <Information data={data} />
        }else{
            return <Failed message="Data tidak ditemukan!" />
        }
    }catch{
        return <Failed />
    }
}

export default Wrapper