import dynamic from "next/dynamic"
import { getData } from "../action"

const Failed = dynamic(() => import('@/components/failed'))
const Information = dynamic(() => import('./information'))

const Wrapper = async ({ id }: { id: string }) => {
    try{
        const data = await getData(id)
        if(data){
            return <Information data={data} />  
        }
    }catch{
        return <Failed />
    }
}

export default Wrapper