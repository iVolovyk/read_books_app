import { combineReducers } from 'redux';
import { Type } from './controlsActions';

const modalLogoutOpenReducer = (state = false, action) => {
  switch (action.type) {
    case Type.SET_LOGOUT:
      return action.logoutIndicator;
    case Type.RESET_COMPONENT:
      return false;
    default:
      return state;
  }
};

const summaryModalOpenReducer = (state = false, { type, payload }) => {
  switch (type) {
    case Type.RESET_COMPONENT:
      return false;
    case Type.SET_SUMMARY_MODAL_ON:
      return payload;
    default:
      return state;
  }
};

const modalCongratsOpenReducer = (state = false, { type, payload }) => {
  switch (type) {
    case Type.SET_MODAL_CONGRATS_OPEN:
      return payload;
    case Type.SET_MODAL_CONGRATS_CLOSE:
      return payload;
    default:
      return state;
  }
};

const modalNeedFasterReducer = (state = false, { type, payload }) => {
  switch (type) {
    case Type.RESET_COMPONENT:
      return false;
    case Type.SET_MODAL_NEED_FASTER_OPEN:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  modalLogoutOpen: modalLogoutOpenReducer,
  summaryModalOpen: summaryModalOpenReducer,
  modalCongratsOpen: modalCongratsOpenReducer,
  modalNeedFasterOpen: modalNeedFasterReducer,
});
