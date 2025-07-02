<script setup>
import { useSparepartStore } from '@/stores/sparepartStore.js'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const store = useSparepartStore()
const isLoading = ref(true)

onMounted(async () => {
    if (store.sparepart.length === 0) {
        isLoading.value = true
        try {
            await store.getSparepart()
        } finally {
            isLoading.value = false
        }
    } else {
        isLoading.value = false
    }
})
</script>

<template>
    <div class="p-6 bg-gray-50 min-h-screen">
        <!-- Header Section -->
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">Daftar Sparepart</h1>
            <p class="text-gray-600">Kelola dan pantau stok sparepart Anda</p>
            <div class="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        <!-- Loading State -->
        <div v-if="isLoading" class="space-y-4">
            <div v-for="n in 6" :key="n" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-pulse">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
                        <div class="space-y-2">
                            <div class="h-4 bg-gray-300 rounded w-32"></div>
                            <div class="h-3 bg-gray-200 rounded w-24"></div>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="h-4 bg-gray-300 rounded w-16"></div>
                        <div class="h-3 bg-gray-200 rounded w-12"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Empty State -->
        <div v-else-if="!isLoading && store.sparepart.length === 0" 
             class="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
            <div class="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Tidak ada sparepart</h3>
            <p class="text-gray-500">Belum ada data sparepart yang tersedia.</p>
        </div>

        <!-- Sparepart List -->
        <div v-else class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="sparepart in store.sparepart" :key="sparepart.id" 
                 class="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden group">
                
                <!-- Card Header -->
                <div class="p-6 pb-4">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                {{ sparepart.nama.charAt(0).toUpperCase() }}
                            </div>
                            <div>
                                <span class="text-xs text-gray-500 font-medium">ID: {{ sparepart.id }}</span>
                            </div>
                        </div>
                        <div class="flex items-center space-x-1">
                            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span class="text-xs text-gray-500">Active</span>
                        </div>
                    </div>

                    <!-- Sparepart Name -->
                    <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {{ sparepart.nama }}
                    </h3>
                </div>

                <!-- Stock Info -->
                <div class="px-6 pb-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-xs text-gray-500 mb-1">Stok Tersedia</p>
                            <div class="flex items-center space-x-2">
                                <span class="text-2xl font-bold text-gray-900">{{ sparepart.stok }}</span>
                                <span class="text-sm text-gray-500">unit</span>
                            </div>
                        </div>
                        
                        <!-- Stock Status Badge -->
                        <div class="text-right">
                            <span v-if="sparepart.stok > 50" 
                                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <div class="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></div>
                                Stok Aman
                            </span>
                            <span v-else-if="sparepart.stok > 10" 
                                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                <div class="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-1"></div>
                                Stok Rendah
                            </span>
                            <span v-else 
                                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                <div class="w-1.5 h-1.5 bg-red-400 rounded-full mr-1"></div>
                                Stok Kritis
                            </span>
                        </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="mt-3">
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-xs text-gray-500">Level Stok</span>
                            <span class="text-xs text-gray-700 font-medium">{{ Math.min(100, (sparepart.stok / 100) * 100) }}%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                            <div class="h-1.5 rounded-full transition-all duration-500"
                                 :class="{
                                     'bg-green-500': sparepart.stok > 50,
                                     'bg-yellow-500': sparepart.stok > 10 && sparepart.stok <= 50,
                                     'bg-red-500': sparepart.stok <= 10
                                 }"
                                 :style="{ width: Math.min(100, (sparepart.stok / 100) * 100) + '%' }">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card Footer -->
                <div class="px-6 py-3 bg-gray-50 border-t border-gray-100">
                    <div class="flex items-center justify-between">
                        <button class="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
                            Lihat Detail
                        </button>
                        <div class="flex space-x-2">
                            <button @click="router.push({name: 'sparepartEdit'})" class="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                </svg>
                            </button>
                            <button class="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats Summary -->
        <div v-if="!isLoading && store.sparepart.length > 0" class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div class="flex items-center">
                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-500">Total Sparepart</p>
                        <p class="text-2xl font-bold text-gray-900">{{ store.sparepart.length }}</p>
                    </div>
                </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div class="flex items-center">
                    <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-500">Stok Aman</p>
                        <p class="text-2xl font-bold text-gray-900">{{ store.sparepart.filter(s => s.stok > 50).length }}</p>
                    </div>
                </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div class="flex items-center">
                    <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L5.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-500">Stok Kritis</p>
                        <p class="text-2xl font-bold text-gray-900">{{ store.sparepart.filter(s => s.stok <= 10).length }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>