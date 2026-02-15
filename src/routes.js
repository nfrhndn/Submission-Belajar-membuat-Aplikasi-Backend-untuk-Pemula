const Joi = require('joi');
const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
    options: {
      description: 'Add a new book',
      notes: 'Adds a new book details to the bookshelf. Logic rule: readPage cannot be greater than pageCount.',
      tags: ['api'],
      validate: {
        payload: Joi.object({
          name: Joi.string().required().description('The name of the book').example('Buku A'),
          year: Joi.number().integer().required().description('The year the book was published').example(2010),
          author: Joi.string().required().description('The author of the book').example('John Doe'),
          summary: Joi.string().required().description('A summary of the book').example('Lorem ipsum dolor sit amet'),
          publisher: Joi.string().required().description('The publisher of the book').example('Dicoding Indonesia'),
          pageCount: Joi.number().integer().required().description('Total number of pages').example(100),
          readPage: Joi.number().integer().required().description('Number of pages read (must be <= pageCount)').example(25),
          reading: Joi.boolean().required().description('Whether the book is currently being read').example(false),
        }),
      },
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
    options: {
      description: 'Get all books',
      notes: 'Returns a list of books. Supports filtering by name, reading status, and finished status.',
      tags: ['api'],
      validate: {
        query: Joi.object({
          name: Joi.string().optional().description('Filter by name (case-insensitive)').example('Dicoding'),
          reading: Joi.string().valid('0', '1').optional().description('Filter by reading status (0 = false, 1 = true)').example('1'),
          finished: Joi.string().valid('0', '1').optional().description('Filter by finished status (0 = false, 1 = true)').example('0'),
        }),
      },
    },
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
    options: {
      description: 'Get book by ID',
      notes: 'Returns details of a specific book',
      tags: ['api'],
      validate: {
        params: Joi.object({
          bookId: Joi.string().required().description('The ID of the book').example('INSERT_ID_HERE'),
        }),
      },
    },
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
    options: {
      description: 'Update book by ID',
      notes: 'Updates the details of a specific book. Logic rule: readPage cannot be greater than pageCount.',
      tags: ['api'],
      validate: {
        params: Joi.object({
          bookId: Joi.string().required().description('The ID of the book').example('INSERT_ID_HERE'),
        }),
        payload: Joi.object({
          name: Joi.string().required().description('The name of the book').example('Buku A Revisi'),
          year: Joi.number().integer().required().description('The year the book was published').example(2011),
          author: Joi.string().required().description('The author of the book').example('Jane Doe'),
          summary: Joi.string().required().description('A summary of the book').example('Lorem Dolor sit Ametttt'),
          publisher: Joi.string().required().description('The publisher of the book').example('Dicoding'),
          pageCount: Joi.number().integer().required().description('Total number of pages').example(200),
          readPage: Joi.number().integer().required().description('Number of pages read (must be <= pageCount)').example(26),
          reading: Joi.boolean().required().description('Whether the book is currently being read').example(false),
        }),
      },
    },
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
    options: {
      description: 'Delete book by ID',
      notes: 'Deletes a book from the bookshelf',
      tags: ['api'],
      validate: {
        params: Joi.object({
          bookId: Joi.string().required().description('The ID of the book').example('INSERT_ID_HERE'),
        }),
      },
    },
  },
];

module.exports = routes;
