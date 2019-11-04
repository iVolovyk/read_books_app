/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getBooksForCheckList,
  getTrainingId,
} from '../../redux/training/trainingSelectors';
import styles from './WorkoutInfo.module.css';
import { addChekedBook } from '../../redux/training/trainingOperations';

class WorkoutInfo extends Component {
  state = {};

  handleChange = e => {
    const { name, checked } = e.target;

    const chekBookInfo = {
      bookId: name,
      TrainingId: this.props.TrainingId,
      checked,
    };

    this.props.addChekedBook(chekBookInfo);
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
                      onChange={this.handleChange}
                    />

                    <p className={styles.fakeCheckbox} />
                    <p className={styles.titleBook}>{book.title}</p>

                    <p className={styles.author}>
                      {deviseWidth < tabletWidth && (
                        <p className={styles.titleAuthor}>Автор:</p>
                      )}
                      {book.author}
                    </p>

                    <p className={styles.year}>
                      {deviseWidth < tabletWidth && (
                        <p className={styles.titleYear}>Рік:</p>
                      )}
                      {book.year}
                    </p>

                    <p className={styles.pages}>
                      {deviseWidth < tabletWidth && (
                        <p className={styles.titlePages}>Стор.:</p>
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

const mapStateToProps = store => ({
  books: getBooksForCheckList(store),
  TrainingId: getTrainingId(store),
});

const mapDispatchToProps = {
  addChekedBook,
};

WorkoutInfo.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({ isRead: PropTypes.bool.isRequired }),
  ).isRequired,
  addChekedBook: PropTypes.func.isRequired,
  TrainingId: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkoutInfo);
