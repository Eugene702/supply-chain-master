const SearchForm = () => {
    return <div className="form-control">
        <label htmlFor="search" className="label">
            <span className="label-text">Cari sesuatu</span>
        </label>

        <input type="text" className="input input-bordered" placeholder="Silahkan cari disini..." />
    </div>
}

export default SearchForm