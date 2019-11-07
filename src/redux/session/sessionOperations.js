// import * as sessionSelectors from './sessionSelectors';
import { toast } from 'react-toastify';
import * as sessionActions from './sessionActions';
import * as api from '../../services/api';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

export const getUserOperation = () => (dispatch, getStore) => {
  const { token } = getStore().session;
  if (!token) {
    return;
  }
  dispatch(sessionActions.getUserStart());
  api
    .getUserByToken(token)
    .then(response =>
      dispatch(sessionActions.getUserSuccess(response.data.user)),
    )
    .catch(error => {
      dispatch(sessionActions.getUserError(error));
    });
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
    });
};

export const registrateOperation = credentials => dispatch => {
  dispatch(sessionActions.registrationStart());
  api
    .register(credentials)
    .then(response => {
      if (response.data.user) {
        dispatch(sessionActions.registrationSuccess(response.data.user));
      } else if (response.data.error) {
        toast.error(
          'Користвач з такою електронною поштою вже зареєстрований.',
          {
            position: toast.POSITION.BOTTOM_RIGHT,
          },
        );
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const loginOperation = credentials => dispatch => {
  dispatch(sessionActions.loginStart());
  api
    .login(credentials)
    .then(response => {
      dispatch(sessionActions.loginSuccess(response.data.user));
    })
    .catch(error => {
      if (!error.response.data.error) {
        toast.error('Невалідна електронна пошта.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        dispatch(sessionActions.loginError('Invalid email'));
        return;
      }

      if (error.response.data.error.includes('password')) {
        toast.error('Невірний пароль.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else if (error.response.data.error.includes('User')) {
        toast.error('Такого користувача не існує.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
      dispatch(sessionActions.loginError(error.response.data.error));
    });
};
