import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Masuk pengguna'
}

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
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Kata sandi</span>
                        </label>
                        <input type="password" placeholder="Kata sandi" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover link-primary">Lupa kata sandi?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Masuk</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default page;