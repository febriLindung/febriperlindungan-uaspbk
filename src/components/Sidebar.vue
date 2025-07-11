<script setup>

const menu = [
    {
        title: 'Dashboard',
        name: 'DashboardView',
        sub: []
    },
    {
        title: 'Sparepart',
        sub: [
            { title: 'Daftar Sparepart', name: 'sparepartList' },
            { title: 'Tambah Sparepart', name: 'sparepartTambah' }
        ]
    },
    {
        title: 'Karyawan',
        sub: [
            { title: 'Daftar Karyawan', name: 'karyawanList' },
            { title: 'Tambah Karyawan', name: 'karyawanTambah' }
        ]
    },
    {
        title: 'Layanan',
        sub: [
            { title: 'Daftar Layanan', name: 'layananList' },
            { title: 'Tambah Layanan', name: 'layananTambah' }
        ]
    },
    {
        title: 'Transaksi',
        name: 'TransaksiView',
        sub: []
    },
        {
        title: 'Laporan',
        name: 'LaporanView',
        sub: []
    },
]

</script>

<template>
  <aside class="fixed w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen p-6 shadow-2xl border-r border-gray-700 overflow-auto custom-scrollbar">
    <div class="mb-8">
      <h2 class="text-xl font-bold text-white mb-2">Navigation</h2>
      <div class="w-12 h-1 bg-blue-500 rounded-full"></div>
    </div>
    
    <nav>
      <ul class="space-y-4">
        <li v-for="(item, index) in menu" :key="index">
          <!-- Menu with submenu -->
          <div v-if="item.sub && item.sub.length > 0" class="group">
            <div class="flex items-center justify-between mb-3">
              <span class="block font-bold text-xs uppercase tracking-widest text-gray-400 group-hover:text-blue-400 transition-colors duration-200">
                {{ item.title }}
              </span>
              <div class="w-4 h-0.5 bg-gray-600 group-hover:bg-blue-500 transition-colors duration-200"></div>
            </div>
            
            <ul class="space-y-2 ml-2 relative">
              <!-- Vertical line -->
              <div class="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-600 to-transparent"></div>
              
              <li v-for="(subItem, subIndex) in item.sub" :key="subIndex" class="relative">
                <!-- Connection dot -->
                <div class="absolute left-1.5 top-3 w-1 h-1 bg-gray-500 rounded-full"></div>
                
                <router-link
                  :to="{ name: subItem.name }"
                  class="block text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 pl-6 pr-3 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:translate-x-1 border border-transparent hover:border-gray-600"
                >
                  <span class="flex items-center justify-between">
                    {{ subItem.title }}
                    <svg class="w-4 h-4 opacity-0 hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
          
          <!-- Menu without submenu -->
          <div v-else>
            <router-link
              :to="{ name: item.name }"
              class="block font-semibold text-sm uppercase tracking-wide text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 px-4 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:translate-x-1 border border-transparent hover:border-blue-500"
            >
              <span class="flex items-center justify-between">
                {{ item.title }}
                <svg class="w-4 h-4 opacity-0 hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5-5 5M6 7l5 5-5 5"></path>
                </svg>
              </span>
            </router-link>
          </div>
        </li>
      </ul>
    </nav>
    
  </aside>
</template>

<style scoped>
/* Custom Scrollbar Styling */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: linear-gradient(180deg, #1f2937 0%, #111827 100%);
  border-radius: 10px;
  margin: 10px 0;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #6b7280 0%, #4b5563 100%);
  border-radius: 10px;
  border: 1px solid #374151;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #9ca3af 0%, #6b7280 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.custom-scrollbar::-webkit-scrollbar-thumb:active {
  background: linear-gradient(180deg, #d1d5db 0%, #9ca3af 100%);
}

/* Firefox Scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #2b69e6bc #1f2937;
}
</style>
