import Image from "next/image"

const MeForm = () => {
    return <div className="flex gap-x-2 my-5">
        <div className="avatar w-20">
            <div className="mask mask-squircle w-20">
                <Image
                    src="https://eugenefeilianputrarangga.vercel.app/_next/image?url=%2Fimg%2Fprofile.jpg&w=640&q=75"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="My Profile Picture" />
            </div>
        </div>

        <section className="w-full">
            <div className="grid grid-cols-2 gap-3">
                <div className="form-control">
                    <label htmlFor="name" className="label">
                        <span className="label-text">Nama mahasiswa</span>
                    </label>
                    <input type="text" className="input input-bordered input-sm w-full" disabled value="Eugene Feilian Putra Rangga" id="name" />
                </div>
                <div className="form-control">
                    <label htmlFor="nim" className="label">
                        <span className="label-text">Nama mahasiswa</span>
                    </label>
                    <input type="text" className="input input-bordered input-sm w-full" disabled value="411211145" id="nim" />
                </div>
            </div>
        </section>
    </div>
}

export default MeForm