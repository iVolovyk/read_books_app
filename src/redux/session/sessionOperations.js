import axios from 'axios';
import {
  registrationStart,
  registrationSuccess,
  registrationError,
} from './sessionActions';

export const registration = data => (dispatch, getStore) => {
  dispatch(registrationStart());
  dispatch(registrationSuccess(data));
  console.log(getStore());
};
