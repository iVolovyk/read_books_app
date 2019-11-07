import { Type } from './loaderActions';
import * as SessionType from '../session/sessionActions';
import * as BooksType from '../books/booksActions';
import * as TrainingType from '../training/trainingActions';

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case Type.LOADER_ON: // Включить спиннер
    case SessionType.Type.GET_USER_START:
    case BooksType.Type.ADD_BOOK_START:
    case TrainingType.Type.POST_CHEKED_START:
    case TrainingType.Type.ADD_RESULT_START:
    case TrainingType.Type.GET_BOOK_START:
      return true;
    case Type.LOADER_OFF: // Выключить спиннер
    case SessionType.Type.REGISTRATION_SUCCESS:
    case SessionType.Type.REGISTRATION_ERROR:
    case SessionType.Type.GET_USER_SUCCESS:
    case SessionType.Type.GET_USER_ERROR:
    case BooksType.Type.ADD_BOOK_SUCCESS:
    case BooksType.Type.ADD_BOOK_ERROR:
    case TrainingType.Type.POST_CHEKED_SUCCESS:
    case TrainingType.Type.POST_CHEKED_ERROR:
    case TrainingType.Type.GET_BOOK_SUCCESS:
    case TrainingType.Type.GET_BOOK_FAILURE:
    case TrainingType.Type.ADD_RESULT_SUCCESS:
    case TrainingType.Type.ADD_RESULT_FAILURE:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
