import { Type } from './booksActions';

/* для сервера */
// eslint-disable-next-line import/prefer-default-export
export const booksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_BOOK_SUCCESS:
      return [payload.book, ...state];
    default:
      return state;
  }
};
