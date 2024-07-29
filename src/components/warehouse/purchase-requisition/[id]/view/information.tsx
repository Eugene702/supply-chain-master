"use client"
import dynamic from 'next/dynamic'
import Letter from './letter'
import { createRef, useEffect, useState } from 'react'
import { getData, GetDataPayload } from '@/app/(main)/warehouse/purchase-requisition/[id]/view/action'
import { useParams } from 'next/navigation'
import { moment } from '@/utils/utils'
import { useReactToPrint } from 'react-to-print'

const PrintIcon = dynamic(() => import('@/assets/drawer/print'))
const Loading = dynamic(() => import('@/components/loading'))
const Failed = dynamic(() => import('@/components/failed'))

const Information = () => {
    const params = useParams<{ id: string }>()
    const informationRef = createRef<HTMLDivElement>()
    const handlePrint = useReactToPrint({
        content: () => informationRef.current
    })
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<GetDataPayload>()
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData(params.id)
                if (data) {
                    setData(data)
                } else {
                    setError('Data tidak ditemukan!')
                }

                setIsLoading(false)
            } catch {
                setError('Ada kesalahan pada server!')
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    if (isLoading) {
        return <Loading />
    } else if (error) {
        return <Failed message={error} />
    } else {
        return <>
            <button className='btn btn-circle rounded-full' onClick={handlePrint}>
                <PrintIcon className='w-4 fill-gray-400' />
            </button>

            {
                data != undefined ? <Letter
                    ref={informationRef}
                    no={data?.id ?? ''}
                    date={moment(data?.createdAt.toUTCString())}
                    item={data?.purchaseRequestItem.map(e => ({
                        name: e.item.name ?? '',
                        amount: e.qty ?? 0,
                        unit: e.item.unit,
                    }))} /> : null
            }

        </>
    }

}

export default Information