import { Type } from './loaderActions';
import * as SessionType from '../session/sessionActions';

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case Type.LOADER_ON: // Включить спиннер
    case SessionType.Type.REGISTRATION_START:
    case SessionType.Type.LOG_IN_START:
      return true;
    case Type.LOADER_OFF: // Выключить спиннер
    case SessionType.Type.REGISTRATION_SUCCESS:
    case SessionType.Type.REGISTRATION_ERROR:
    case SessionType.Type.LOG_IN_SUCCESS:
    case SessionType.Type.LOG_IN_ERROR:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
