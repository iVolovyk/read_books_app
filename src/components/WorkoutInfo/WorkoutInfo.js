/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import styles from './WorkoutInfo.module.css';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

class WorkoutInfo extends Component {
  state = {};

  handleChange = e => {
    const { name, checked, value } = e.target;
    const { ReadPages, ReadPagesCheked } = this.props;
    if (value <= ReadPages - ReadPagesCheked || !checked) {
      const chekBookInfo = {
        bookId: name,
        TrainingId: this.props.TrainingId,
        checked,
      };

      const patchObject = {
        isRead: checked,
      };

      this.props.addChekedBook(chekBookInfo, patchObject);
    } else {
      toast.error('Недостатня кількість прочитаних сторінок.', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar',
      });
    }
  };

  render() {
    const mobileMaxWidth = 767;
    const tabletWidth = 768;
    const deviseWidth = document.documentElement.clientWidth;
    const { books } = this.props;

    return (
      <div className={styles.WorkoutInfo}>
        {deviseWidth > mobileMaxWidth && (
          <div className={styles.headTable}>
            <p className={styles.bookNameTable}>Назва книги</p>
            <p className={styles.authorNameTable}>Автор</p>
            <p className={styles.yearTable}>Рік</p>
            <p className={styles.pageNumberTable}>Стор.</p>
          </div>
        )}

        <div>
          <ul className={styles.listBooks}>
            {books.map(({ book, isRead, trainingBookId }) => (
              <li key={trainingBookId} className={styles.liBookBorder}>
                <label>
                  <div className={styles.itemBook}>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      name={trainingBookId}
                      checked={isRead}
                      value={book.pagesCount}
                      onChange={this.handleChange}
                    />

                    <p className={styles.fakeCheckbox} />
                    <p className={styles.titleBook}>{book.title}</p>

                    <p className={styles.author}>
                      {deviseWidth < tabletWidth && (
                        <span className={styles.titleAuthor}>Автор:</span>
                      )}
                      {book.author}
                    </p>

                    <p className={styles.year}>
                      {deviseWidth < tabletWidth && (
                        <span className={styles.titleYear}>Рік:</span>
                      )}
                      {book.year}
                    </p>

                    <p className={styles.pages}>
                      {deviseWidth < tabletWidth && (
                        <span className={styles.titlePages}>Стор.:</span>
                      )}
                      {book.pagesCount}
                    </p>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

WorkoutInfo.defaultProps = {
  TrainingId: '',
  ReadPages: 0,
  ReadPagesCheked: 0,
};

WorkoutInfo.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({ isRead: PropTypes.bool.isRequired }),
  ).isRequired,
  addChekedBook: PropTypes.func.isRequired,
  TrainingId: PropTypes.string,
  ReadPages: PropTypes.number,
  ReadPagesCheked: PropTypes.number,
};

export default WorkoutInfo;
