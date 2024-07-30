import { Metadata } from "next"
import dynamic from "next/dynamic"
import Wrapper from './components/wrapper'
import { Suspense } from "react"

export const metadata: Metadata = {
    title: 'Pengeluaran Kas'
}

const BackButton = dynamic(() => import('@/components/backButton'))
const Loading = dynamic(() => import('@/components/loading'))

const page = ({ params }: { params: { evidanceCash: string } }) => {
    return <>
        <h1 className="text-4xl font-bold">Pengeluaran Kas</h1>
        <div className="mt-10">
            <BackButton />

            <div className="mt-5 bg-white rounded-xl p-6">
                <Suspense fallback={<Loading />}>
                    <Wrapper
                        id={params.evidanceCash} />
                </Suspense>
            </div>
        </div>
    </>
}

export default page