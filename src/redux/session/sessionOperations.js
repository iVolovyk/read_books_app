// import * as sessionSelectors from './sessionSelectors';
import * as sessionActions from './sessionActions';
import * as api from '../../services/api';

export const logInWithGoogleOperation = () => (dispatch, getStore) => {
  const { token } = getStore().session;
  if (!token) {
    return;
  }
  api
    .getUserByToken(token)
    .then(response =>
      dispatch(sessionActions.getUserWithGoogle(response.data.user)),
    )
    .catch(error => {
      dispatch(sessionActions.getUserError(error));
    });
  // .finally(console.log('finally'));
};

export const logOutOperation = () => (dispatch, getStore) => {
  const { token } = getStore().session;
  if (!token) {
    return;
  }
  api
    .logOut(token)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(console.log('finally'));
};

export const registrateOperation = credentials => dispatch => {
  dispatch(sessionActions.registrationStart());
  api
    .register(credentials)
    .then(response => {
      console.log(response.data.user.token);
      dispatch(sessionActions.registrationSuccess(response.data.user));
    })
    .catch(error => {
      console.log(error);
      dispatch(sessionActions.registrationError(error));
    })
    .finally();
};

export const loginOperation = credentials => dispatch => {
  dispatch(sessionActions.loginStart());
  api
    .login(credentials)
    .then(response => {
      console.log(response.data.user.token);
      dispatch(sessionActions.loginSuccess(response.data.user));
    })
    .catch(error => {
      console.log(error);
      dispatch(sessionActions.loginError(error));
    })
    .finally();
};
