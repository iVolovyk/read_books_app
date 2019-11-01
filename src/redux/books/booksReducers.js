import { Type } from './booksActions';

/* для сервера */
const booksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_BOOK_SUCCESS:
      return [payload.book, ...state];
    default:
      return state;
  }
};

export default booksReducer;
