"use client"

import dynamic from "next/dynamic"
import { GetDataPayload, rejectData, saveData } from "../action"
import { useParams, useRouter } from "next/navigation"
import { array, number, object } from "yup"
import { FormikErrors, useFormik } from "formik"

const XmarkIcon = dynamic(() => import('@/assets/drawer/xmark'))
const Table = ({ data }: { data: GetDataPayload }) => {
    const params = useParams<{id: string}>()
    const router = useRouter()
    const handleReject = async () => {
        try{
            await rejectData(params.id)
            router.back()
        }catch{
            alert('Ada kesalahan pada server!')
        }
    }

    const schema = object().shape({
        form: array().of(object().shape({
            qty: number().min(1, "Minimal 1").required(),
            price: number().min(1000, "Minimal 1000").required()
        }))
    })

    const formik = useFormik({
        initialValues: {
            idSupplier: data.idSupplier,
            form: data.purchaseItem.map(item => ({
                idPurchaseItem: item.id,
                qty: item.purchaseRequestItem.qty,
                price: 0
            }))
        },
        validationSchema: schema,
        onSubmit: async values => {
            try{
                await saveData(data.idSupplier, data.id, values.form)
                router.back()
            }catch{
                alert('Ada kesalahan pada server!')
            }
        }
    })
    const { handleSubmit, values, errors, isSubmitting } = formik

    const handleDelete = (index: number) => {
        const updatedForm = [...values.form];
        updatedForm.splice(index, 1);
        formik.setFieldValue('form', updatedForm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <table className="table table-zebra table-lg">
                <thead>
                    <tr>
                        <th>Nama barang</th>
                        <th>Satuan</th>
                        <th>Jumlah Kirim</th>
                        <th>Harga Satuan</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {values.form.map((item, index) => (
                        <tr key={index}>
                            <td>{data.purchaseItem[index].purchaseRequestItem.item.name}</td>
                            <td>{data.purchaseItem[index].purchaseRequestItem.item.unit}</td>
                            <td>
                                <input
                                    type="number"
                                    className="input input-bordered w-full"
                                    value={item.qty}
                                    onChange={formik.handleChange}
                                    name={`form[${index}].qty`}
                                />
                                <label className="label"><span className="label-text-alt text-red-900">{errors.form && errors.form[index] && typeof errors.form[index] === 'object' && 'qty' in errors.form[index] && (errors.form[index] as FormikErrors<{ qty: number; price: number; }>).qty}</span></label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="input input-bordered w-full"
                                    value={item.price}
                                    onChange={formik.handleChange}
                                    name={`form[${index}].price`}
                                />
                                <label className="label"><span className="label-text-alt text-red-900">{errors.form && errors.form[index] && (errors.form[index] as FormikErrors<{ qty: number; price: number; }>).price}</span></label>
                            </td>
                            <td>
                                <button className="btn btn-circle" onClick={() => handleDelete(index)}>
                                    <XmarkIcon className="w-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-end items-center gap-x-3 mt-5">
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    { isSubmitting ? <div className="loading"></div> : null }
                    <span>Terima pesanan</span>
                </button>
                <button type="button" className="btn text-red-900" onClick={handleReject}>Tolak pesanan</button>
            </div>
        </form>
    )
}

export default Table