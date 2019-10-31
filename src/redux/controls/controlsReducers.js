import { combineReducers } from 'redux';
import { Type } from './controlsActions';

const modalLogoutOpenReducer = (state = false, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const summaryModalOpenReducer = (state = false, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
const modalCongratsOpenReducer = (state = false, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  modalLogoutOpen: modalLogoutOpenReducer,
  summaryModalOpen: summaryModalOpenReducer,
  modalCongratsOpen: modalCongratsOpenReducer,
});