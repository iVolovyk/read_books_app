import { combineReducers } from 'redux';
import { Type } from './controlsActions';

const modalLogoutOpenReducer = (state = false, action) => {
  switch (action.type) {
    case Type.SET_LOGOUT:
      return action.logoutIndicator;

    default:
      return state;
  }
};

const summaryModalOpenReducer = (state = false, { type, payload }) => {
  switch (type) {
    case Type.SET_SUMMARY_MODAL_ON:
      return payload;
    default:
      return state;
  }
};

const modalCongratsOpenReducer = (state = false, { type }) => {
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
