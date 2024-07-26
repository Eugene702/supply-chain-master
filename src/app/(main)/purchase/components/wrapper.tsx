import dynamic from "next/dynamic"

const Table = dynamic(() => import('./table'))
const Wrapper = () => {
    return <Table />
}

export default Wrapper