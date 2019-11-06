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
      {books.length > 0 && (
        <>
          {deviseWidth > mobileMaxWidth && (
            <div className={styles.notMobileHeadline}>
              <p className={styles.bookName}>Назва Книги</p>
              <p className={styles.authorName}>Автор</p>
              <p className={styles.year}>Рік</p>
              <p className={styles.pageNumber}>Сторінок</p>
            </div>
          )}
        </>
      )}
      <ul className={styles.bookList}>
        {books.map(book => (
          <li key={book._id} className={styles.bookInfo}>
            <LibraryBook className={styles.libraryIcon} />
            <p className={styles.bookHeadline}>{book.title}</p>
            <p className={styles.authorsNameSername}>
              {deviseWidth < tabletWidth && (
                <span className={styles.mobileHeadline}>Автор:</span>
              )}
              {book.author}
            </p>
            <p className={styles.yearOfPublication}>
              {deviseWidth < tabletWidth && (
                <span className={styles.mobileHeadline}>Рік:</span>
              )}
              {book.year}
            </p>
            <p className={styles.numberOfBookPages}>
              {deviseWidth < tabletWidth && (
                <span className={styles.mobileHeadline}>Сторінок:</span>
              )}
              {book.pagesCount}
            </p>
            <button
              className={styles.deleteButt}
              type="button"
              onClick={onClick}
              value={book._id}
            >
              <Deletelogo className={styles.delete} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ChosenBooks.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      year: PropTypes.number,
      pagesCount: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChosenBooks;
