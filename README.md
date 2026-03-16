# 📚 Bookshelf API - Dicoding Submission

Selamat datang di proyek **Bookshelf API**! 🚀

Proyek ini merupakan submission tugas akhir untuk kelas **"Belajar Membuat Aplikasi Back-End untuk Pemula"** dari **Dicoding Indonesia**.

API ini dibangun menggunakan **Node.js** dan framework **Express.js**, dirancang khusus sebagai RESTful API sederhana namun kokoh untuk pengelolaan data buku (Bookshelf) secara _in-memory_.

---

## ✨ Fitur Utama (Kriteria Dicoding Terpenuhi)

Aplikasi ini telah lulus kriteria ketat dari Dicoding, mencakup fitur-fitur berikut:

- 📖 **Menambahkan Buku (`POST /books`)**: Menyimpan data buku lengkap dengan validasi (misal: `readPage` tidak boleh melampaui `pageCount`).
- 📚 **Menampilkan Seluruh Buku (`GET /books`)**: Menampilkan daftar ringkas buku. Mendukung **Query Parameters Opsional** untuk filter berdasarkan `name`, `reading`, dan `finished`!
- 🔍 **Detail Buku (`GET /books/:bookId`)**: Melihat informasi spesifik dan lengkap dari sebuah buku menggunakan ID unik.
- ✏️ **Mengubah Data Buku (`PUT /books/:bookId`)**: Memperbarui informasi buku yang sudah ada beserta sistem validasi input data.
- 🗑️ **Menghapus Buku (`DELETE /books/:bookId`)**: Menghapus data buku dari sistem berdasarkan ID.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini telah direfactor secara modern untuk memenuhi standar (_Best-Practices_) terbaru:

- **[Node.js](https://nodejs.org/)**: Runtime environment (LTS).
- **[Express.js](https://expressjs.com/)**: Framework web minimalis, cepat, dan standar industri untuk routing.
- **[Nanoid (v3)](https://github.com/ai/nanoid)**: Dipakai untuk men-generate ID buku unik berukuran 16 karakter yang URL-friendly.
- **[ESLint](https://eslint.org/)** (Google Config): Dimasukkan untuk menjaga kualitas, kerapihan, dan konsistensi kode JavaScript (0 Errors/Warnings).

---

## 📂 Struktur Project

```
.
├── src
│   ├── books.js        # Array in-memory untuk menyimpan data buku
│   ├── handler.js      # Logika controller (Request/Response API)
│   ├── routes.js       # Definisi endpoint (Express Router)
│   └── server.js       # Entry point inisialisasi server Express
├── .eslintrc.json      # Aturan linter (Google Style Guide)
├── package.json        # Konfigurasi dependensi NPM & Runner Script
└── README.md           # Dokumentasi yang sedang Anda baca 😉
```

---

## 🚀 Cara Menjalankan Project

Ikuti langkah-langkah simpel di bawah ini untuk menguji Bookshelf API di komputer lokal Anda:

### 1. Instalasi Node Modules

Pastikan Anda sudah menginstal **Node.js**. Buka terminal di dalam folder proyek ini lalu jalankan:

```bash
npm install
```

_(Perintah ini akan mengunduh paket `express`, `cors`, `nanoid`, dsb.)_

### 2. Jalankan Server

Kriteria Dicoding mewajibkan aplikasi bisa dijalankan dengan spesifik sebuah runner script, yaitu `start`.

```bash
npm run start
```

Atau jika Anda sedang men-develop dan ingin server otomatis _restart_:

```bash
npm run dev
```

### 3. Sukses! 🎉

Jika berhasil, terminal akan menampilkan pesan:
`Server berjalan pada http://localhost:9000`

---

## 🧪 Pengujian via Postman

API ini dirancang 100% kompatibel dan siap diuji menggunakan **Bookshelf API Test Collection** bawaan dari Dicoding.

1. Download dan import file Collection dan Environment Postman dari portal Dicoding.
2. Jalankan `npm run start` di terminal latar belakang.
3. Jalankan "Run Collection" di Postman. Semua test wajib dan opsional dirancang untuk **Passed/Lulus Sempurna**.

---

## 👤 Tentang Penulis

Dibuat dengan 💻 dan ☕ oleh **[Novendy Farhanudin (nfrhndn)](https://github.com/nfrhndn)**.

Sebagai bagian dari komitmen untuk terus berkembang dan menjadi Developer handal bersama **Dicoding Indonesia**.
