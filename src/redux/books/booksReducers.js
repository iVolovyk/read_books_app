import { Type } from './booksActions';
import books from '../../books.json';

const booksReducer = (state = books, { type, payload }) => {
  switch (type) {
    case Type.ADD_BOOKS:
      return [payload, ...state];
    default:
      return state;
  }
};

export default booksReducer;

/* для сервера */
// const booksReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case Type.ADD_BOOK_SUCCESS:
//       return [payload, ...state];
//     default:
//       return state;
//   }
// };
