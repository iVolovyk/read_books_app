export const Type = {
  ADD_BOOKS: 'ADD_BOOKS',
  ADD_BOOK_START: 'ADD_BOOK_START',
  ADD_BOOK_SUCCESS: 'ADD_BOOK_SUCCESS',
  ADD_BOOK_ERROR: 'ADD_BOOK_ERROR',
  GET_BOOK_START: 'GET_BOOK_START',
  GET_BOOK_SUCCESS: 'GET_BOOK_SUCCESS',
  GET_BOOK_FAILURE: 'GET_BOOK_FAILURE',
  GET_PLANE_READ_BOOKS: 'GET_PLANE_READ_BOOKS',
  GET_NOW_READ_BOOKS: 'GET_NOW_READ_BOOKS',
  GET_READ_BOOKS: 'GET_READ_BOOKS',
};

export const addBooks = book => ({
  type: Type.ADD_BOOKS,
  payload: book,
});

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
