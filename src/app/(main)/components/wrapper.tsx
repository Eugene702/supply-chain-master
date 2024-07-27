"use client"
import { auth } from "@/app/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"

const Wrapper = ({
    children
}: {
    children: ReactNode
}) => {
    const router = useRouter()
    useEffect(() => {
        const state = onAuthStateChanged(auth, user => {
            if(!user){
                router.push("/signin")
            }
        })

        return () => {
            state()
        }
    })

    return children
}

export default Wrapper