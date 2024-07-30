import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import Wrapper from './components/wrapper'

const BackButton = dynamic(() => import('@/components/backButton'))
const Loading = dynamic(() => import('@/components/loading'))

export const metadata: Metadata = {
    title: 'Surat Pemesanan'
}

const page = ({ params }: { params: {id: string} }) => {
    return <>
        <h1 className="text-4xl font-bold">Surat Pemesanan</h1>

        <div className="mt-5">
            <BackButton />

            <div className="mt-10 bg-white p-6 rounded-xl">
                <Suspense fallback={<Loading />}>
                    <Wrapper
                        id={params.id} />
                </Suspense>
            </div>
        </div>
    </>
}

export default page