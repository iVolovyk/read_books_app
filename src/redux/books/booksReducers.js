import { Type } from './booksActions';
import * as training from '../training/trainingActions';

const booksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case training.Type.GET_BOOK_SUCCESS:
      return payload;
    case training.Type.GET_BOOK_FAILURE:
      return [];
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
