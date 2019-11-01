/* eslint-disable */
//получаем функции для запросов на сервер...
import * as api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { haveTraining } from '../session/sessionSelectors';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

// получаем акшены для всех стадий запроса на сервер...
import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  fetchSuccessTrening,
  fetchFailureTrening,
} from './trainingActions';

//Экспортируем Оперецию в HOC getUserInfo
export const asyncGetBook = () => (dispatch, getStore) => {
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // const { token } = getStore().session;
  console.log('asyncGetBook - START');
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYjgyY2ZiYmRhMWNjNTIxMzA3YjRhMSIsImlhdCI6MTU3MjUyNTI2MH0.UJGpkUQ5CjsCLO70fukNKcc_9_z5mp30kWqgsS3Fg30';
  console.log('token - ', token);
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // проверяем наличие токина если  он не пришел выходим
  if (!token) {
    return;
  }
  // если токен пришел
  //Запускаем Акшен сиглализирующий о начале асинхронной операции..
  dispatch(fetchStart());

  // Запускаем асинхронную функци. получения массива книг обрабатываем промис резолв и реджект..
  api
    .getBooks(token)
    .then(data => dispatch(fetchSuccess(data.data.books)))
    .catch(err => {
      toast.error(
        'Помилка завантаження книжок... Спробуйте перезавантажити сторінку...',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar',
        },
      );
      return dispatch(fetchFailure(err));
    });

  if (haveTraining(getStore())) {
    api
      .getTraining(token)
      .then(data => console.log(data.data)) //data => dispatch(fetchSuccessTrening(data.data.books)))
      .catch(err => {
        toast.error('Помилка завантаження Тренінгу... Спробуйте пізніше...', {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar',
        });
        return dispatch(fetchFailureTrening(err));
      });
  }
};
