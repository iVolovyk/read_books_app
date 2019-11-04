// import * as sessionSelectors from './sessionSelectors';
import { getUserWithGoogle, getUserError } from './sessionActions';
import * as api from '../../services/api';

const logInWithGoogleOperation = () => (dispatch, getStore) => {
  const { token } = getStore().session;
  if (!token) {
    return;
  }
  api
    .getUserByToken(token)
    .then(response => dispatch(getUserWithGoogle(response.data.user)))
    .catch(error => {
      dispatch(getUserError(error));
    });
  // .finally(console.log('finally'));
};

// const logOutOperation = () => (dispatch, getStore) => {
//   const { token } = getStore().session;
//   if (!token) {
//     return;
//   }
//   api
//     .getUserByToken(token)
//     .then(response => dispatch(getUserWithGoogle(response.data.user)))
//     .catch(error => {
//       console.log(error);
//       dispatch(getUserError(error));
//     })
//     .finally(console.log('finally'));
// };

export default logInWithGoogleOperation;
