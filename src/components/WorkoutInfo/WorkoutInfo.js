/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import styles from './WorkoutInfo.module.css';
import BooksBase from '../../books.json';

export default class Timer extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.setState({
      books: BooksBase,
    });
  }

  handleChange = e => {
    const { name } = e.target;

    this.setState(state => ({
      books: state.books.map(book =>
        book.id === name ? { ...book, checked: !book.checked } : book,
      ),
    }));
  };

  render() {
    const { books } = this.state;
    const mobileMaxWidth = 767;
    const tabletWidth = 768;
    const deviseWidth = document.documentElement.clientWidth;
    return (
      <>
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
            {books.map(({ title, author, year, pageNumber, checked, id }) => (
              <li key={id} className={styles.liBookBorder}>
                <label>
                  <div className={styles.itemBook}>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      name={id}
                      checked={checked}
                      onChange={this.handleChange}
                    />

                    <p className={styles.fakeCheckbox} />
                    <p className={styles.titleBook}>{title}</p>

                    <p className={styles.author}>
                      {deviseWidth < tabletWidth && (
                        <p className={styles.titleAuthor}>Автор:</p>
                      )}
                      {author}
                    </p>

                    <p className={styles.year}>
                      {deviseWidth < tabletWidth && (
                        <p className={styles.titleYear}>Рік:</p>
                      )}
                      {year}
                    </p>

                    <p className={styles.pages}>
                      {deviseWidth < tabletWidth && (
                        <p className={styles.titlePages}>Стор.:</p>
                      )}
                      {pageNumber}
                    </p>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
