"use client"

import { getItems, getData, updateData } from "@/app/(main)/warehouse/purchase-requisition/[id]/edit/action";
import { FormikErrors, useFormik } from "formik";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { array, number, object, string } from "yup";

const MeForm = dynamic(() => import("@/components/meForm"));
const XmarkIcon = dynamic(() => import("@/assets/drawer/xmark"));
const AddIcon = dynamic(() => import("@/assets/drawer/add"));

const Form = () => {
    const params = useParams<{id: string}>()
    const router = useRouter()
    const [item, setItem] = useState<{ id: string; name: string }[]>([]);
    const schema = object().shape({
        form: array()
            .of(
                object().shape({
                    name: string().required("Nama barang harus diisi"),
                    qty: number().required("Jumlah barang harus diisi").min(1, "Minimal 1 barang"),
                })
            )
            .min(1, "Minimal 1 barang harus diisi"),
    });

    const formik = useFormik({
        initialValues: {
            form: [
                {
                    name: "",
                    qty: 0,
                },
            ],
        },
        validationSchema: schema,
        onSubmit: async e => {
            try{
                await updateData(params.id, e.form.map(item => ({ item: item.name, qty: item.qty })))
                router.back()
            }catch{
                alert('Ada kesalahan pada server!')
            }
        },
    });
    const { values, errors, handleChange, handleSubmit, isSubmitting } = formik;
    const onAddItem = () => {
        formik.setFieldValue("form", [...values.form, { name: "", qty: 0 }]);
    };

    useEffect(() => {
        const fetchItem = async () => {
            try{
                const data = await getItems()
                setItem(data)
            }catch{
                alert('Ada kesalahan pada server!')
            }
        };

        const getDataRequest = async () => {
            try{
                const data = await getData(params.id)
                console.log(data)
                if(data){
                    formik.setFieldValue("form", data.purchaseRequestItem.map(item => ({ name: item.idItem, qty: item.qty })))
                }
            }catch{ 
                alert('Ada kesalahan pada server!')
            }
        }

        getDataRequest();
        fetchItem();
    }, [])

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <MeForm />
            <p className="text-xl font-semibold">Daftar barang</p>
            {values.form.map((e, index) => (
                <div className="flex gap-4 es-center" key={index}>
                    <div className="form-control w-full">
                        <label htmlFor={`name-${index}`} className="label">
                            <span className="label-text">Nama barang</span>
                        </label>

                        <select
                            id={`name-${index}`}
                            className="select select-bordered"
                            name={`form[${index}].name`}
                            value={e.name}
                            onChange={handleChange}
                        >
                            <option value="">Pilih barang</option>
                            {item.map((e, index) => (
                                <option key={index} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                        {(errors.form && errors.form[index] && typeof errors.form[index] === 'object' && 'name' in errors.form[index] && (
                            <label className="label">
                                <span className="label-text-alt text-red-900">
                                    {(errors.form[index] as FormikErrors<{ name: string; qty: number; }>).name}
                                </span>
                            </label>
                        ))}
                    </div>

                    <div className="form-control w-full">
                        <label htmlFor={`qty-${index}`} className="label">
                            <span className="label-text">Jumlah</span>
                        </label>

                        <input
                            type="number"
                            className="input input-bordered"
                            id={`qty-${index}`}
                            placeholder="Masukan jumlah barang"
                            name={`form[${index}].qty`}
                            value={e.qty}
                            onChange={handleChange}
                        />
                        {errors.form && errors.form[index] && typeof errors.form[index] === 'object' && 'name' in errors.form[index] && (
                            <label className="label">
                                <span className="label-text-alt text-red-900">
                                    {(errors.form[index] as FormikErrors<{ name: string; qty: number; }>).qty}
                                </span>
                            </label>
                        )}
                    </div>

                    <button
                        type="button"
                        className="btn btn-ghost btn-sm btn-circle"
                        onClick={() => {
                            const updatedForm = [...values.form];
                            updatedForm.splice(index, 1);
                            formik.setFieldValue("form", updatedForm);
                        }}
                    >
                        <XmarkIcon className="w-4" />
                    </button>
                </div>
            ))}

            <button
                className="btn btn-primary mt-5"
                type="button"
                onClick={onAddItem}
            >
                <AddIcon className="w-4 fill-white" />
                <span>Tambah barang</span>
            </button>

            <div className="flex justify-end">
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    { isSubmitting ? <div className="loading"></div> : null }
                    Kirim permintaan
                </button>
            </div>
        </form>
    );
};

export default Form;