"use client"

import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"

const ChevronLeftIcon = dynamic(() => import('@/assets/drawer/chevronLeft'))
const BackButton = () => {
    const router = useRouter()
    return <button className="btn bg-white rounded-xl text-black" onClick={() => router.back()}>
        <ChevronLeftIcon className="w-3" />
        Kembali
    </button>
}

export default BackButton