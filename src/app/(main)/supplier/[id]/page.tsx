import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: 'Pemasok'
}

const BackButton = dynamic(() => import('@/components/backButton'))
const Wrapper = dynamic(() => import('./components/wrapper'))
const Loading = dynamic(() => import('@/components/loading'))

const page = ({params}: { params: {id: string} }) => {
    return <>
        <h1 className="text-4xl font-bold">Pemasok</h1>

        <div className="mt-10">
            <BackButton />

            <div className="mt-5 bg-white p-6 rounded-xl">
                <Suspense fallback={<Loading />}>
                    <Wrapper id={params.id} />
                </Suspense>
            </div>
        </div>
    </>
}

export default page