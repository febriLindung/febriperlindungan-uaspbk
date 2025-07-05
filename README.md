# 🔧 Aplikasi Manajemen Bengkel UMKM

Aplikasi ini adalah **sistem manajemen berbasis web** yang dirancang khusus untuk mendukung operasional **bengkel UMKM** (Usaha Mikro, Kecil, dan Menengah).  
Fitur utamanya membantu mengelola **karyawan**, **layanan servis**, **stok sparepart**, **transaksi servis**, dan **laporan** secara terpusat dan mudah diakses.

---

## 🚀 Fitur Utama

| Fitur       | Deskripsi                                                                 |
|-------------|---------------------------------------------------------------------------|
| **Dashboard**   | Menampilkan ringkasan data penting seperti total transaksi, layanan terpakai, dan pendapatan harian |
| **Karyawan**    | Tambah, lihat, edit, dan hapus data karyawan bengkel                  |
| **Layanan**     | Kelola daftar layanan servis: tambah, edit, hapus layanan             |
| **Sparepart**   | Manajemen stok sparepart: tambah sparepart baru, edit, hapus sparepart lama |
| **Transaksi**   | Pencatatan transaksi servis dan penjualan sparepart                   |
| **Laporan**     | Rekap transaksi per periode (harian, bulanan) atau berdasarkan kategori |

---

## 📁 Struktur Routing Aplikasi

### 🔹 **Base Routing**

| Path         | Name             | Komponen              | Deskripsi                      |
|--------------|------------------|-----------------------|--------------------------------|
| `/`          | DashboardView    | DashboardView.vue     | Ringkasan data utama bengkel   |
| `/laporan`   | LaporanView      | LaporanView.vue       | Halaman laporan transaksi      |
| `/transaksi` | TransaksiView    | TransaksiView.vue     | Daftar transaksi servis        |

### 🔸 **Routing Karyawan**

| Path                | Name             | Komponen               | Deskripsi                     |
|---------------------|------------------|------------------------|-------------------------------|
| `/karyawan`         | karyawanList     | ListKaryawan.vue       | Daftar karyawan               |
| `/karyawan/tambah`  | karyawanTambah   | TambahKaryawan.vue     | Form tambah karyawan baru     |
| `/karyawan/edit`    | karyawanEdit     | EditKaryawan.vue       | Form edit data karyawan       |

### 🔸 **Routing Layanan**

| Path                | Name             | Komponen               | Deskripsi                     |
|---------------------|------------------|------------------------|-------------------------------|
| `/layanan`          | layananList      | ListLayanan.vue        | Daftar layanan servis         |
| `/layanan/tambah`   | layananTambah    | TambahLayanan.vue      | Form tambah layanan baru      |
| `/layanan/edit`     | layananEdit      | EditLayanan.vue        | Form edit layanan             |

### 🔸 **Routing Sparepart**

| Path                | Name             | Komponen               | Deskripsi                     |
|---------------------|------------------|------------------------|-------------------------------|
| `/sparepart`        | sparepartList    | ListSparepart.vue      | Daftar sparepart              |
| `/sparepart/tambah` | sparepartTambah  | TambahSparepart.vue    | Form tambah sparepart baru    |
| `/sparepart/edit`   | sparepartEdit    | EditSparepart.vue      | Form edit sparepart           |

---

## 📡 API Endpoint (JSON Server)

Proyek ini menggunakan **JSON Server** sebagai backend mock API.  
Setiap entitas memiliki endpoint CRUD berikut:

### 👨‍🔧 **Karyawan**

| Method  | Endpoint         | Deskripsi                     |
|---------|------------------|--------------------------------|
| GET     | `/karyawan`      | Ambil semua data karyawan      |
| POST    | `/karyawan`      | Tambah karyawan baru           |
| PUT     | `/karyawan/:id`  | Edit data karyawan berdasarkan ID |
| DELETE  | `/karyawan/:id`  | Hapus data karyawan berdasarkan ID |

### 🧾 **Layanan**

| Method  | Endpoint         | Deskripsi                     |
|---------|------------------|--------------------------------|
| GET     | `/layanan`       | Ambil daftar layanan           |
| POST    | `/layanan`       | Tambah layanan baru            |
| PUT     | `/layanan/:id`   | Edit layanan berdasarkan ID    |
| DELETE  | `/layanan/:id`   | Hapus layanan berdasarkan ID   |

### 🔩 **Sparepart**

| Method  | Endpoint         | Deskripsi                     |
|---------|------------------|--------------------------------|
| GET     | `/sparepart`     | Ambil daftar sparepart         |
| POST    | `/sparepart`     | Tambah sparepart baru          |
| PUT     | `/sparepart/:id` | Edit sparepart berdasarkan ID  |
| DELETE  | `/sparepart/:id` | Hapus sparepart berdasarkan ID |

### 💳 **Transaksi**

| Method  | Endpoint         | Deskripsi                     |
|---------|------------------|--------------------------------|
| GET     | `/transaksi`     | Ambil semua transaksi          |
| POST    | `/transaksi`     | Tambah transaksi baru          |
| PUT     | `/transaksi/:id` | Edit transaksi berdasarkan ID  |
| DELETE  | `/transaksi/:id` | Hapus transaksi berdasarkan ID |

---

## 💡 Catatan

- Aplikasi ini cocok digunakan oleh usaha kecil menengah yang menjual barang atau layanan jasa.
- Komponen disusun berdasarkan entitas dan diorganisir dengan routing modular.
- JSON Server digunakan sebagai backend mock API untuk menyimpan data.
- Aplikasi dapat dikembangkan lebih lanjut seperti menambahkan fitur login atau ekspor laporan.

---
