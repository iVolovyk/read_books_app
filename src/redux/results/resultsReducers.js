import { Type } from './resultsActions';

const resultsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_RESULT:
      return [payload, ...state];
    default:
      return state;
  }
};

export default resultsReducer;
