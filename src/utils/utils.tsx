import { $Enums } from "@prisma/client";

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