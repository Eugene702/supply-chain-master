"use client"

import { addData, GetDataPayload, GetSupplierDataPayload, rejectdata } from "@/app/(main)/purchase/request/[id]/action"
import { FormikErrors, useFormik } from "formik"
import { useParams, useRouter } from "next/navigation"
import { array, object, string } from "yup"

const Form = ({ data, supplier }: { data: GetDataPayload[], supplier: GetSupplierDataPayload[] }) => {
    const params = useParams<{id: string}>()
    const router = useRouter()
    const schema = object().shape({
        form: array().of(
            object().shape({
                supplier: string().required('Pilih supplier')
            })
        )
    })

    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            form: data.map(e => ({
                purchaseRequestItem: e.id,
                supplier: ''
            }))
        },
        onSubmit: async values => {
            try{
                await addData(params.id, values.form)
                router.back()
            }catch{
                alert('Ada kesalahan pada server!')
            }
        }
    })

    const handleSupplierChange = (index: number, value: string) => {
        formik.setFieldValue(`form[${index}].supplier`, value)
    }

    const handleReject = async () => {
        try{
            await rejectdata(params.id)
            router.back()
        }catch{
            alert('Ada kesalahan pada server!')
        }
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <table className="table table-zebra table-lg">
                <thead>
                    <tr>
                        <th>Nama barang</th>
                        <th>Pemasok</th>
                    </tr>
                </thead>

                <tbody>
                    {formik.values.form.map((formItem, index) => (
                        <tr key={index}>
                            <td>{data[index].item.name}</td>
                            <td>
                                <select
                                    className="select select-bordered"
                                    name={`form[${index}].supplier`}
                                    value={formItem.supplier}
                                    onChange={e => handleSupplierChange(index, e.target.value)}
                                >
                                    <option value="">Pilih supplier</option>
                                    {supplier.map((e, supplierIndex) => (
                                        <option key={supplierIndex} value={e.id}>
                                            {e.supplier?.name}
                                        </option>
                                    ))}
                                </select>
                                {
                                    formik.errors.form && formik.errors.form[index] && (formik.errors.form[index] as FormikErrors<{ supplier: string }>).supplier ?
                                        <label htmlFor="" className="label">
                                            <span className="label-text-alt text-red-900">{(formik.errors.form[index] as FormikErrors<{ supplier: string }>).supplier}</span>
                                        </label> : null
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-end items-center gap-x-2 mt-5">
                <button type="button" className="btn text-red-900" onClick={handleReject}>
                    Tolak pesanan
                </button>
                <button type="submit" className="btn btn-primary">
                    Buat pesanan
                </button>
            </div>
        </form>
    )
}

export default Form