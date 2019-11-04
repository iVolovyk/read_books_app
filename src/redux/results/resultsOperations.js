/* eslint-disable */
import * as api from '../../services/api';
import { fetchStart, fetchSuccess, fetchFailure } from './resultsActions';

export const asyncGetBook = () => (dispatch, getStore) => {
  console.log('asyncGetBook - START');

  // const { token } = getStore().session;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYjgyY2ZiYmRhMWNjNTIxMzA3YjRhMSIsImlhdCI6MTU3MjUyNTI2MH0.UJGpkUQ5CjsCLO70fukNKcc_9_z5mp30kWqgsS3Fg30';

  console.log('token - ', token);
  if (!token) {
    return;
  }
  api
    .getBooks(token)
    .then(data => dispatch(fetchSuccess(data.data.books)))
    .catch(err => dispatch(fetchFailure(err)));
};
