import { Type } from './booksActions';

const booksReducer = (state = [], { type, payload }) => {
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