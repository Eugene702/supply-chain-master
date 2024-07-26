"use client"

import Image from "next/image"
import Icon from '@/assets/drawer/icons.svg'
import dynamic from "next/dynamic"
import Link from "next/link"
import { usePathname } from "next/navigation"

const DashboardIcon = dynamic(() => import('@/assets/drawer/dashboard'))
const WarehouseIcon = dynamic(() => import('@/assets/drawer/warehouse'))
const BasketShoppingIcon = dynamic(() => import('@/assets/drawer/basketShopping'))
const TruckFieldIcon = dynamic(() => import('@/assets/drawer/truckField'))

const Sidenav = () => {
    const pathName = usePathname()
    const isActiveParentMenu = (path: string) => pathName.startsWith(path)

    return <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu menu-lg bg-white min-h-full w-72 px-2 rounded-r-3xl space-y-3">
            <li className="mt-5">
                <div className="flex gap-x-2 items-center pointer-events-none hover:bg-white">
                    <Image
                        src={Icon}
                        width={0}
                        height={0}
                        alt="Logo"
                        className="w-16" />

                    <h1 className="text-lg font-semibold">Supply Chain Master</h1>
                </div>
            </li>
            <li className="!mt-10">
                <Link href="/" className={`linknav ${isActiveParentMenu('/dashboard') ? 'active' : ''}`}>
                    <DashboardIcon
                        className={`linknav-icon ${isActiveParentMenu('/dashboard') ? 'active' : ''}`} />
                    <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <details open={isActiveParentMenu('/warehouse')}>
                    <summary className="linknav">
                        <WarehouseIcon
                            className="linknav-icon" />
                        <span>Gudang</span>
                    </summary>
                    <ul>
                        <li>
                            <Link href="/warehouse/items" className={`linknav ${isActiveParentMenu('/warehouse/items') ? 'active' : ''}`}>Daftar Barang</Link>
                        </li>
                        <li>
                            <Link href="/warehouse/purchase-requisition" className={`linknav ${isActiveParentMenu('/warehouse/purchase-requisition') ? 'active' : ''}`}>Permintaan Pembelian</Link>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <details open={isActiveParentMenu('/purchase')}>
                    <summary className="linknav">
                        <BasketShoppingIcon
                            className="linknav-icon" />
                        <span>Pembelian</span>
                    </summary>
                    <ul>
                        <li><Link href="/purchase" className={`linknav ${isActiveParentMenu('/purchase') ? 'active' : ''}`}>Daftar Pembelian</Link></li>
                        <li><Link href="/purchase/report" className={`linknav ${isActiveParentMenu('/purchase/report') ? 'active' : ''}`}>Laporan</Link></li>
                    </ul>
                </details>
            </li>
            <li>
                <Link href="/supplier" className={`linknav ${isActiveParentMenu('/supplier') ? 'active' : ''}`}>
                    <TruckFieldIcon
                        className="linknav-icon" />
                    <span>Pemasok</span>
                </Link>
            </li>
        </ul>
    </div>
}

export default Sidenav