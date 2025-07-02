import ListLayanan from '@/views/layanan/ListLayanan.vue'
import EditLayanan from '@/views/layanan/EditLayanan.vue'
import TambahLayanan from '@/views/layanan/TambahLayanan.vue'

export default [
    {
        path:'/layanan',
        name: 'layananList',
        component: ListLayanan
    },
    {
        path:'/layanan/edit',
        name: 'layananEdit',
        component: EditLayanan
    },
    {
        path:'/layanan/tambah',
        name: 'layananTambah',
        component: TambahLayanan
    }
]