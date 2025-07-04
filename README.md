# 🛍️ Aplikasi Manajemen Kedai Harian (UMKM)

Aplikasi ini merupakan sistem manajemen berbasis web yang dirancang khusus untuk kedai harian, warung sembako, atau bengkel UMKM. Aplikasi ini membantu pemilik usaha untuk mengelola produk, layanan, transaksi, laporan, serta data karyawan secara efisien dan mudah diakses.

---

## ✅ Fitur Utama

| Fitur        | Deskripsi                                                                 |
|--------------|---------------------------------------------------------------------------|
| Dashboard    | Tampilan utama yang menampilkan ringkasan data dan statistik              |
| Karyawan     | Tambah, lihat daftar, edit, dan hapus data karyawan                       |
| Layanan      | Tambah, lihat daftar, edit, dan hapus layanan jasa                        |
| Sparepart    | Tambah, lihat daftar, edit, dan hapus data sparepart atau barang          |
| Transaksi    | Tambah transaksi, edit transaksi, hapus transaksi, dan lihat daftar       |
| Laporan      | Rekap transaksi atau aktivitas berdasarkan waktu atau kategori            |

---

## 🌐 Routing Aplikasi

### 🔹 Base Routing

| Path             | Name            | Komponen            |
|------------------|------------------|---------------------|
| `/`              | DashboardView    | Halaman dashboard   |
| `/laporan`       | LaporanView      | Halaman laporan     |
| `/transaksi`     | TransaksiView    | Daftar transaksi    |

### 🔸 Routing Karyawan

| Path                  | Name              | Komponen             |
|-----------------------|-------------------|----------------------|
| `/karyawan`           | karyawanList      | ListKaryawan.vue     |
| `/karyawan/tambah`    | karyawanTambah    | TambahKaryawan.vue   |
| `/karyawan/edit`      | karyawanEdit      | EditKaryawan.vue     |

### 🔸 Routing Layanan

| Path                  | Name              | Komponen             |
|-----------------------|-------------------|----------------------|
| `/layanan`            | layananList       | ListLayanan.vue      |
| `/layanan/tambah`     | layananTambah     | TambahLayanan.vue    |
| `/layanan/edit`       | layananEdit       | EditLayanan.vue      |

### 🔸 Routing Sparepart

| Path                   | Name               | Komponen               |
|------------------------|--------------------|------------------------|
| `/sparepart`           | sparepartList      | ListSparepart.vue      |
| `/sparepart/tambah`    | sparepartTambah    | TambahSparepart.vue    |
| `/sparepart/edit`      | sparepartEdit      | EditSparepart.vue      |

---

## 📡 API Endpoint (menggunakan JSON Server)

### 👤 Karyawan

| Method  | Endpoint         | Fungsi                            |
|---------|------------------|-----------------------------------|
| GET     | `/karyawan`      | Ambil semua data karyawan         |
| POST    | `/karyawan`      | Tambah data karyawan              |
| PUT     | `/karyawan/:id`  | Edit data karyawan                |
| DELETE  | `/karyawan/:id`  | Hapus data karyawan               |

### 🧾 Layanan

| Method  | Endpoint         | Fungsi                            |
|---------|------------------|-----------------------------------|
| GET     | `/layanan`       | Ambil semua layanan               |
| POST    | `/layanan`       | Tambah layanan                    |
| PUT     | `/layanan/:id`   | Edit layanan                      |
| DELETE  | `/layanan/:id`   | Hapus layanan                     |

### 🔧 Sparepart

| Method  | Endpoint            | Fungsi                          |
|---------|---------------------|---------------------------------|
| GET     | `/sparepart`        | Ambil semua sparepart           |
| POST    | `/sparepart`        | Tambah sparepart                |
| PUT     | `/sparepart/:id`    | Edit sparepart                  |
| DELETE  | `/sparepart/:id`    | Hapus sparepart                 |

### 💳 Transaksi

| Method  | Endpoint            | Fungsi                          |
|---------|---------------------|---------------------------------|
| GET     | `/transaksi`        | Ambil semua transaksi           |
| POST    | `/transaksi`        | Tambah transaksi                |
| PUT     | `/transaksi/:id`    | Edit transaksi                  |
| DELETE  | `/transaksi/:id`    | Hapus transaksi                 |

---

## 💡 Catatan

- Aplikasi ini cocok digunakan oleh usaha kecil menengah yang menjual barang atau layanan jasa.
- Komponen disusun berdasarkan entitas dan diorganisir dengan routing modular.
- JSON Server digunakan sebagai backend mock API untuk menyimpan data.
- Aplikasi dapat dikembangkan lebih lanjut seperti menambahkan fitur login atau ekspor laporan.

---
