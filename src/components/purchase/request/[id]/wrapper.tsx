import { getData, getSupplierData } from "@/app/(main)/purchase/request/[id]/action"
import dynamic from "next/dynamic"

const Form = dynamic(() => import('./form'))
const Failed = dynamic(() => import('@/components/failed'))

const Wrapper = async ({ id }: { id: string }) => {
    try{
        const [ supplier, data ] = await Promise.all([
            getSupplierData(),
            getData(id)
        ])

        return <Form
            supplier={supplier}
            data={data} />
    }catch{
        return <Failed />
    }
}

export default Wrapper