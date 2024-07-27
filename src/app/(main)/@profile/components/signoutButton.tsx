"use client"

import { auth } from "@/app/firebase";
import { signOut } from "firebase/auth";
import dynamic from "next/dynamic";
import { createRef } from "react";
import ConfirmationModal from "@/components/confirmationModal"

const LogoutIcon = dynamic(() => import('@/assets/drawer/logout'))

const SignOutButton = () => {
    const confirmationModalRef = createRef<HTMLDialogElement>()
    const handleOnConfirm = async () => {
        try{
            await signOut(auth)
        }catch{
            alert("Terjadi kesalahan!")
        }
    }

    return <>
        <button className="btn btn-circle btn-ghost" onClick={() => confirmationModalRef.current?.showModal()}>
            <LogoutIcon className="w-5" />
        </button>

        <ConfirmationModal
            ref={confirmationModalRef}
            title="Keluar akun"
            message="Apakah kamu yakin ingin keluar?"
            onConfirm={handleOnConfirm}
            onCancel={ () => confirmationModalRef.current?.close()} />
    </>
}

export default SignOutButton;