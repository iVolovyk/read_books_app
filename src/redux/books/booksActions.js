export const Type = {
  ADD_BOOK_START: 'ADD_BOOK_START',
  ADD_BOOK_SUCCESS: 'ADD_BOOK_SUCCESS',
  ADD_BOOK_ERROR: 'ADD_BOOK_ERROR',
  GET_PLANE_READ_BOOKS: 'GET_PLANE_READ_BOOKS',
  GET_NOW_READ_BOOKS: 'GET_NOW_READ_BOOKS',
  GET_READ_BOOKS: 'GET_READ_BOOKS',
};

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
