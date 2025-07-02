import { createRouter, createWebHistory } from "vue-router";
import sparepartRouter from "./sparepartRouter.js";
import layananRouter from "./layananRouter.js";
import karyawanRouter from "./karyawanRouter.js";
import DashboardView from '@/views/DashboardView.vue'
import LaporanView from '@/views/LaporanView.vue'
import TransaksiView from '@/views/TransaksiView.vue'

const BaseRouter = [
    { path: '/', name: 'DashboardView', component: DashboardView },
    { path: '/laporan', name: 'LaporanView', component: LaporanView },
    { path: '/transaksi', name: 'TransaksiView', component: TransaksiView }
]

const routes = [
    ...BaseRouter,
    ...sparepartRouter,
    ...layananRouter,
    ...karyawanRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
