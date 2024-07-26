import dynamic from "next/dynamic"

const Information = dynamic(() => import('./information'))
const Wrapper = () => {
    return <>
        <button className="btn">print</button>
        <Information />
    </>
}

export default Wrapper