import ListSparepart from '@/views/sparepart/ListSparepart.vue'
import EditSparepart from '@/views/sparepart/EditSparepart.vue'
import TambahSparepart from '@/views/sparepart/TambahSparepart.vue'

export default [
    {
        path:'/sparepart',
        name: 'sparepartList',
        component: ListSparepart
    },
    {
        path:'/sparepart/edit',
        name: 'sparepartEdit',
        component: EditSparepart
    },
    {
        path:'/sparepart/tambah',
        name: 'sparepartTambah',
        component: TambahSparepart
    }
]