import dynamic from "next/dynamic"

const Information = dynamic(() => import('./information'))
const Wrapper = () => {
    return <Information />
}

export default Wrapper