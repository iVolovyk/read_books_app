/* eslint-disable */
//получаем функции для запросов на сервер...
import * as api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { haveTraining } from '../session/sessionSelectors';
import { giveTrainingId } from './trainingSelectors';

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
  fetchStartAddRes,
  fetchSuccessAddRes,
} from './trainingActions';

//Экспортируем Оперецию в HOC getUserInfo
export const asyncGetBook = dataResult => (dispatch, getStore) => {
  const { token } = getStore().session;

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
      .then(data => dispatch(fetchSuccessTrening(data.data.training))) //data => dispatch(fetchSuccessTrening(data.data.books)))
      .catch(err => {
        toast.error('Помилка завантаження Тренінгу... Спробуйте пізніше...', {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar',
        });
        return dispatch(fetchFailureTrening(err));
      });
  }
};

export const onSetResult = dataResult => (dispatch, getStore) => {
  const { token } = getStore().session;

  // проверяем наличие токина если  он не пришел выходим
  if (!token) {
    return;
  }
  // если токен пришел
  //Запускаем Акшен сиглализирующий о начале асинхронной операции..
  dispatch(fetchStartAddRes());

  if (haveTraining(getStore())) {
    api
      .addResult(dataResult, token, giveTrainingId(getStore()))
      .then(data => dispatch(fetchSuccessAddRes(data.data.pagesReadResult))) //data => dispatch(fetchSuccessTrening(data.data.books)))
      .catch(err => {
        toast.error('Помилка додавання результаты... Спробуйте пізніше...', {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar',
        });
        return dispatch(fetchFailureAddRes(err));
      });
  }
};
