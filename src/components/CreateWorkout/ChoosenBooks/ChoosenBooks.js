import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { ReactComponent as Deletelogo } from '../../../assets/icons/delete/delete-24px.svg';
import { ReactComponent as LibraryBook } from '../../../assets/icons/library/menu_book-24px.svg';

const ChosenBooks = ({ books, onClick }) => {
  const mobileMaxWidth = 767;
  const tabletWidth = 768;
  const deviseWidth = document.documentElement.clientWidth;
  return (
    <div className={styles.ChosenBooks}>
      {deviseWidth > mobileMaxWidth && (
        <div className={styles.notMobileHeadline}>
          <p className={styles.bookName}>Назва Книги</p>
          <p className={styles.authorName}>Автор</p>
          <p className={styles.year}>Рік</p>
          <p className={styles.pageNumber}>Сторінок</p>
        </div>
      )}
      <ul className={styles.bookList}>
        <li className={styles.bookInfo}>
          <LibraryBook className={styles.libraryIcon} />
          <p className={styles.bookHeadline}>Теория происхождения теорий</p>
          <p className={styles.authorsNameSername}>
            {deviseWidth < tabletWidth && (
              <span className={styles.mobileHeadline}>Автор:</span>
            )}
            Пупа
          </p>
          <p className={styles.yearOfPublication}>
            {deviseWidth < tabletWidth && (
              <span className={styles.mobileHeadline}>Рік:</span>
            )}
            2014
          </p>
          <p className={styles.numberOfBookPages}>
            {deviseWidth < tabletWidth && (
              <span className={styles.mobileHeadline}>Сторінок:</span>
            )}
            30
          </p>
          <Deletelogo className={styles.delete} />
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
