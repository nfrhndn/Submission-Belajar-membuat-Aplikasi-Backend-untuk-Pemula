# Bookshelf API 📚

Submission untuk kelas **"Belajar Membuat Aplikasi Backend untuk Pemula"** dari **Dicoding Indonesia**.

Project ini adalah sebuah RESTful API sederhana untuk pengelolaan data buku (Bookshelf). Dibangun menggunakan **Node.js** dan framework **Hapi**, aplikasi ini memungkinkan pengguna untuk menyimpan, melihat, memperbarui, dan menghapus data buku.

---

## 🚀 Fitur Utama

- **Menambahkan Buku**: Menyimpan data buku baru dengan detail lengkap (judul, tahun, penulis, ringkasan, dll).
- **Melihat Seluruh Buku**: Menampilkan daftar ringkas semua buku yang tersimpan.
- **Detail Buku**: Melihat informasi detail dari sebuah buku berdasarkan ID.
- **Mengubah Data Buku**: Memperbarui informasi buku yang sudah ada.
- **Menghapus Buku**: Menghapus data buku dari sistem.
- **Validasi Data**: Memastikan data yang dikirim sesuai dengan kriteria (misal: `readPage` tidak boleh lebih besar dari `pageCount`).

---

## 🛠️ Teknologi yang Digunakan

- **[Node.js](https://nodejs.org/)**: Runtime environment untuk menjalankan JavaScript di sisi server.
- **[Hapi.js](https://hapi.dev/)**: Framework web yang powerful dan fleksibel untuk membangun aplikasi dan layanan API.
- **[Nanoid](https://github.com/ai/nanoid)**: Library untuk menghasilkan ID unik yang URL-friendly.
- **[ESLint](https://eslint.org/)** (Google Config): Tools untuk menjaga konsistensi dan kualitas kode.
- **[Nodemon](https://nodemon.io/)**: Tools untuk development yang me-restart server secara otomatis saat ada perubahan file.

---

## 📂 Struktur Project

```
.
├── src
│   ├── books.js        # Penyimpanan data in-memory (array)
│   ├── handler.js      # Logika untuk menangani request (controller)
│   ├── routes.js       # Definisi rute (endpoint) API
│   └── server.js       # Konfigurasi dan inisialisasi server Hapi
├── .eslintrc.json      # Konfigurasi ESLint
├── package.json        # Daftar dependency dan script project
└── README.md           # Dokumentasi project
```

---

## 💻 Cara Menjalankan Project (Instalasi)

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini di komputer lokal Anda:

### 1. Prasyarat

Pastikan Anda sudah menginstal **Node.js** di komputer Anda. Cek dengan menjalankan perintah ini di terminal:

```bash
node -v
npm -v
```

### 2. Clone Repository (Opsional)

Jika Anda belum memiliki kode ini, clone repository ini atau download dan ekstrak file zip-nya.

### 3. Instalasi Dependencies

Buka terminal/command prompt, arahkan ke folder project ini, lalu jalankan perintah:

```bash
npm install
```

Perintah ini akan mengunduh semua library yang dibutuhkan (Hapi, Nanoid, dll) ke dalam folder `node_modules`.

### 4. Jalankan Server

Untuk menjalankan server dalam mode production:

```bash
npm run start
```

Untuk menjalankan server dalam mode development (dengan Nodemon agar auto-restart saat koding):

```bash
npm run dev
```

Jika berhasil, Anda akan melihat pesan:

```
Server berjalan pada http://localhost:9000
```

---

## 🔗 Dokumentasi API (Endpoints)

### Swagger UI 📄

Project ini dilengkapi dengan **Swagger UI** untuk memudahkan Anda mengeksplorasi dan menguji endpoint API secara visual.
Setelah server berjalan, buka browser dan akses:
**[http://localhost:9000/documentation](http://localhost:9000/documentation)**

### Daftar Endpoint Manual

Anda juga bisa menguji API ini menggunakan aplikasi seperti **Postman** atau **Insomnia**. Berikut adalah daftar endpoint yang tersedia:

| Method   | Endpoint          | Deskripsi                               |
| :------- | :---------------- | :-------------------------------------- |
| `POST`   | `/books`          | Menambahkan buku baru.                  |
| `GET`    | `/books`          | Mendapatkan seluruh buku.               |
| `GET`    | `/books/{bookId}` | Mendapatkan detail buku berdasarkan ID. |
| `PUT`    | `/books/{bookId}` | Memperbarui data buku berdasarkan ID.   |
| `DELETE` | `/books/{bookId}` | Menghapus buku berdasarkan ID.          |

### Contoh Body Request (POST /books)

Saat menambahkan buku, kirim data JSON seperti berikut:

```json
{
  "name": "Buku A",
  "year": 2010,
  "author": "John Doe",
  "summary": "Lorem ipsum dolor sit amet",
  "publisher": "Dicoding Indonesia",
  "pageCount": 100,
  "readPage": 25,
  "reading": false
}
```

---

## 👤 Penulis

Dibuat dengan ❤️ oleh **[nfrhndn](https://github.com/nfrhndn)**.

Submission ini adalah bagian dari perjalanan belajar saya di **Dicoding Indonesia**. Semoga bermanfaat!
