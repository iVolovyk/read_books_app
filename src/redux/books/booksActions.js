export const Type = {
  ADD_BOOK_START: 'ADD_BOOK_START',
  ADD_BOOK_SUCCESS: 'ADD_BOOK_SUCCESS',
  ADD_BOOK_ERROR: 'ADD_BOOK_ERROR',
  GET_PLANE_READ_BOOKS: 'GET_PLANE_READ_BOOKS',
  GET_NOW_READ_BOOKS: 'GET_NOW_READ_BOOKS',
  GET_READ_BOOKS: 'GET_READ_BOOKS',
  CHANGE_BOOKS_STATS_START: 'CHANGE_BOOKS_STATS_START',
  CHANGE_BOOKS_STATS_SUCCESS: 'CHANGE_BOOKS_STATS_SUCCESS',
  CHANGE_BOOKS_STATS_ERROR: 'CHANGE_BOOKS_STATS_ERROR',
};

export const addBooks = book => ({
  type: Type.ADD_BOOKS,
  payload: book,
});
/*
 * Add Book
 */

export const addBookStart = () => ({
  type: Type.ADD_BOOK_START,
});

export const addBookSuccess = book => ({
  type: Type.ADD_BOOK_SUCCESS,
  payload: book,
});

export const addBookError = error => ({
  type: Type.ADD_BOOK_ERROR,
  payload: {
    error,
  },
});

export const changeBookStatsStart = () => ({
  type: Type.CHANGE_BOOKS_STATS_START,
});

export const changeBookStatsSuccess = book => ({
  type: Type.CHANGE_BOOKS_STATS_SUCCESS,
  payload: book,
});

export const changeBookStatsError = error => ({
  type: Type.CHANGE_BOOKS_STATS_ERROR,
  payload: {
    error,
  },
});
