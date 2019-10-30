import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { ReactComponent as Deletelogo } from '../../../assets/icons/delete/delete-24px.svg';

const ChosenBooks = ({ books }) => {
  return (
    <div className={styles.ChosenBooks}>
      <div className={styles.notMobileHeadline}>
        <p className={styles.bookName}>Назва Книги</p>
        <p>Автор</p>
        <p>Сторінок</p>
        <p>Видалити</p>
      </div>
      <ul className={styles.bookList}>
        <li className={styles.bookInfo}>
          <p className={styles.characteristics}> Теория происхождения теорий</p>
          <p className={styles.characteristics}>
            <span className={styles.mobileHeadline}>Автор:</span> Пупа
          </p>
          <p className={styles.characteristics}>
            <span className={styles.mobileHeadline}>Сторінок:</span> 30
          </p>
          <p className={styles.characteristics}>
            <span className={styles.mobileHeadline}>Рік:</span> 2014
          </p>
          <Deletelogo />
        </li>
        <li className={styles.bookInfo}>
          <p> Гипотеза возникновения гипотиз</p>
          <p>
            <span>Автор:</span> Лупа
          </p>
          <p>
            <span>Сторінок:</span> 43
          </p>
          <p>
            <span>Рік:</span> 2014
          </p>
          <p>
            <span>Видалити:</span>delete
          </p>
        </li>
      </ul>
    </div>
  );
};

ChosenBooks.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ChosenBooks;
