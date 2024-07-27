"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent } from "react"
import { useDebouncedCallback } from "use-debounce"

const SearchForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = new URLSearchParams(searchParams)
    const handleOnChange = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === "") {
            query.delete("search")
        } else {
            query.set("search", e.target.value)
        }

        router.replace(`?${query.toString()}`)
    }, 300)

    return <div className="form-control">
        <label htmlFor="search" className="label">
            <span className="label-text">Cari sesuatu</span>
        </label>

        <input type="text" className="input input-bordered" placeholder="Silahkan cari disini..." defaultValue={searchParams.get('search') ?? ''} onChange={handleOnChange} />
    </div>
}

export default SearchForm