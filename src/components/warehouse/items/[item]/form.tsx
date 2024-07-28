"use client"

import { getItem, update } from '@/app/(main)/warehouse/items/[item]/action'
import { $Enums } from '@prisma/client'
import { useFormik } from 'formik'
import dynamic from 'next/dynamic'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { number, object, string } from 'yup'

const MeForm = dynamic(() => import('@/components/meForm'))
const Form = () => {
    const router = useRouter()
    const params = useParams<{item: string}>()

    const schema = object().shape({
        name: string().required('Nama barang harus diisi'),
        stock: number().required('Stok barang harus diisi').min(1, 'Stok barang minimal 1'),
        units: string().required('Satuan barang harus diisi').oneOf([ $Enums.Unit.RIM, $Enums.Unit.UNIT ], 'Satuan barang tidak valid')
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            stock: 0,
            units: ''
        },
        validationSchema: schema,
        onSubmit: async e => {
            try{
                await update(params.item, {
                    name: e.name,
                    stock: e.stock,
                    unit: e.units as $Enums.Unit
                })

                router.back()
            }catch{
                alert('Ada kesalahan pada server!')
            }
        }
    })
    const { handleSubmit, handleChange, values, errors, isSubmitting } = formik

    useEffect(() => {
        const getData = async () => {
            try{
                const item = await getItem(params.item)
                if(item){
                    formik.setValues({
                        name: item.name,
                        stock: item.stock,
                        units: item.unit
                    })
                }else{
                    alert('Barang tidak ditemukan!')
                }
            }catch{
                alert('Ada kesalahan pada server!')
            }
        }

        getData()
    }, [])

    return <form onSubmit={handleSubmit}>
        <MeForm />
        <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="form-control">
                <label htmlFor="name" className="label">
                    <span className="label-text">Nama barang</span>
                </label>

                <input type="text" className="input input-bordered" placeholder="Masukan nama barang" id="name" name="name" value={values.name} onChange={handleChange} />
                {
                    errors.name ? <label htmlFor="name" className="label">
                        <span className="label-text-alt text-red-400">{ errors.name }</span>
                    </label> : null
                }
            </div>
            <div className="form-control">
                <label htmlFor="stock" className="label">
                    <span className="label-text">Stok barang</span>
                </label>

                <input type="number" className="input input-bordered" placeholder="Masukan stok barang" name="stock" value={values.stock} onChange={handleChange} />
                {
                    errors.stock ? <label htmlFor="stock" className="label">
                        <span className="label-text-alt text-red-400">{ errors.stock }</span>
                    </label> : null
                }
            </div>
            <div className="form-control col-span-2">
                <label htmlFor="units" className="label">
                    <span className="label-text">Satuan barang</span>
                </label>

                <select id="units" className="select select-bordered" name="units" value={values.units} onChange={handleChange}>
                    <option value="">Pilih satuan barang</option>
                    <option value={$Enums.Unit.UNIT}>Unit</option>
                    <option value={$Enums.Unit.RIM}>Rim</option>
                </select>

                {
                    errors.units ? <label htmlFor="units" className="label">
                        <span className="label-text-alt text-red-400">{ errors.units }</span>
                    </label> : null
                }
            </div>
        </div>

        <button type="submit" className="btn btn-primary rounded-xl mt-3" disabled={isSubmitting}>
            { isSubmitting ? <div className="loading"></div> : null }
            <span>Simpan</span>
        </button>
    </form>
}

export default Form