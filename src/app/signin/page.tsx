import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: 'Masuk pengguna'
}

const Form = dynamic(() => import('./components/form'))
const page = () => {
    return <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Masuk sekarang!</h1>
                <p className="py-6">
                    Login untuk pengalaman pengelolaan inventaris yang lebih efisien. Semua data penting Anda dalam satu tempat yang aman dan mudah diakses.
                </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-xl">
                <Form />
            </div>
        </div>
    </div>
}

export default page;