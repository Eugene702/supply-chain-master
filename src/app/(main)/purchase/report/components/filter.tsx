"use client"
import { month } from "@/utils/utils";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { number, object } from "yup";

const Filter = () => {
    const router = useRouter();

    const schema = object().shape({
        year: number().required("Tahun harus diisi"),
    });

    const formik = useFormik({
        initialValues: {
            month: "",
            year: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            const { month, year } = values;
            const query = new URLSearchParams({ month, year }).toString();
            router.push(`?${query}`);
        },
    });
    const { handleSubmit, handleChange, values, errors, isSubmitting } = formik;

    return (
        <form className="flex gap-x-4 items-end" onSubmit={handleSubmit}>
            <div className="w-full">
                <label className="block">Bulan</label>
                <select
                    className="select select-bordered w-full"
                    name="month"
                    value={values.month}
                    onChange={handleChange}
                >
                    <option value="" disabled selected>
                        Pilih bulan
                    </option>
                    {month.map((item, index) => {
                        return (
                            <option key={index} value={index + 1}>
                                {item}
                            </option>
                        );
                    })}
                </select>
                {errors.month && <div className="text-red-500">{errors.month}</div>}
            </div>

            <div className="w-full">
                <label className="block">Tahun</label>
                <input
                    type="number"
                    className="input input-bordered w-full"
                    name="year"
                    value={values.year}
                    onChange={handleChange}
                />
                {errors.year && <div className="text-red-500">{errors.year}</div>}
            </div>

            <button type="submit" className={`btn ${isSubmitting ? "isLoading" : ""}`}>
                Cari
            </button>
        </form>
    );
};

export default Filter;