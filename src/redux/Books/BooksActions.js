/* eslint-disable import/prefer-default-export */
export const Type = {
  ADD_BOOKS: 'ADD_BOOKS',
};

export const addBooks = book => ({
  type: Type.ADD_BOOKS,
  payload: book,
});
