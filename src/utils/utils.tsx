import { $Enums } from "@prisma/client";
import momentT from "moment-timezone";

export const month = [ 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember' ];
export const generateRoleToString = (role: $Enums.Role) => {
    switch(role){
        case 'ADMIN': return 'Admin';
        case 'PURCHASING': return 'Pembeli';
        case 'SUPPLIER': return 'Pemasok';
        case 'WAREHOUSE': return 'Gudang';
        default: return 'Tidak diketahui';
    }
}

export const moment = (date: string | undefined) => momentT(date).tz(process.env.TZ || "Asia/Jakarta").format('DD MMMM YYYY');
export const generateStatusToString = (status: $Enums.Status) => {
    switch(status){
        case 'APPROVED': return 'Dikonfirmasi';
        case 'PENDING': return 'Menunggu';
        case 'REJECTED': return 'Ditolak';
        default: return 'Tidak diketahui';
    }
}