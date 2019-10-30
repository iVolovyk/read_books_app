import { Type } from './loaderActions';

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case Type.LOADER_ON:
      return true;
    case Type.LOADER_OFF:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
