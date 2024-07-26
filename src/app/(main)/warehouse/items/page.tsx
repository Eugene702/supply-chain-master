import { Metadata } from "next"
import dynamic from "next/dynamic"


export const metadata: Metadata = {
    title: 'Daftar barang Gudang'
}

const Wrapper = dynamic(() => import('./components/wrapper'))
const page = () => {
    return <>
        <h1 className="text-4xl font-bold">Daftar Barang Gudang</h1>
        <Wrapper />
    </>
}

export default page