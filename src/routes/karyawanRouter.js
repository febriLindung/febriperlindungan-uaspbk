import ListKaryawan from '@/views/karyawan/ListKaryawan.vue'
import EditKaryawan from '@/views/karyawan/EditKaryawan.vue'
import TambahKaryawan from '@/views/karyawan/TambahKaryawan.vue'

export default [
    {
        path:'/karyawan',
        name: 'karyawanList',
        component: ListKaryawan
    },
    {
        path:'/karyawan/edit',
        name: 'karyawanEdit',
        component: EditKaryawan
    },
    {
        path:'/karyawan/tambah',
        name: 'karyawanTambah',
        component: TambahKaryawan
    }
]