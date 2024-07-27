"use client"

import { useFormik } from "formik"
import { object, string } from "yup"
import { checkEmail } from "../action"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/app/firebase"
import { useRouter } from "next/navigation"

const Form = () => {
    const router = useRouter()
    const schema = object().shape({
        email: string().email("Format email tidak benar!").required("Email tidak boleh kosong!"),
        password: string().required("Kata sandi tidak boleh kosong!")
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: schema,
        onSubmit: async (e, { setFieldError }) => {
            try {
                const check = await checkEmail(e.email)
                if (check) {
                    signInWithEmailAndPassword(auth, e.email, e.password)
                        .then(() => {
                            router.push("/")
                        })
                        .catch(() => {
                            setFieldError("password", "Kata sandi salah!")
                        })
                } else {
                    setFieldError("email", "Email tidak terdaftar!")
                }
            }catch{
                alert("Terjadi kesalahan!")
            }
        }
    })
    const { handleChange, handleSubmit, errors, values, isSubmitting } = formik

    return <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required name="email" onChange={handleChange} value={values.email} />
            {
                errors.email ? <label className="label"><span className="label-text-alt text-red-900">{errors.email}</span></label> : null
            }
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Kata sandi</span>
            </label>
            <input type="password" placeholder="Kata sandi" className="input input-bordered" required name="password" onChange={handleChange} value={values.password} />
            {
                errors.password ? <label className="label"><span className="label-text-alt text-red-900">{errors.password}</span></label> : null
            }
            <label className="label">
                <a href="#" className="label-text-alt link link-hover link-primary">Lupa kata sandi?</a>
            </label>
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? <div className="loading"></div> : null}
                <span>Masuk</span>
            </button>
        </div>
    </form>
}

export default Form