const {nanoid} = require('nanoid');
const books = require('./books');

// Kriteria 3: Menyimpan Buku
const addBookHandler = (req, res) => {
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = req.body;

  // Validasi: Tidak ada properti name
  if (!name) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
  }

  // Validasi: readPage lebih besar dari pageCount
  if (readPage > pageCount) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
  }

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt,
  };

  books.push(newBook);

  const isSuccess = books.some((book) => book.id === id);

  if (isSuccess) {
    return res.status(201).json({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  });
};

// Kriteria 4: Menampilkan Seluruh Buku (+ Opsional Query Params)
const getAllBooksHandler = (req, res) => {
  const {name, reading, finished} = req.query;

  let filteredBooks = books;

  // Opsional: Filter by name (non-case sensitive)
  if (name !== undefined) {
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  // Opsional: Filter by reading (0 or 1)
  if (reading !== undefined) {
    filteredBooks = filteredBooks.filter((book) =>
      book.reading === (reading === '1'),
    );
  }

  // Opsional: Filter by finished (0 or 1)
  if (finished !== undefined) {
    filteredBooks = filteredBooks.filter((book) =>
      book.finished === (finished === '1'),
    );
  }

  return res.status(200).json({
    status: 'success',
    data: {
      books: filteredBooks.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
};

// Kriteria 5: Menampilkan Detail Buku
const getBookByIdHandler = (req, res) => {
  const {bookId} = req.params;

  const book = books.find((n) => n.id === bookId);

  if (book !== undefined) {
    return res.status(200).json({
      status: 'success',
      data: {
        book,
      },
    });
  }

  return res.status(404).json({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
};

// Kriteria 6: Mengubah Data Buku
const editBookByIdHandler = (req, res) => {
  const {bookId} = req.params;
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = req.body;

  const finished = pageCount === readPage;
  const updatedAt = new Date().toISOString();

  // Validasi: Tidak ada properti name
  if (!name) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
  }

  // Validasi: readPage lebih besar dari pageCount
  if (readPage > pageCount) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
  }

  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished,
      updatedAt,
    };

    return res.status(200).json({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
  }

  return res.status(404).json({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
};

// Kriteria 7: Menghapus Buku
const deleteBookByIdHandler = (req, res) => {
  const {bookId} = req.params;

  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);
    return res.status(200).json({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
  }

  return res.status(404).json({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
};

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
};
