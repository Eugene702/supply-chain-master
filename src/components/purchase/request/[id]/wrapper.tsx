import dynamic from "next/dynamic"

const Form = dynamic(() => import('./form'))
const Wrapper = () => {
    return <Form />
}

export default Wrapper