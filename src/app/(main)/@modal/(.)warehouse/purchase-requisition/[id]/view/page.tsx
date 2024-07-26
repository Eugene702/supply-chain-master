import dynamic from "next/dynamic"

const Modal = dynamic(() => import('./components/modal'))
const page = () => {
    return <Modal />
}

export default page