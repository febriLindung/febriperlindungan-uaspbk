<script setup>
import { useSparepartStore } from '@/stores/sparepartStore'
import { ref, onMounted } from 'vue'

const store = useSparepartStore()
const newNama = ref('')
const newStok = ref('')
const isSubmitting = ref(false)
const showSuccessMessage = ref(false)
const errorMessage = ref('')

const handleAdd = async () => {
  if (!newNama.value || !newStok.value) {
    errorMessage.value = 'Nama dan Stok wajib diisi'
    setTimeout(() => errorMessage.value = '', 3000)
    return
  }

  if (Number(newStok.value) < 0) {
    errorMessage.value = 'Stok tidak boleh bernilai negatif'
    setTimeout(() => errorMessage.value = '', 3000)
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''

  try {
    await store.addSparepart({
      nama: newNama.value,
      stok: Number(newStok.value)
    })

    newNama.value = ''
    newStok.value = ''
    
    // Show success message
    showSuccessMessage.value = true
    setTimeout(() => showSuccessMessage.value = false, 3000)

    // Refresh data biar daftar paling baru
    await store.getSparepart()
  } catch (error) {
    errorMessage.value = 'Gagal menambahkan sparepart. Silakan coba lagi.'
    setTimeout(() => errorMessage.value = '', 3000)
  } finally {
    isSubmitting.value = false
  }
}

onMounted(async () => {
  await store.getSparepart()
})
</script>

<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <!-- Header Section -->
    <div class="mb-8">
      <div class="flex items-center space-x-3 mb-4">
        <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Tambah Sparepart</h1>
          <p class="text-gray-600">Tambahkan sparepart baru ke dalam inventori</p>
        </div>
      </div>
      <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
    </div>

    <!-- Success Message -->
    <div v-if="showSuccessMessage" 
         class="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3 animate-fade-in">
      <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <div>
        <p class="text-green-800 font-medium">Berhasil!</p>
        <p class="text-green-700 text-sm">Sparepart berhasil ditambahkan ke inventori</p>
      </div>
    </div>

    <!-- Error Message -->
    <div v-if="errorMessage" 
         class="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3 animate-fade-in">
      <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
        <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>
      <div>
        <p class="text-red-800 font-medium">Error!</p>
        <p class="text-red-700 text-sm">{{ errorMessage }}</p>
      </div>
    </div>

    <!-- Form Container -->
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <!-- Form Header -->
        <div class="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-6">
          <h2 class="text-xl font-bold text-white mb-2">Form Tambah Sparepart</h2>
          <p class="text-green-100 text-sm">Isi form di bawah untuk menambahkan sparepart baru</p>
        </div>

        <!-- Form Body -->
        <form @submit.prevent="handleAdd" class="p-8 space-y-6">
          <!-- Nama Sparepart Field -->
          <div class="space-y-2">
            <label for="nama" class="block text-sm font-semibold text-gray-700 mb-2">
              <span class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
                <span>Nama Sparepart</span>
                <span class="text-red-500">*</span>
              </span>
            </label>
            <div class="relative">
              <input 
                id="nama"
                v-model="newNama" 
                type="text" 
                placeholder="Masukkan nama sparepart..." 
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 placeholder-gray-400 bg-gray-50 focus:bg-white"
                :disabled="isSubmitting"
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
              </div>
            </div>
            <p class="text-xs text-gray-500">Berikan nama yang jelas dan mudah diidentifikasi</p>
          </div>

          <!-- Stok Field -->
          <div class="space-y-2">
            <label for="stok" class="block text-sm font-semibold text-gray-700 mb-2">
              <span class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
                <span>Jumlah Stok</span>
                <span class="text-red-500">*</span>
              </span>
            </label>
            <div class="relative">
              <input 
                id="stok"
                v-model="newStok" 
                type="number" 
                min="0"
                placeholder="0" 
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 placeholder-gray-400 bg-gray-50 focus:bg-white"
                :disabled="isSubmitting"
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span class="text-gray-400 text-sm">unit</span>
              </div>
            </div>
            <p class="text-xs text-gray-500">Masukkan jumlah stok awal yang tersedia</p>
          </div>

          <!-- Submit Button -->
          <div class="pt-4">
            <button 
              type="submit" 
              :disabled="isSubmitting || !newNama || !newStok"
              class="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center space-x-2">
                <svg class="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                <span>Menyimpan...</span>
              </span>
              <span v-else class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>Tambah Sparepart</span>
              </span>
            </button>
          </div>

          <!-- Form Footer -->
          <div class="pt-4 border-t border-gray-100">
            <div class="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div class="flex items-center space-x-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Semua field bertanda * wajib diisi</span>
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Quick Stats -->
      <div class="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Statistik Cepat</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-blue-50 rounded-lg">
            <div class="text-2xl font-bold text-blue-600">{{ store.sparepart.length }}</div>
            <div class="text-sm text-blue-700">Total Sparepart</div>
          </div>
          <div class="text-center p-4 bg-green-50 rounded-lg">
            <div class="text-2xl font-bold text-green-600">{{ store.sparepart.filter(s => s.stok > 50).length }}</div>
            <div class="text-sm text-green-700">Stok Aman</div>
          </div>
          <div class="text-center p-4 bg-red-50 rounded-lg">
            <div class="text-2xl font-bold text-red-600">{{ store.sparepart.filter(s => s.stok <= 10).length }}</div>
            <div class="text-sm text-red-700">Perlu Restock</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>