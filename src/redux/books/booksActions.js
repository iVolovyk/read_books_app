export const Type = {
  ADD_BOOKS: 'ADD_BOOKS',
  ADD_BOOK_START: 'ADD_BOOK_START',
  ADD_BOOK_SUCCESS: 'ADD_BOOK_SUCCESS',
  ADD_BOOK_ERROR: 'ADD_BOOK_ERROR',
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