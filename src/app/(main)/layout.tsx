import dynamic from "next/dynamic"
import { ReactNode } from "react"

const Sidenav = dynamic(() => import('./components/sidenav'))
const Wrapper = dynamic(() => import('./components/wrapper'))

const layout = ({
    children,
    profile,
    modal
}: {
    children: ReactNode,
    profile: ReactNode,
    modal: ReactNode
}) => {
    return <Wrapper>
        <div className="drawer lg:drawer-open">
            <input id="drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="flex">
                    <div className="p-10 w-full h-screen overflow-auto scrollbar-w-2 scrollbar-thin">
                        {children}
                        {modal}
                    </div>

                    <div className="w-96">
                        {profile}
                    </div>
                </div>
            </div>
            <Sidenav />
        </div>
    </Wrapper>
}

export default layout