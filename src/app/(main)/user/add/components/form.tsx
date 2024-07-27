"use client"
import { $Enums } from "@prisma/client"
import { useFormik } from "formik"
import { object, string } from "yup"
import { addUser, checkEmail } from "../action"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/app/firebase"
import { useRouter } from "next/navigation"

const Form = () => {
    const router = useRouter()
    const schema = object().shape({
        name: string().required("Nama tidak boleh kosong!"),
        email: string().email("Email tidak valid!").required("Email tidak boleh kosong!"),
        password: string().required("Password tidak boleh kosong!"),
        role: string().required("Role tidak boleh kosong!").oneOf([$Enums.Role.ADMIN, $Enums.Role.PURCHASING, $Enums.Role.SUPPLIER, $Enums.Role.WAREHOUSE], "Role tidak valid!")
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            role: ""
        },
        validationSchema: schema,
        onSubmit: async (e, { setFieldError }) => {
            try{
                const check = await checkEmail(e.email)
                if(check){
                    const {user} = await createUserWithEmailAndPassword(auth, e.email, e.password)
                    await addUser(user.uid, e.name, e.email, e.role)
                    router.push("/user")
                }else{
                    setFieldError('email', 'Email sudah digunakan!')
                }
            }catch{
                alert('Ada kesalahan pada server!')
            }
        }
    })
    const { handleSubmit, handleChange, values, errors, isSubmitting } = formik

    return <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
            <div className="form-control">
                <label htmlFor="name" className="label">
                    <span className="label-text">Nama</span>
                </label>

                <input type="text" className="input input-bordered" id="name" placeholder="Nama lengkap" name="name" value={values.name} onChange={handleChange} />
                {
                    errors.name ? <label htmlFor="name" className="label">
                        <span className="label-text-alt text-red-900">{errors.name}</span>
                    </label> : null
                }
            </div>

            <div className="form-control">
                <label htmlFor="email" className="label">
                    <span className="label-text">Email</span>
                </label>

                <input type="text" className="input input-bordered" id="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} />
                {
                    errors.email ? <label htmlFor="email" className="label">
                        <span className="label-text-alt text-red-900">{errors.email}</span>
                    </label> : null
                }
            </div>

            <div className="form-control">
                <label htmlFor="password" className="label">
                    <span className="label-text">Password</span>
                </label>

                <input type="password" className="input input-bordered" id="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} />
                {
                    errors.password ? <label htmlFor="password" className="label">
                        <span className="label-text-alt text-red-900">{errors.password}</span>
                    </label> : null
                }
            </div>

            <div className="form-control">
                <label htmlFor="role" className="label">
                    <span className="label-text">Role</span>
                </label>

                <select id="role" className="select select-bordered" name="role" value={values.role} onChange={handleChange}>
                    <option value="">Pilih role pengguna</option>
                    <option value={$Enums.Role.ADMIN}>Admin</option>
                    <option value={$Enums.Role.PURCHASING}>Pembeli</option>
                    <option value={$Enums.Role.SUPPLIER}>Pemasok</option>
                    <option value={$Enums.Role.WAREHOUSE}>Gudang</option>
                </select>

                {
                    errors.role ? <label htmlFor="role" className="label">
                        <span className="label-text-alt text-red-900">{errors.role}</span>
                    </label> : null
                }
            </div>

            <button type="submit" className="btn btn-primary max-w-fit" disabled={isSubmitting}>
                { isSubmitting ? <div className="loading"></div> : null }
                <span>Simpan</span>
            </button>
        </div>
    </form>
}

export default Form